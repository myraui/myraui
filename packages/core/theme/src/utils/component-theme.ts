import { pipe } from 'fp-ts/lib/function';
import { ComponentColorScheme } from '../theme.types';
import { normalizeColorModeValue } from './theme';
import * as R from 'fp-ts/Record';
import { dashCase, swapKeys, toValues } from '@myraui/shared-utils';
import { BASE_THEME } from './constants';

export function buildColorSchemeClasses(colorScheme?: ComponentColorScheme, foreground?: ComponentColorScheme): string {
  return pipe(
    { background: normalizeColorModeValue(colorScheme), foreground: normalizeColorModeValue(foreground) },
    swapKeys,
    R.mapWithIndex((theme, value) => {
      const background = value.background?.replace('.', '-') || '';
      const foreground = value.foreground?.replace('.', '-') || '';

      const prefix = theme === BASE_THEME ? '' : `${theme}:`;

      if (!background && !foreground) {
        return '';
      }

      return `${prefix}color-scheme${background ? `-${dashCase(background.replace('.', '-'))}` : ''}${foreground ? `/${dashCase(foreground)}` : ''}`;
    }),
    toValues,
    (values) => values.join(' ')
  );
}
