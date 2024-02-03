import { colorNames } from './color-names';
import { shades } from './color-shades';

export type Color = (typeof colorNames)[number];

export type ColorShade = (typeof shades)[number];

export type ColorShades<T = string> = Record<ColorShade, T>;

export type Colors = {
  [key in Color]: ColorShades;
} & {
  [key in `${Color}Dark`]: ColorShades;
};

export type MyraTheme = {
  colors: Partial<Colors>;
};
