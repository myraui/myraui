import chroma from 'chroma-js';
import { BaseColors, ColorMode, ColorName, ColorScale } from '@myra-ui/colors';

export type ColorModeValue<T> = Record<ColorMode, T>;

export interface ColorPalette {
  primary: ColorName;
  neutral: ColorName;
  text: ColorName;
}

export type ResolvedColorPalette<P extends Partial<ColorPalette> = ColorPalette> = {
  [key in keyof P]: ColorScale<ColorModeValue<chroma.Color>>;
};

export type ColorPaletteProps = {
  primaryColor?: ColorName;
  textColor?: ColorName;
  neutralColor?: ColorName;
  colorPalette?: Partial<ColorPalette>;
};

export interface MyraThemeContextValue {
  colors: BaseColors;
}
