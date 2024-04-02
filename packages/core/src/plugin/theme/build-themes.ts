import deepMerge from 'deepmerge';
import * as A from 'fp-ts/Array';
import { pipe } from 'fp-ts/lib/function';
import { ColorMode, getByColorMode } from '../../colors';
import { ConfigTheme, ConfigThemes, isColorMode } from '../../theme';
import { defaultSemanticTokens } from '../../theme/semantic-tokens';

function compose(themeName: string, theme: ConfigTheme, defaultExtendTheme: string) {
  const baseTheme = (isColorMode(themeName) ? themeName : theme.extend && isColorMode(theme.extend) ? theme.extend : defaultExtendTheme) as ColorMode;
  return {
    colors: deepMerge(getByColorMode(baseTheme), theme.colors || {}),
    semanticTokens: deepMerge(defaultSemanticTokens[baseTheme], theme.semanticTokens || {}),
  };
}

export function buildThemes(themes: ConfigThemes, defaultExtendTheme: ColorMode): ConfigThemes {
  return pipe(
    Object.entries(themes),
    A.reduce({}, (acc, [themeName, theme]) => ({
      ...acc,
      [themeName]: compose(themeName, theme, defaultExtendTheme),
    }))
  );
}
