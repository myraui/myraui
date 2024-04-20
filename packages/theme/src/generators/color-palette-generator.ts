import { ConfigThemeGenerator } from './generators';
import { pipe } from 'fp-ts/lib/function';
import { flattenColorPalette, resolveThemeColors } from '../utils';

export const colorPaletteGenerator: ConfigThemeGenerator<'colorPalette'> = (colors) => {
  return pipe(resolveThemeColors(colors || {}), flattenColorPalette);
};
