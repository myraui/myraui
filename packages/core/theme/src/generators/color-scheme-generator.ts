import { ConfigThemeGenerator } from './generators';
import { pipe } from 'fp-ts/function';
import { colorResolver } from '../resolvers/color-resolver';
import * as RE from 'fp-ts/ReaderEither';
import * as R from 'fp-ts/Record';
import { ColorScheme, ColorSchemeValue } from '../theme.types';
import { mapKeys } from '@myraui/shared-utils';

export function isColorScheme(value: any): value is ColorScheme {
  if (typeof value === 'object') {
    return 'background' in value && 'text' in value && Object.keys(value).length === 2;
  }
  return false;
}

export function createColorScheme(value: ColorScheme | ColorSchemeValue): ColorScheme {
  if (isColorScheme(value)) {
    return value;
  }

  return { background: value, text: value };
}

export const colorSchemeGenerator: ConfigThemeGenerator<'colorScheme'> = (colorScheme: ColorScheme | ColorSchemeValue) => {
  return pipe(
    createColorScheme(colorScheme),
    mapKeys((key) => `color-scheme${key === 'background' ? '' : '-text'}`),
    R.mapWithIndex((key, value) => colorResolver(key, value)),
    R.sequence(RE.Applicative),
    RE.map((result) => ({
      colors: pipe(),
    }))
  );
};
