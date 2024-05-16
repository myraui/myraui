import { ConfigTheme, FullConfigTheme, ThemeEnv } from '../theme.types';
import * as RE from 'fp-ts/ReaderEither';
import { pipe } from 'fp-ts/function';
import { isColorMode } from '../utils';
import { ColorMode } from '../colors';
import deepMerge from 'deepmerge';
import { defaultThemes } from '../theme';
import { Exception } from '@myraui/shared-utils';

export function applyBaseTheme(themeName: string, configTheme: ConfigTheme): RE.ReaderEither<ThemeEnv, Exception, FullConfigTheme> {
  return pipe(
    RE.asks((env: ThemeEnv) => env.defaultExtendTheme),
    RE.map((defaultExtendTheme) => {
      const baseTheme = (
        isColorMode(themeName) ? themeName : configTheme.extend && isColorMode(configTheme.extend) ? configTheme.extend : defaultExtendTheme
      ) as ColorMode;
      return {
        spacingUnit: 4,
        colorScheme: 'primary',
        ...deepMerge(defaultThemes[baseTheme], configTheme),
        extend: baseTheme,
      };
    })
  ) as any;
}
