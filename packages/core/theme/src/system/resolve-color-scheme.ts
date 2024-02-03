import get from 'lodash.get';
import chroma from 'chroma-js';
import { Color, colors, Colors, ColorShade, ColorShades, shades } from '@myra-ui/colors';

import { ColorMode, ColorModeValue } from './theming-types';

function getColors(themeColors: Colors, color: Color): Record<ColorMode, ColorShades> {
  return {
    dark: get(themeColors, color + 'Dark', themeColors.white),
    light: get(themeColors, color, themeColors.black),
  };
}

function validatePalette(palette: Record<ColorMode, ColorShades>) {
  return Object.fromEntries(
    Object.entries(palette).map(([key, value]) => {
      const isValid = shades.every((shade) => {
        const color = value[shade as ColorShade];

        return chroma.valid(color);
      });

      return [key, isValid ? value : colors.red];
    })
  );
}

export function resolveColorScheme(colors: Colors, colorScheme: Color): ColorShades<ColorModeValue<chroma.Color>> {
  const palette = validatePalette(getColors(colors, colorScheme));

  return shades.reduce((acc, key) => {
    const colorShade = key as ColorShade;

    return {
      ...acc,
      [key]: { dark: chroma(palette.dark[colorShade]), light: chroma(palette.light[colorShade]) },
    };
  }, {}) as any;
}
