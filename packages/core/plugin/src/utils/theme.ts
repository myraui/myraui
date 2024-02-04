import { ColorPalette, ThemeColors } from '../types';
import { baseColors, ColorScale, isColorScale, shades } from '@myra-ui/colors';

export const isBaseTheme = (theme: string) => theme === 'light' || theme === 'dark';

export function isColorPaletteColor(colorName: string): colorName is keyof ColorPalette {
  return colorName === 'neutral' || colorName === 'action' || colorName === 'foreground';
}

function resolveColorValue(colors: ThemeColors, colorValue: any): ColorScale {
  if (isColorScale(colorValue)) {
    return colorValue;
  }

  // @ts-ignore
  const colorFromValue = colors[colorValue];

  if (!colorFromValue || colorFromValue === colorValue) {
    return baseColors.gray.light;
  }

  return resolveColorValue(colors, colorFromValue);
}

export function resolveThemeColors(colors: ThemeColors): Record<string, ColorScale> {
  const resolvedColors: Record<string, ColorScale> = {};

  for (const [key, value] of Object.entries(colors)) {
    resolvedColors[key] = resolveColorValue(colors, value);
  }

  return resolvedColors;
}

export function getComputedColorScale(colorName: string, element: HTMLElement, prefix: string): ColorScale {
  const colorScale: Partial<ColorScale> = {};

  for (const shade of shades) {
    const color = getComputedStyle(element).getPropertyValue(`--${prefix}-${colorName}-${shade}`);
    const alphaValue = getComputedStyle(element).getPropertyValue(`--${prefix}-${colorName}-${shade}-opacity`);

    colorScale[shade] = `hsl(${color} / ${alphaValue || 1})`;
  }

  return colorScale as ColorScale;
}
