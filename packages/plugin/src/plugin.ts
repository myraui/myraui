import { BASE_THEME, buildConfigTheme, BuiltConfigTheme, ConfigThemes, getBaseStyles, MYRA_UI_PREFIX } from '@myraui/theme';
import { pipe } from 'fp-ts/function';
import * as RE from 'fp-ts/ReaderEither';
import plugin from 'tailwindcss/plugin.js';
import { MyraUIPluginConfig, PluginEnv, ResolvedThemes } from './plugin.types';
import * as R from 'fp-ts/Record';
import * as RA from 'fp-ts/ReadonlyArray';
import deepmerge from 'deepmerge';
import { Dict, Exception } from '@myraui/utils';

export function createThemeSelector(themeName: string): string {
  const rootSelector = themeName === BASE_THEME ? '' : `:root,`;

  return `${rootSelector}.${themeName},[data-theme="${themeName}"]`;
}

export function combineBuiltThemes(themes: Record<string, BuiltConfigTheme<any>>) {
  return (baseStyles: Dict): ResolvedThemes =>
    pipe(
      themes,
      R.toEntries,
      RA.reduce({ tokens: {}, utilities: {}, baseStyles } as ResolvedThemes, (acc, [themeName, { utilities, tokens, colorMode }]) => {
        const selector = createThemeSelector(themeName);
        return {
          ...acc,
          variants: [...acc.variants, { name: themeName, definition: [`&.${themeName}`, `&[data-theme="${themeName}"]`] }],
          utilities: { ...acc.utilities, [selector]: { 'color-scheme': colorMode, ...utilities } },
          baseStyles,
          tokens: deepmerge(acc.tokens, tokens),
        };
      })
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
      theme: {
        extend: resolved.tokens,
      },
    }
  );
}

const myrauiPlugin = (config: MyraUIPluginConfig = {}): ReturnType<typeof plugin> => {
  const { themes = {}, defaultExtendTheme = 'light', prefix = MYRA_UI_PREFIX } = config;
  return pipe(
    resolveThemes(themes),
    RE.map(createPlugin),
    RE.getOrElse((e) => {
      throw e;
    })
  )({ prefix, defaultExtendTheme });
};

export default myrauiPlugin;
