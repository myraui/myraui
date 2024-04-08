import { ColorScale } from '../color-types';
import { shades } from '../color-shades';
import { pipe } from 'fp-ts/lib/function';
import * as A from 'fp-ts/Array';

export function invertColorScale(colorScale: ColorScale): ColorScale {
  return pipe(
    Object.entries(colorScale),
    A.reduce([] as Array<string[]>, (acc, [shade, color]) => [...acc, [String(shades.length - Number(shade)), color]]),
    Object.fromEntries
  );
}
