import { colorNames } from './color-names';
import { shades } from './color-shades';

export type BaseTheme = 'light' | 'dark';

export type BaseColor = (typeof colorNames)[number];

export type ColorShade = (typeof shades)[number];

export type ColorScale = Record<ColorShade, string>;

export type ColorValue = Record<BaseTheme, ColorScale>;

export type BaseColorRecord = Record<BaseColor, ColorValue>;

export type Color = BaseColor | string;
