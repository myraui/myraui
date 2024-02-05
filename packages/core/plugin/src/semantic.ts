import { ColorMode, getBaseColors } from '@myra-ui/colors';
import { defaultColorPalette, ThemeColors } from '@myra-ui/system';

type SemanticColors = Record<ColorMode, ThemeColors>;

const dark = {
  ...getBaseColors('dark'),
  ...defaultColorPalette.dark,
};

const light = {
  ...getBaseColors('light'),
  ...defaultColorPalette.light,
};

export const semanticColors: SemanticColors = {
  dark,
  light,
};
