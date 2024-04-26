import { ConfigThemeGenerator } from './generators';
import { pipe } from 'fp-ts/lib/function';
import * as R from 'fp-ts/Record';
import * as A from 'fp-ts/Array';
import * as RE from 'fp-ts/ReaderEither';
import { spacingUnitVariable } from '../utils/css-variables';
import { ThemeEnv } from '../theme.types';
import { Exception } from 'sass';
import { ResolvedValues } from '../resolvers/resolvers';

export const SPACING_SCALE = [
  0.5, 1, 2, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96,
] as const;

export const SCALE_LABELS = {
  xs: 2,
  sm: 3,
  md: 4,
  lg: 5.5,
  xl: 9,
  '2xl': 12,
  '3xl': 20,
  '4xl': 30,
  '5xl': 56,
  '6xl': 72,
  '7xl': 96,
  '8xl': 128,
  '9xl': 160,
};

export const BASE_FONT_SIZE = 16;

export type SpacingScaleKeys = (typeof SPACING_SCALE)[number] | keyof typeof SCALE_LABELS;

export const MIN_SIZES = [1, 2, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 16, 20, 24] as const;

export function createSpacingScale(): Array<[string, number]> {
  return pipe(
    Array(...SPACING_SCALE),
    A.map((value) => [`${value}`, value])
  );
}

export function createMinSizes(): RE.ReaderEither<ThemeEnv, Exception, ResolvedValues<any>> {
  return pipe(
    Array(...MIN_SIZES),
    A.map((value) => [
      `unit-${value}`,
      pipe(
        spacingUnitVariable(value as SpacingScaleKeys, { value: '' }),
        RE.map((variable) => ({
          value: variable.reference(),
          utilities: [],
        }))
      ),
    ]),
    Object.fromEntries,
    R.sequence(RE.Applicative) as any
  );
}

export const spacingUnitGenerator: ConfigThemeGenerator<'spacingUnit'> = (spacingUnit: number) => {
  return pipe(
    createSpacingScale(),
    A.concat(Object.entries(SCALE_LABELS)),
    A.map(([key, value]) => [key, (Number(value) * spacingUnit) / BASE_FONT_SIZE]),
    A.map(([key, value]) => [key, `${value}rem`]),
    A.map(([key, value]) => [`unit-${key}`, value]),
    A.prepend(['unit', spacingUnit]),
    Object.fromEntries,
    (spacing) => ({ spacing: RE.right(spacing), minHeight: createMinSizes(), minWidth: createMinSizes() }),
    R.sequence(RE.Applicative)
  );
};
