import plugin from 'tailwindcss/plugin.js';
import { ConfigTheme, ConfigThemes, MyraUIPluginConfig, ThemeColors } from './types';
import get from 'lodash.get';
import { ColorMode, getBaseColors } from '@myra-ui/colors';
import { flattenThemeObject } from './object';
import forEach from 'lodash.foreach';
import chroma from 'chroma-js';
import { baseStyles } from './classes';
import omit from 'lodash.omit';
import { isBaseTheme } from './utils/theme';
import deepMerge from 'deepmerge';

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

    const flatColors = flattenThemeObject(colors) as Record<string, string>;

    resolved.variants.push({
      name: themeName,
      definition: [`&.${themeName}`, `&[data-theme='${themeName}']`],
    });

    for (const [colorName, colorValue] of Object.entries(flatColors)) {
      if (!colorValue) return;

      try {
        const parsedColor =
          parsedColorsCache[colorValue] ||
          chroma(colorValue)
            .hsl()
            .map((value) => Math.round(value));

        parsedColorsCache[colorValue] = parsedColor;

        const [h, s, l, defaultAlphaValue] = parsedColor;
        const myraUIColorVariable = `--${prefix}-${colorName}`;
        const myraUIOpacityVariable = `--${prefix}-${colorName}-opacity`;

        // set the css variable in "@layer utilities"
        resolved.utilities[cssSelector]![myraUIColorVariable] = `${h} ${s}% ${l}%`;
        // if an alpha value was provided in the color definition, store it as a css variable

        if (typeof defaultAlphaValue === 'number') {
          resolved.utilities[cssSelector]![myraUIOpacityVariable] = defaultAlphaValue.toFixed(2);
        }

        // set the dynamic color in tailwind config theme.colors
        resolved.colors[colorName] = ({ opacityVariable, opacityValue }) => {
          // if the opacity is set with a slash (e.g. bg-primary/90), use the provided value
          if (!isNaN(+opacityValue)) {
            return `hsl(var(${myraUIColorVariable}), ${opacityValue})`;
          }

          // if no opacityValue was provided (=it is not parsable to a number)
          // the myraUIOpacityVariable (opacity defined in the color definition rgb(0,0,0,0.5)) should have the priority
          // over the tailwind class based opacity (e.g. bg-opacity-90)
          // This is how tailwind behaves as for v3.2.4
          if (opacityVariable) {
            return `hsl(var(${myraUIColorVariable}) / var(${myraUIOpacityVariable}, ${opacityVariable}))`;
          }

          return `hsl(var(${myraUIColorVariable}) / var(${myraUIOpacityVariable}, 1))`;
        };
      } catch (e: any) {
        console.error('error', e?.message);
      }
    }
  }

  console.log(resolved.colors);

  return resolved;
};

const corePlugin = (themes: ConfigThemes = {}, defaultTheme: ColorMode, prefix: string) => {
  const resolved = resolveConfig(themes, defaultTheme, prefix);

  return plugin(
    ({ addBase, addUtilities, addVariant }) => {
      // add base classNames
      addBase({
        [':root, [data-theme]']: {
          ...baseStyles(prefix),
        },
      });

      addUtilities({ ...resolved?.utilities });

      resolved?.variants.forEach((variant) => {
        addVariant(variant.name, variant.definition);
      });
    },
    {
      theme: {
        extend: {
          ...resolved?.colors,
        },
      },
    }
  );
};

export const myraUI = (config: MyraUIPluginConfig = {}): ReturnType<typeof plugin> => {
  const { themes: themeObject = {}, defaultTheme = 'light', defaultColorMode = 'light', prefix: defaultPrefix = DEFAULT_PREFIX } = config;

  const userLightColors = get(themeObject, 'light.colors', {}) as ThemeColors;
  const userDarkColors = get(themeObject, 'dark.colors', {}) as ThemeColors;

  // get other themes from the config different from light and dark
  let otherThemes = omit(themeObject, ['light', 'dark']) || {};

  forEach(otherThemes, ({ colorMode, colors }, themeName) => {
    const baseTheme = colorMode && isBaseTheme(colorMode) ? colorMode : defaultColorMode;

    if (colors && typeof colors === 'object') {
      otherThemes[themeName].colors = deepMerge(getBaseColors(baseTheme), colors);
    }
  });

  const light: ConfigTheme = {
    colors: deepMerge(getBaseColors('light'), userLightColors),
  };

  const dark = {
    colors: deepMerge(getBaseColors('dark'), userDarkColors),
  };

  const themes = {
    light,
    dark,
    ...otherThemes,
  };

  return corePlugin(themes, defaultTheme, defaultPrefix);
};
