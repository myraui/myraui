import { ColorMode, ColorName, ColorScale } from '@myra-ui/colors';

export type ThemeColors = Record<ColorName | string, ColorScale>;

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
