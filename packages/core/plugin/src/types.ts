import { ColorMode, ColorName, ColorScale } from '@myra-ui/colors';

export type ColorPaletteKeys = 'neutral' | 'action' | 'foreground';

export type ColorPalette = Record<ColorPaletteKeys, ThemeColorValue>;

export type ThemeColorKey = ColorName | ColorPaletteKeys;

export type ThemeColorValue = ColorScale | ThemeColorKey;

export type ThemeColors =
  | Record<ThemeColorKey, ThemeColorValue>
  | Record<ThemeColorKey, string>
  | Record<string, ThemeColorValue>
  | Record<string, string>;

export type ConfigTheme = {
  colorMode?: ColorMode;
  colors?: ThemeColors;
};

export type ConfigThemes = Record<string, ConfigTheme>;

export type MyraUIPluginConfig = {
  prefix?: string;
  themes?: ConfigThemes;
  defaultTheme?: ColorMode;
  defaultColorMode?: ColorMode;
};
