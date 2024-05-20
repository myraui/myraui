import {
  BASE_THEME,
  buildConfigTheme,
  BuiltConfigTheme,
  ConfigThemes,
  defaultThemes,
  getBaseStyles,
  MYRA_UI_PREFIX,
  ThemeVariant,
} from '@myraui/theme';
import { pipe } from 'fp-ts/function';
import * as RE from 'fp-ts/ReaderEither';
import plugin from 'tailwindcss/plugin.js';
import { MyraUIPluginConfig, PluginEnv, ResolvedThemes } from './plugin.types';
import * as R from 'fp-ts/Record';
import * as RA from 'fp-ts/ReadonlyArray';
import deepmerge from 'deepmerge';

import { Dict, Exception } from '@myraui/shared-utils';

export function createThemeSelector(themeName: string): string {
  const rootSelector = themeName === BASE_THEME ? '' : `:root,`;

  return `${rootSelector}.${themeName},[data-theme="${themeName}"]`;
}

export function addBaseThemes(config: ConfigThemes) {
  return {
    ...config,
    dark: deepmerge(defaultThemes.dark, config.dark || {}),
    light: deepmerge(defaultThemes.light, config.light || {}),
  };
}

export function combineBuiltThemes(themes: Record<string, BuiltConfigTheme<any>>) {
  return (baseStyles: Dict): ResolvedThemes =>
    pipe(
      themes,
      R.toEntries,
      RA.reduceWithIndex(
        { tokens: {}, utilities: {}, baseStyles, variants: new Array<ThemeVariant>(), themes: new Array<string>() } as ResolvedThemes,
        (index, acc, [themeName, { utilities, tokens, colorMode, variants }]) => {
          const selector = createThemeSelector(themeName);
          const variantUtilities = pipe(
            variants,
            RA.map((variant) => variant.utilities || {}),
            RA.reduce({}, deepmerge)
          );
          return {
            ...acc,
            variants: [...acc.variants, ...variants, { name: themeName, definition: [`&.${themeName}`, `&[data-theme="${themeName}"]`] }],
            utilities: { ...acc.utilities, [selector]: { 'color-scheme': colorMode, ...utilities }, ...variantUtilities },
            baseStyles,
            tokens: index === 0 ? deepmerge(acc.tokens, tokens) : acc.tokens, // Only use the base theme for the tokens
            themes: [...acc.themes, themeName],
          };
        }
      )
    );
}

export function resolveThemes(themes: ConfigThemes): RE.ReaderEither<PluginEnv, Exception, ResolvedThemes> {
  return pipe(
    themes,
    R.mapWithIndex(buildConfigTheme),
    R.sequence(RE.Applicative),
    RE.chainW((themes) =>
      pipe(
        RE.asks(({ prefix }: PluginEnv) => getBaseStyles(prefix)),
        RE.map(combineBuiltThemes(themes))
      )
    )
  );
}

function createPlugin(resolved: ResolvedThemes) {
  return plugin(
    ({ addBase, addUtilities, addVariant }) => {
      addBase({ ':root, [data-theme]': { ...resolved.baseStyles } });
      addUtilities({ ...resolved?.utilities });
      resolved?.variants.forEach((variant) => {
        addVariant(variant.name, variant.definition);
      });
    },
    {
      darkMode: 'class',
      theme: {
        extend: resolved.tokens,
      },
    }
  );
}

const myrauiPlugin = (config: MyraUIPluginConfig = {}): ReturnType<typeof plugin> => {
  const { themes = {}, defaultExtendTheme = 'light', prefix = MYRA_UI_PREFIX } = config;
  return pipe(
    themes,
    addBaseThemes,
    resolveThemes,
    RE.map(createPlugin),
    RE.getOrElse((e) => {
      throw e;
    })
  )({ prefix, defaultExtendTheme });
};

export default myrauiPlugin;
