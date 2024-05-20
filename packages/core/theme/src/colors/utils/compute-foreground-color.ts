import { ColorScale } from '../color-types';
import { pipe } from 'fp-ts/lib/function';
import * as R from 'fp-ts/Record';
import Color from 'color';
import * as A from 'fp-ts/Array';
import * as N from 'fp-ts/number';
import * as Or from 'fp-ts/Ord';
import * as O from 'fp-ts/Option';

export function computeForegroundColor(scale: ColorScale, background: keyof ColorScale): keyof ColorScale {
  return pipe(
    scale,
    R.mapWithIndex((key, value) => (key === 'DEFAULT' ? scale[scale[key]] : value)),
    R.map((value) => Color(value).contrast(Color(scale[background]))),
    R.toArray,
    A.sort(
      pipe(
        N.Ord,
        Or.contramap<number, [string, number]>(([_, contrast]) => contrast)
      )
    ),
    A.last,
    O.map(([key]) => key),
    O.getOrElse(() => 'DEFAULT' as any)
  ) as any;
}
