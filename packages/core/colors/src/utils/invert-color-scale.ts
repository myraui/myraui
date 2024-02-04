import { ColorScale } from '../color-types';
import { shades } from '../color-shades';

export function invertColorScale(colorScale: ColorScale): ColorScale {
  const result: Partial<ColorScale> = {};

  for (const shade of shades) {
    result[shade] = colorScale[shades[shades.length - shade]];
  }

  return result as ColorScale;
}
