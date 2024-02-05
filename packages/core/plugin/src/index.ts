import plugin from 'tailwindcss/plugin.js';
import get from 'lodash.get';
import { ColorMode } from '@myra-ui/colors';
import forEach from 'lodash.foreach';
import Color from 'color';
import omit from 'lodash.omit';
import deepMerge from 'deepmerge';
import { ConfigTheme, ConfigThemes, isBaseTheme, resolveThemeColors, ThemeColors } from '@myra-ui/system';
import { flattenObject } from '@myra-ui/shared-utils';
import { semanticColors } from './semantic';
import { MyraUIPluginConfig } from './plugin.types';

const DEFAULT_PREFIX = 'myra-ui';

const parsedColorsCache: Record<string, number[]> = {};

const resolveConfig = (themes: ConfigThemes = {}, defaultTheme: ColorMode, prefix: string) => {
  const resolved: {
    variants: { name: string; definition: string[] }[];
    utilities: Record<string, Record<string, any>>;
    colors: Record<string, ({ opacityValue, opacityVariable }: { opacityValue: string; opacityVariable: string }) => string>;
  } = {
    variants: [],
    utilities: {},
    colors: {},
  };

  for (const [themeName, { colors, colorMode }] of Object.entries(themes)) {
    let cssSelector = `.${themeName},[data-theme="${themeName}"]`;
    const scheme = themeName === 'light' || themeName === 'dark' ? themeName : colorMode;

    if (themeName === defaultTheme) {
      cssSelector = `:root,${cssSelector}`;
    }

    resolved.utilities[cssSelector] = scheme ? { 'color-scheme': scheme } : {};

    const resolvedColors = resolveThemeColors(colors || {});

    const flatColors = flattenObject(resolvedColors);

    resolved.variants.push({
      name: themeName,
      definition: [`&.${themeName}`, `&[data-theme='${themeName}']`],
    });

    for (const [colorName, colorValue] of Object.entries(flatColors)) {
      if (!colorValue) return;

      try {
        const parsedColor = parsedColorsCache[colorValue] || Color(colorValue).hsl().round().array();

        parsedColorsCache[colorValue] = parsedColor;

        const [h, s, l, defaultAlphaValue] = parsedColor;
        const myraUIColorVariable = `--${prefix}-${colorName}`;
        const myraUIOpacityVariable = `--${prefix}-${colorName}-opacity`;

        // set the css variable in "@layer utilities"
        resolved.utilities[cssSelector]![myraUIColorVariable] = `${h} ${s}% ${l}%`;
        // if an alpha value was provided in the color definition, store it in a css variable
        if (typeof defaultAlphaValue === 'number') {
          resolved.utilities[cssSelector]![myraUIOpacityVariable] = defaultAlphaValue.toFixed(2);
        }
        // set the dynamic color in tailwind config theme.colors
        resolved.colors[colorName] = ({ opacityVariable, opacityValue }) => {
          // if the opacity is set  with a slash (e.g. bg-primary/90), use the provided value
          if (!isNaN(+opacityValue)) {
            return `hsl(var(${myraUIColorVariable}) / ${opacityValue})`;
          }
          // if no opacityValue was provided (=it is not parsable to a number)
          // the nextuiOpacityVariable (opacity defined in the color definition rgb(0, 0, 0, 0.5)) should have the priority
          // over the tw class based opacity(e.g. "bg-opacity-90")
          // This is how tailwind behaves as for v3.2.4
          if (opacityVariable) {
            return `hsl(var(${myraUIColorVariable}) / var(${myraUIOpacityVariable}, var(${opacityVariable})))`;
          }

          return `hsl(var(${myraUIColorVariable}) / var(${myraUIOpacityVariable}, 1))`;
        };
      } catch (e: any) {
        console.error('error', e?.message);
      }
    }
  }

  return resolved;
};

const corePlugin = (themes: ConfigThemes = {}, defaultTheme: ColorMode, prefix: string) => {
  const resolved = resolveConfig(themes, defaultTheme, prefix);

  return plugin(
    ({ addBase, addUtilities, addVariant }) => {
      // add base classNames
      addBase({
        [':root, [data-theme]']: {},
      });

      addUtilities({ ...resolved?.utilities });

      resolved?.variants.forEach((variant) => {
        addVariant(variant.name, variant.definition);
      });
    },
    {
      theme: {
        extend: {
          // @ts-ignore
          colors: {
            ...resolved?.colors,
          },
        },
      },
    }
  );
};

const myrauiPlugin = (config: MyraUIPluginConfig = {}): ReturnType<typeof plugin> => {
  const { themes: themeObject = {}, defaultTheme = 'light', defaultColorMode = 'light', prefix: defaultPrefix = DEFAULT_PREFIX } = config;

  const userLightColors = get(themeObject, 'light.colors', {}) as any;
  const userDarkColors = get(themeObject, 'dark.colors', {}) as any;

  // get other themes from the config different from light and dark
  let otherThemes = omit(themeObject, ['light', 'dark']) || {};

  forEach(otherThemes, ({ colorMode, colors }, themeName) => {
    const baseTheme = colorMode && isBaseTheme(colorMode) ? colorMode : defaultColorMode;

    if (colors && typeof colors === 'object') {
      otherThemes[themeName].colors = deepMerge(semanticColors[baseTheme] as any, colors as any) as ThemeColors;
    }
  });

  const light: ConfigTheme = {
    colors: deepMerge(semanticColors.light as any, userLightColors) as ThemeColors,
  };

  const dark = {
    colors: deepMerge(semanticColors.dark as any, userDarkColors) as ThemeColors,
  };

  const themes = {
    light,
    dark,
    ...otherThemes,
  };

  return corePlugin(themes, defaultTheme, defaultPrefix);
};

export default myrauiPlugin;
