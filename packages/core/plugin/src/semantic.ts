import { ColorMode, getBaseColors } from '@myra-ui/colors';
import { defaultColorPalette, extractColorPalette, ThemeColors } from '@myra-ui/system';

type SemanticColors = Record<ColorMode, ThemeColors>;

const dark = {
  ...getBaseColors('dark'),
  ...extractColorPalette(defaultColorPalette, 'dark'),
};

const light = {
  ...getBaseColors('light'),
  ...extractColorPalette(defaultColorPalette, 'light'),
};

export const semanticColors: SemanticColors = {
  dark,
  light,
};
