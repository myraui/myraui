import {
  buildCSSVariables,
  ColorMode,
  ConfigTheme,
  ConfigThemes,
  createSemanticTokens,
  getBaseStyles,
  isColorMode,
  resolveSemanticTokens,
} from '@myraui/theme';
import { Dict, Exception, toValues } from '@myraui/utils';
import { pipe } from 'fp-ts/function';
import * as RE from 'fp-ts/ReaderEither';
import * as RA from 'fp-ts/ReadonlyArray';
import * as R from 'fp-ts/Record';
import { generateThemeColorPalette } from '../colors/generate-theme-color-palette';
import { PluginEnv, ResolvedThemeConfig, ResolvedThemes, ResolvedThemeValues } from '../plugin.types';
import { createThemeSelector } from './create-theme-selector';

export function buildThemeValues(theme: ConfigTheme): RE.ReaderEither<PluginEnv, Exception, ResolvedThemeValues> {
  return pipe(
    theme,
    createSemanticTokens,
    resolveSemanticTokens,
    RE.chain((semanticTokens) => {
      return pipe(
        generateThemeColorPalette(theme.colorPalette || {}),
        RE.map((colors) => ({
          ...semanticTokens,
          colors: { ...semanticTokens.colors, ...colors },
        }))
      );
    })
  );
}

export function resolveTheme(themeName: string, theme: ConfigTheme): RE.ReaderEither<PluginEnv, Exception, ResolvedThemeConfig> {
  return pipe(
    RE.asks((env: PluginEnv) => env.defaultExtendTheme),
    RE.map((defaultExtendTheme) => {
      const colorMode = (isColorMode(themeName) ? themeName : theme.extend || defaultExtendTheme) as ColorMode;
      return { themeName, colorMode };
    }),
    RE.chain((themeConfig) => {
      return pipe(
        buildThemeValues(theme),
        RE.map((values) => ({ ...themeConfig, values }))
      );
    })
  );
}

export function combineResolvedThemes(themes: readonly ResolvedThemeConfig[]) {
  return (baseStyles: Dict): ResolvedThemes =>
    pipe(
      themes,
      RA.map((theme) => ({ ...theme, variables: buildCSSVariables(theme.variables) })),
      RA.reduce({ variants: [], utilities: {}, colors: {}, baseStyles } as ResolvedThemes, (acc, { themeName, colorMode, colors, variables }) => {
        const selector = createThemeSelector(themeName);
        return {
          ...acc,
          variants: [...acc.variants, { name: themeName, definition: [`&.${themeName}`, `&[data-theme="${themeName}"]`] }],
          utilities: { ...acc.utilities, [selector]: { 'color-scheme': colorMode, ...variables } },
          colors: { ...acc.colors, ...colors },
          baseStyles,
        };
      })
    );
}

export function resolveThemes(themes: ConfigThemes): RE.ReaderEither<PluginEnv, Exception, ResolvedThemes> {
  return pipe(
    themes,
    R.mapWithIndex(resolveTheme),
    R.sequence(RE.Applicative),
    RE.map(toValues),
    RE.chainW((themes) =>
      pipe(
        RE.asks(({ prefix }: PluginEnv) => getBaseStyles(prefix)),
        RE.map(combineResolvedThemes(themes))
      )
    )
  );
}
