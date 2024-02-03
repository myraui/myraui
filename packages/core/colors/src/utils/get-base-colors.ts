import { ColorMode, ColorName, ColorScale } from '../color-types';
import { baseColors } from '../colors';

export function getBaseColors(colorMode: ColorMode): Record<ColorName, ColorScale> {
  const result: Partial<Record<ColorName, ColorScale>> = {};

  for (const [colorName, colorValue] of Object.entries(baseColors)) {
    result[colorName as ColorName] = colorValue[colorMode];
  }

  return result as Record<ColorName, ColorScale>;
}
