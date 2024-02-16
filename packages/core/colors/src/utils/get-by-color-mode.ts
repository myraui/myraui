import { ColorMode, MyraColor, ColorScale } from '../color-types';
import { myraColors } from '../colors';

export function getByColorMode(colorMode: ColorMode): Record<MyraColor, ColorScale> {
  const result: Partial<Record<MyraColor, ColorScale>> = {};

  for (const [colorName, colorValue] of Object.entries(myraColors)) {
    result[colorName as MyraColor] = colorValue[colorMode];
  }

  return result as Record<MyraColor, ColorScale>;
}
