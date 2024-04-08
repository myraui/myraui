import { ColorMode, ColorScale, MyraColor } from '../color-types';
import { myraColors } from '../colors';
import * as A from 'fp-ts/Array';
import { pipe } from 'fp-ts/lib/function';

export function getByColorMode(colorMode: ColorMode): Record<MyraColor, ColorScale> {
  return pipe(
    Object.entries(myraColors),
    A.reduce({}, (acc, [colorName, colorValue]) => ({ ...acc, [colorName as MyraColor]: colorValue[colorMode] }))
  ) as Record<MyraColor, ColorScale>;
}
