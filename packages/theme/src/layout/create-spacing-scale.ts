import { pipe } from 'fp-ts/lib/function';
import * as A from 'fp-ts/Array';
import * as RE from 'fp-ts/ReaderEither';
import * as R from 'fp-ts/Record';
import { BASE_FONT_SIZE, SPACING_SCALE, SpacingScaleKeys } from './spacing-scale';
import { ThemeEnv } from '../theme.types';
import { Exception, fromArray, mapKeys } from '@myraui/utils';
import { CSSVariable, spacingUnitVariable } from '../utils';

export function createSpacingScale(spacingUnit: number): Record<SpacingScaleKeys, string> {}

export function createSpacingUnits(): RE.ReaderEither<ThemeEnv, Exception, Record<string, CSSVariable>> {
  return pipe(
    Array(...SPACING_SCALE),
    fromArray(spacingUnitVariable),
    mapKeys((key) => createSpacingUnitKey(key)),
    R.sequence(RE.Applicative),
    RE.chain((units) =>
      pipe(
        spacingUnitVariable(),
        RE.map((variable) => ({ unit: variable, ...units }))
      )
    )
  );
}
