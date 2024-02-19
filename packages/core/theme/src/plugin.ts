import { ConfigTheme, ConfigThemes } from './theme.types';
import { BASE_THEME, isColorMode, MYRA_UI_PREFIX, resolveThemeColors } from './utils/theme';
import { flattenObject } from '@myra-ui/shared-utils';
import plugin from 'tailwindcss/plugin.js';
import get from 'lodash.get';
import forEach from 'lodash.foreach';
import Color from 'color';
import omit from 'lodash.omit';
import deepMerge from 'deepmerge';
import { baseStyles } from './utils/classes';
import { MyraUIPluginConfig } from './plugin.types';
import { resolveSemanticTokens } from './utils/semantic-tokens';
import { getByColorMode } from '@myra-ui/colors';

const parsedColorsCache: Record<string, number[]> = {};

const resolveConfig = (themes: ConfigThemes = {}, prefix: string) => {
  const resolved: {
    variants: { name: string; definition: string[] }[];
    utilities: Record<string, Record<string, any>>;
    colors: Record<string, ({ opacityValue, opacityVariable }: { opacityValue: string; opacityVariable: string }) => string>;
  } = {
    variants: [],
    utilities: {},
    colors: {},
  };

  for (const [themeName, { colors, extend, semanticTokens }] of Object.entries(themes)) {
    const tokens = resolveSemanticTokens(prefix, semanticTokens || {});

    let cssSelector = `.${themeName},[data-theme="${themeName}"]`;
    const scheme = themeName === 'light' || themeName === 'dark' ? themeName : extend;

    if (themeName === BASE_THEME) {
      cssSelector = `:root,${cssSelector}`;
    }

    resolved.utilities[cssSelector] = scheme ? { 'color-scheme': scheme } : {};

    const resolvedColors = resolveThemeColors(colors || {});

    const flatColors = flattenObject(resolvedColors);

    resolved.variants.push({
      name: themeName,
      definition: [`&.${themeName}`, `&[data-theme='${themeName}']`],
    });

    for (const [tokenKey, tokenValue] of Object.entries(tokens.colors || {})) {
      const colorVar = `--${prefix}-colors-${tokenKey}`;
      resolved.utilities[cssSelector]![colorVar] = tokenValue;

      if (!tokenKey.endsWith('-opacity')) {
        const colorOpacityVariable = colorVar + '-opacity';
        resolved.colors[tokenKey] = ({ opacityVariable, opacityValue }) => {
          // if the opacity is set  with a slash (e.g. bg-primary/90), use the provided value
          if (!isNaN(+opacityValue)) {
            return `hsl(var(${colorVar}) / ${opacityValue})`;
          }
          if (opacityVariable) {
            return `hsl(var(${colorVar}) / var(${colorOpacityVariable}, var(${opacityVariable})))`;
          }

          return `hsl(var(${colorVar}) / var(${colorOpacityVariable}, 1))`;
        };
      }
    }

    for (const [colorName, colorValue] of Object.entries(flatColors)) {
      if (!colorValue) return;

      try {
        const parsedColor = parsedColorsCache[colorValue] || Color(colorValue).hsl().round().array();

        parsedColorsCache[colorValue] = parsedColor;

        const [h, s, l, defaultAlphaValue] = parsedColor;
        const myraUIColorVariable = `--${prefix}-colors-${colorName}`;
        const myraUIOpacityVariable = `--${prefix}-colors-${colorName}-opacity`;

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

const corePlugin = (themes: ConfigThemes = {}, prefix: string) => {
  const resolved = resolveConfig(themes, prefix);

  return plugin(
    ({ addBase, addUtilities, addVariant }) => {
      // add base classNames
      addBase({
        ':root, [data-theme]': {
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
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          colors: {
            ...resolved?.colors,
          },
        },
      },
    }
  );
};

const myrauiPlugin = (config: MyraUIPluginConfig = {}): ReturnType<typeof plugin> => {
  const { themes: themeObject = {}, defaultExtendTheme = 'light', prefix: defaultPrefix = MYRA_UI_PREFIX } = config;

  const userLightColors = get(themeObject, 'light.colors', {});
  const userDarkColors = get(themeObject, 'dark.colors', {});

  // get other themes from the config different from light and dark
  const otherThemes = omit(themeObject, ['light', 'dark']) || {};

  forEach(otherThemes, ({ extend, colors }, themeName) => {
    const baseTheme = extend && isColorMode(extend) ? extend : defaultExtendTheme;

    if (colors && typeof colors === 'object') {
      otherThemes[themeName].colors = deepMerge(getByColorMode(baseTheme), colors);
    }
  });

  const light: ConfigTheme = {
    colors: deepMerge(getByColorMode('light'), userLightColors),
    semanticTokens: deepMerge(get(themeObject, 'light.semanticTokens'), {}),
  };

  const dark = {
    colors: deepMerge(getByColorMode('dark'), userDarkColors),
    semanticTokens: deepMerge(get(themeObject, 'dark.semanticTokens'), {}),
  };

  const themes = {
    light,
    dark,
    ...otherThemes,
  };

  return corePlugin(themes, defaultPrefix);
};

export default myrauiPlugin;
