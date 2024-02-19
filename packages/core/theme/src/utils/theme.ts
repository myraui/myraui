import { ColorScale, isColorScale, myraColors } from '@myra-ui/colors';
import { BaseTheme, ColorValue, ResolvedSemanticTokens, Theme, ThemedValue } from '../theme.types';
import deepMerge from 'deepmerge';

export const MYRA_UI_PREFIX = 'myra-ui';

export const BASE_THEME: BaseTheme = 'light';

export const DEFAULT_SHADE = 7;

export type CSSVariables = Record<string, string>;

export type GroupedCSSVariables = Record<string, string | CSSVariables>;

export type ThemedCSSVariables = Partial<Record<Theme, CSSVariables>>;

export const isColorMode = (theme: string) => theme === 'light' || theme === 'dark';

function resolveColorValue(colors: Record<string, ColorValue>, colorValue: unknown): ColorScale {
  if (isColorScale(colorValue)) {
    return colorValue;
  }

  const colorFromValue = colors[colorValue as never];

  if (!colorFromValue || colorFromValue === colorValue) {
    return myraColors.blackAlpha.light;
  }

  return resolveColorValue(colors, colorFromValue);
}

export function resolveThemeColors(colors: Record<string, ColorValue>): Record<string, ColorScale> {
  const resolvedColors: Record<string, ColorScale> = {};

  for (const [key, value] of Object.entries(colors)) {
    resolvedColors[key] = resolveColorValue(colors, value);
  }

  return resolvedColors;
}

export function flattenThemedCSSVariables(variables: ThemedCSSVariables): GroupedCSSVariables {
  const result: GroupedCSSVariables = {};

  for (const [theme, themeVariables] of Object.entries(variables)) {
    if (!themeVariables) {
      continue;
    }
    if (theme === BASE_THEME) {
      Object.assign(result, themeVariables);
    } else {
      result[`.${theme} &,[data-theme="${theme}"] &`] = themeVariables;
    }
  }

  return result;
}

export function flattenSemanticTokens(prefix: string, semanticTokens: ResolvedSemanticTokens): CSSVariables {
  const result: CSSVariables = {};

  for (const [key, value] of Object.entries(semanticTokens)) {
    for (const [tokenKey, tokenValue] of Object.entries(value)) {
      result[`--${prefix}-${key}-${tokenKey}`] = tokenValue;
    }
  }

  return result;
}

export function mergeThemedCSSVariables(variables: ThemedCSSVariables, otherVariables: ThemedCSSVariables): ThemedCSSVariables {
  return deepMerge({ ...variables }, { ...otherVariables });
}

export function buildCSSVariables(cssVariables: GroupedCSSVariables): Record<string, string | Record<string, string>> {
  const result: Record<string, string | Record<string, string>> = {};

  for (const [key, value] of Object.entries(cssVariables)) {
    if (typeof value === 'string') {
      result[key] = `var(${value})`;
    } else {
      result[key] = buildCSSVariables(value as Record<string, string>) as Record<string, string>;
    }
  }

  return result;
}

export function isThemedValue(record: object = {}): record is ThemedValue<any> {
  return Object.keys(record).every((key) => key.startsWith('_')) && `_${BASE_THEME}` in record;
}
