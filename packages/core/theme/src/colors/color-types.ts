import { RecordKey } from '@myraui/shared-utils';
import { colorNames } from './color-names';
import { shades } from './color-shades';

export type ColorMode = 'light' | 'dark';

export type MyraColor = (typeof colorNames)[number];

export type ColorShade = (typeof shades)[number];

export interface ColorWithShade {
  name: string;
  shade: ColorShade;
}

export type ColorScale = Record<ColorShade, string> & { DEFAULT: ColorShade };

export type FlatMyraColor = `${MyraColor}.${ColorShade}`;

export type ColorPalette<T extends RecordKey = RecordKey> = Record<T, ColorScale>;

export type ThemedColorScale = Record<ColorMode, ColorScale>;

export type MyraColors = Record<MyraColor, ThemedColorScale>;
