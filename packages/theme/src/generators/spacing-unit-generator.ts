import { ConfigThemeGenerator } from './generators';
import { pipe } from 'fp-ts/lib/function';
import * as A from 'fp-ts/Array';
import * as RE from 'fp-ts/ReaderEither';

export const SPACING_SCALE = [
  0.5, 1, 2, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96,
] as const;

export const BASE_FONT_SIZE = 16;

export type SpacingScaleKeys = (typeof SPACING_SCALE)[number];

export function createSpacingUnitKey(key: SpacingScaleKeys): string {
  return pipe(
    key.toString(),
    (key) => key.replace('.', '_'),
    (key) => `unit-${key}`
  );
}

export const spacingUnitGenerator: ConfigThemeGenerator<'spacingUnit'> = (spacingUnit: number) => {
  return RE.of(
    pipe(
      Array(...SPACING_SCALE),
      A.map((value) => [`${value}`, value]),
      A.map(([key, value]) => [key, (Number(value) * spacingUnit) / BASE_FONT_SIZE]),
      A.map(([key, value]) => [key, `${value}rem`]),
      A.map(([key, value]) => [createSpacingUnitKey(key as SpacingScaleKeys), value]),
      A.prepend(['unit', spacingUnit]),
      (value) => ({ spacing: Object.fromEntries(value) })
    )
  );
};
