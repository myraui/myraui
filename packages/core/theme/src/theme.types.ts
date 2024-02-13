import { BaseTheme, Color, ColorScale } from '@myra-ui/colors';
import { SemanticRecord, Theme } from '@myra-ui/breakpoint-utils';

export { Theme };

export type ColorPaletteKeys = 'neutral' | 'action' | 'foreground';

export type ColorValue = ColorScale | Color;

export type ThemeColors = SemanticRecord<Color, ColorValue>;

export type ConfigTheme = {
  colorMode?: BaseTheme;
  colors?: ThemeColors;
};

export type ConfigThemes = Record<string, ConfigTheme>;
