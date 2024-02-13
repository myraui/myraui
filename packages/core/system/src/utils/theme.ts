import { ColorPalette, Theme, ThemeColorKey, ThemeColors, ThemedProperty } from '../system.types';
import { baseColors, ColorScale, isColorScale, shades } from '@myra-ui/colors';

export const MYRA_UI_PREFIX = 'myra-ui';

export const isBaseTheme = (theme: string) => theme === 'light' || theme === 'dark';

export function isColorPaletteColor(colorName: string): colorName is keyof ColorPalette {
  return colorName === 'neutral' || colorName === 'action' || colorName === 'foreground';
}

function resolveColorValue(colors: ThemeColors, colorValue: unknown): ColorScale {
  if (isColorScale(colorValue)) {
    return colorValue;
  }

  const colorFromValue = colors[colorValue as keyof ThemeColors];

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

function createPaletteProperties(prefix: string, key: string, colorName: string) {
  return shades.reduce((acc, shade) => {
    return {
      ...acc,
      [`--${prefix}-${key}-${shade}`]: `var(--${prefix}-${colorName}-${shade})`,
      [`--${prefix}-${key}-${shade}-opacity`]: `var(--${prefix}-${colorName}-${shade}-opacity)`,
    };
  }, {});
}

export function buildColorPalette(palette: Partial<ColorPalette>, prefix: string): Record<string, string | Record<string, string>> {
  const properties: Record<string, string | Record<string, string>> = {};
  for (const [key, value] of Object.entries(palette)) {
    if (!value) {
      continue;
    }
    if (typeof value === 'object') {
      for (const [theme, themeValue] of Object.entries(value)) {
        const selector = `.${theme} &,[data-theme="${theme}"] &`;
        properties[selector] = createPaletteProperties(prefix, key, themeValue);
      }
    } else {
      Object.assign(properties, createPaletteProperties(prefix, key, value));
    }
  }
  return properties;
}

export function getThemedProperty<K extends string, T extends Theme>(property: ThemedProperty<K, T>, theme: T): K {
  if (typeof property === 'object') {
    return property[theme];
  }

  return property;
}

export function extractColorPalette<P extends Partial<ColorPalette>, T extends Theme>(palette: P, theme: T): Record<keyof P, ThemeColorKey> {
  const colorPalette: any = {};

  for (const [key, value] of Object.entries(palette)) {
    colorPalette[key] = getThemedProperty(value, theme);
  }

  return colorPalette as Record<keyof P, ThemeColorKey>;
}

export function resolveColorPalette(palette: Partial<ColorPalette>, theme: Theme, element: HTMLElement, prefix: string) {
  return {
    action: getComputedColorScale(getThemedProperty(palette.action || 'action', theme), element, prefix),
    neutral: getComputedColorScale(getThemedProperty(palette.neutral || 'neutral', theme), element, prefix),
    foreground: getComputedColorScale(getThemedProperty(palette.foreground || 'foreground', theme), element, prefix),
  };
}
