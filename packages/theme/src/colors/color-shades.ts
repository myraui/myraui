import { ColorShade, ColorWithShade } from './color-types';
import { DEFAULT_SHADE } from '../utils';

export const shades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;

export function extractColorShade(colorName: string): ColorWithShade {
  const colorShade = colorName.split('.')?.[1];

  if (colorShade && shades.includes(+colorShade as ColorShade)) {
    return { name: colorName.split('.')[0], shade: +colorShade as ColorShade };
  } else {
    return { name: colorName, shade: DEFAULT_SHADE };
  }
}
