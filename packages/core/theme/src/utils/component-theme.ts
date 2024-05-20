import { pipe } from 'fp-ts/lib/function';
import { ComponentColorScheme } from '../theme.types';
import { normalizeColorModeValue } from './theme';
import * as R from 'fp-ts/Record';
import { dashCase, Dict, toValues } from '@myraui/shared-utils';
import { BASE_THEME } from './constants';

export function buildColorSchemeClasses(colorScheme: ComponentColorScheme): string {
  return pipe(
    normalizeColorModeValue(colorScheme) as Dict,
    R.mapWithIndex((theme, value) => {
      return `${theme === BASE_THEME ? '' : `${theme}:`}color-scheme-${dashCase(value.replace('.', '-'))}`;
    }),
    toValues,
    (values) => values.join(' ')
  );
}
