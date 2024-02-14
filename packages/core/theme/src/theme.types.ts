import { ColorMode, ColorName, ColorScale } from '@myra-ui/colors';

export type Theme = string | ColorMode;

export type ThemedProperty<K, T extends Theme = Theme> = K | Record<T, K>;

export type ColorPaletteKeys = 'neutral' | 'action' | 'foreground';

export type ThemeColorKey = ColorName | ColorPaletteKeys;

export type ThemedColor = ThemedProperty<ThemeColorKey> | ThemedProperty<string>;

export type ColorPalette = Record<ColorPaletteKeys, ThemedColor>;

export type ResolvedColorPalette = Record<ColorPaletteKeys, ColorScale>;

export type ThemeColorValue = ColorScale | ThemeColorKey | string;

export type ThemeColors = Record<ThemeColorKey, ThemeColorValue> | Record<string, ThemeColorValue>;

export type ConfigTheme = {
  colorMode?: ColorMode;
  colors?: ThemeColors;
};

export type ConfigThemes = Record<string, ConfigTheme>;
