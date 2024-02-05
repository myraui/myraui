import { ColorPalette, Theme, ThemeColors, ThemedProperty } from '../system.types';
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

export function buildColorPalette(palette: Partial<ColorPalette>, prefix: string): Record<string, string> {
  const properties: Record<string, string> = {};
  for (const [key, value] of Object.entries(palette)) {
    if (value) {
      for (const shade of shades) {
        properties[`--${prefix}-${key}-${shade}`] = `var(--${prefix}-${value}-${shade})`;
        properties[`--${prefix}-${key}-${shade}-opacity`] = `var(--${prefix}-${value}-${shade}-opacity)`;
      }
    }
  }
  return properties;
}

export function resolveThemedProperty<K extends string | number, T extends Theme>(
  property: ThemedProperty<K, T>,
  themes: Array<T> = ['dark', 'light']
): Record<T, K> {
  return typeof property === 'object' ? property : themes.reduce((acc, theme) => ({ ...acc, [theme]: property }), {} as Record<T, K>);
}
