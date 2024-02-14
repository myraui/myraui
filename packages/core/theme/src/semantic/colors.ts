import { ColorMode, getBaseColors } from '@myra-ui/colors';
import { ThemeColors } from '../theme.types';
import { extractColorPalette } from '../utils/theme';
import { defaultColorPalette } from './color-palette';

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
