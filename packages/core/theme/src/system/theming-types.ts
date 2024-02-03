import chroma from 'chroma-js';
import { Color, Colors, ColorShades } from '@myra-ui/colors';

export type ColorMode = 'light' | 'dark';

export type ColorModeValue<T> = Record<ColorMode, T>;

export interface ColorPalette {
  primary: Color;
  neutral: Color;
  text: Color;
}

export type ResolvedColorPalette<P extends Partial<ColorPalette> = ColorPalette> = {
  [key in keyof P]: ColorShades<ColorModeValue<chroma.Color>>;
};

export type ColorPaletteProps = {
  primaryColor?: Color;
  textColor?: Color;
  neutralColor?: Color;
  colorPalette?: Partial<ColorPalette>;
};

export interface MyraThemeContextValue {
  colors: Colors;
}
