import { ColorMode, BaseColor, ColorScale } from '../color-types';
import { baseColors } from '../colors';

export function getBaseColors(colorMode: ColorMode): Record<BaseColor, ColorScale> {
  const result: Partial<Record<BaseColor, ColorScale>> = {};

  for (const [colorName, colorValue] of Object.entries(baseColors)) {
    result[colorName as BaseColor] = colorValue[colorMode];
  }

  return result as Record<BaseColor, ColorScale>;
}
