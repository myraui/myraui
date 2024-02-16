import { ColorScale, isColorScale, myraColors } from '@myra-ui/colors';
import { BaseTheme, ColorValue, ResolvedSemanticTokens, Theme } from '../theme.types';
import deepMerge from 'deepmerge';

export const MYRA_UI_PREFIX = 'myra-ui';

export const BASE_THEME: BaseTheme = 'light';

export const DEFAULT_SHADE = 7;

export type CSSVariables = Record<string, string | Record<string, string>>;

export type ThemedCSSVariables = Partial<Record<Theme, Record<string, string>>>;

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

export function flattenThemedCSSVariables(variables: ThemedCSSVariables): CSSVariables {
  const result: CSSVariables = {};

  for (const [theme, themeVariables] of Object.entries(variables)) {
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

  for (const [theme, themeTokens] of Object.entries(semanticTokens)) {
    const properties: Record<string, string> = {};

    for (const [key, value] of Object.entries(themeTokens)) {
      for (const [tokenKey, tokenValue] of Object.entries(value)) {
        properties[`--${prefix}-${key}-${tokenKey}`] = tokenValue;
      }
    }

    if (theme === BASE_THEME) {
      Object.assign(result, properties);
    } else {
      result[`.${theme} &,[data-theme="${theme}"] &`] = properties;
    }
  }

  return result;
}

export function mergeThemedCSSVariables(variables: ThemedCSSVariables, otherVariables: ThemedCSSVariables): ThemedCSSVariables {
  return deepMerge({ ...variables }, { ...otherVariables });
}

export function buildCSSVariables(cssVariables: CSSVariables): Record<string, string | Record<string, string>> {
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
