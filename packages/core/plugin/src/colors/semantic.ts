import { ColorMode, getBaseColors } from '@myra-ui/colors';
import { colorPalette } from './color-palette';
import { ThemeColors } from '../types';

type SemanticColors = Record<ColorMode, ThemeColors>;

const dark = {
  ...getBaseColors('dark'),
  ...colorPalette.dark,
};

const light = {
  ...getBaseColors('light'),
  ...colorPalette.light,
};

export const semanticColors: SemanticColors = {
  dark,
  light,
};
