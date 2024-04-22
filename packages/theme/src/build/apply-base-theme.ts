import { ConfigTheme, FullConfigTheme, ThemeEnv } from '../theme.types';
import * as RE from 'fp-ts/ReaderEither';
import { pipe } from 'fp-ts/function';
import { isColorMode } from '../utils';
import { ColorMode, getByColorMode } from '../colors';
import deepMerge from 'deepmerge';
import { defaultThemes } from '../theme';
import { Exception } from '@myraui/utils';

export const applyBaseTheme = <T extends ConfigTheme>(
  themeName: string,
  configTheme: T
): RE.ReaderEither<ThemeEnv, Exception, FullConfigTheme<T>> => {
  return pipe(
    RE.asks((env: ThemeEnv) => env.defaultExtendTheme),
    RE.map((defaultExtendTheme) => {
      const baseTheme = (
        isColorMode(themeName) ? themeName : configTheme.extend && isColorMode(configTheme.extend) ? configTheme.extend : defaultExtendTheme
      ) as ColorMode;
      return {
        colorPalette: deepMerge(getByColorMode(baseTheme), configTheme.colorPalette || {}),
        spacingUnit: 4,
        ...deepMerge(defaultThemes[baseTheme], configTheme),
        extend: baseTheme,
      };
    })
  ) as any;
};
