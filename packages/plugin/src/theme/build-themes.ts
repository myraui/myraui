import { ColorMode, ConfigTheme, ConfigThemes, getByColorMode, isColorMode, semanticTokens } from '@myraui/theme';
import { Exception } from '@myraui/utilities';
import deepMerge from 'deepmerge';
import * as A from 'fp-ts/Array';
import { pipe } from 'fp-ts/lib/function';
import * as RE from 'fp-ts/ReaderEither';
import { PluginEnv } from '../plugin.types';

function compose(themeName: string, theme: ConfigTheme, defaultExtendTheme: string) {
  const baseTheme = (isColorMode(themeName) ? themeName : theme.extend && isColorMode(theme.extend) ? theme.extend : defaultExtendTheme) as ColorMode;
  return {
    colors: deepMerge(getByColorMode(baseTheme), theme.colors || {}),
    semanticTokens: deepMerge(semanticTokens[baseTheme], theme.semanticTokens || {}),
  };
}

export function buildThemes(themes: ConfigThemes): RE.ReaderEither<PluginEnv, Exception, ConfigThemes> {
  return RE.asks(({ defaultExtendTheme }) => {
    return pipe(
      Object.entries(themes),
      A.reduce({}, (acc, [themeName, theme]) => ({
        ...acc,
        [themeName]: compose(themeName, theme, defaultExtendTheme),
      }))
    );
  });
}
