import { ColorMode, ConfigTheme, ConfigThemes, getByColorMode, isColorMode, semanticTokens } from '@myraui/theme';
import { Exception } from '@myraui/utils';
import deepMerge from 'deepmerge';
import * as A from 'fp-ts/Array';
import { pipe } from 'fp-ts/lib/function';
import * as RE from 'fp-ts/ReaderEither';
import { PluginEnv } from '../plugin.types';

export function applyBaseTheme(themeName: string, theme: ConfigTheme, defaultExtendTheme: string) {
  const baseTheme = (isColorMode(themeName) ? themeName : theme.extend && isColorMode(theme.extend) ? theme.extend : defaultExtendTheme) as ColorMode;
  return {
    colorPalette: deepMerge(getByColorMode(baseTheme), theme.colorPalette || {}),
    spacingUnit: 4,
    ...deepMerge(semanticTokens[baseTheme], theme),
  };
}

export function createBaseThemes(themes: ConfigThemes) {
  return { dark: {}, light: {}, ...themes };
}

export function buildThemes(themes: ConfigThemes): RE.ReaderEither<PluginEnv, Exception, ConfigThemes> {
  return RE.asks(({ defaultExtendTheme }) => {
    return pipe(
      createBaseThemes(themes),
      Object.entries,
      A.reduce({}, (acc, [themeName, theme]) => ({
        ...acc,
        [themeName]: applyBaseTheme(themeName, theme, defaultExtendTheme),
      }))
    );
  });
}
