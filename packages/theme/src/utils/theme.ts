import { Dict, Exception, flattenObject } from '@myraui/utils';
import deepMerge from 'deepmerge';
import * as A from 'fp-ts/Array';
import { pipe } from 'fp-ts/function';
import * as RE from 'fp-ts/ReaderEither';
import { ColorPalette, ColorScale, isColorScale, myraColors } from '../colors';
import {
  ColorValue,
  CSSVariables,
  GroupedCSSVariables,
  ResolvedSemanticTokens,
  Theme,
  ThemedCSSVariables,
  ThemedValue,
  ThemeEnv,
  ThemeRecord,
} from '../theme.types';
import { BASE_THEME } from './constants';

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

export function resolveThemeColors(colors: Record<string, ColorValue>): ColorPalette {
  const resolvedColors: Record<string, ColorScale> = {};

  for (const [key, value] of Object.entries(colors)) {
    resolvedColors[key] = resolveColorValue(colors, value);
  }

  return resolvedColors;
}

/**
 * Flattens the color palette to a simple array of key-value pairs
 * @param palette the color palette e.g. { primary: { 1: '#fff', 2: '#000' } }
 *
 * @returns an array of key-value pairs e.g. [['primary.1', '#fff'], ['primary.2', '#000']]
 */
export function flattenColorPalette(palette: ColorPalette): Array<[string, string]> {
  return pipe(
    flattenObject(palette),
    Object.entries,
    A.filter(([, value]) => !!value)
  );
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

export function flattenSemanticTokens(semanticTokens: ResolvedSemanticTokens): RE.ReaderEither<ThemeEnv, Exception, CSSVariables> {
  return pipe(RE.asks(({ prefix }) => flattenObject(semanticTokens, { prefix: `--${prefix}` })));
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

export function resolveThemeRecord<Value>(themeRecord: ThemeRecord<Value>): Record<Theme, Value> {
  return Object.entries(themeRecord).reduce((acc, [key, value]) => {
    const theme = key.replace('_', '') as Theme;
    return { ...acc, [theme]: value as Value };
  }, {} as Record<Theme, Value>);
}

export function isThemeRecord(record: Dict = {}): record is ThemeRecord<any> {
  return Object.keys(record).every((key) => key.startsWith('_')) && `_${BASE_THEME}` in record;
}

export function normalizeThemedValue<Value extends string | number>(themedValue: ThemedValue<Value>): ThemeRecord<Value> {
  return typeof themedValue === 'object' ? themedValue : ({ [`_${BASE_THEME}`]: themedValue } as ThemeRecord<Value>);
}
