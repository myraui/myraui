import { ColorPalette, ResolvedColorPalette } from './theming-types';
import { resolveColorScheme } from './resolve-color-scheme';
import { isDefined, pickBy } from './utils';
import { BaseColors } from '@myra-ui/colors';

export function createPalette(colors: BaseColors, palette: Partial<ColorPalette>): Partial<ResolvedColorPalette> {
  return Object.entries(pickBy(palette, isDefined)).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: resolveColorScheme(colors, value),
    };
  }, {}) as ResolvedColorPalette;
}
