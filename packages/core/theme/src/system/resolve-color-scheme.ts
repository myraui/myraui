import get from 'lodash.get';
import chroma from 'chroma-js';
import { ColorName, baseColors, BaseColors, ColorShade, ColorScale, shades } from '@myra-ui/colors';

import { ColorMode, ColorModeValue } from './theming-types';

function getColors(themeColors: BaseColors, color: ColorName): Record<ColorMode, ColorScale> {
  return {
    dark: get(themeColors, color + 'Dark', themeColors.white),
    light: get(themeColors, color, themeColors.black),
  };
}

function validatePalette(palette: Record<ColorMode, ColorScale>) {
  return Object.fromEntries(
    Object.entries(palette).map(([key, value]) => {
      const isValid = shades.every((shade) => {
        const color = value[shade as ColorShade];

        return chroma.valid(color);
      });

      return [key, isValid ? value : baseColors.red];
    })
  );
}

export function resolveColorScheme(colors: BaseColors, colorScheme: ColorName): ColorScale<ColorModeValue<chroma.Color>> {
  const palette = validatePalette(getColors(colors, colorScheme));

  return shades.reduce((acc, key) => {
    const colorShade = key as ColorShade;

    return {
      ...acc,
      [key]: { dark: chroma(palette.dark[colorShade]), light: chroma(palette.light[colorShade]) },
    };
  }, {}) as any;
}
