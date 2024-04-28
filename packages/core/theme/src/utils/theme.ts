import { Dict, mapKeys, StringOrNumber } from '@myraui/shared-utils';
import * as R from 'fp-ts/Record';
import * as A from 'fp-ts/Array';
import { pipe } from 'fp-ts/function';
import { ColorPalette, ColorScale, myraColors } from '../colors';
import { ColorValue, Theme, ThemedValue, ThemeRecord } from '../theme.types';
import { BASE_THEME } from './constants';
import { buildCSSVariables, ThemedCSSVariables } from './css-variables';
import { isColorScale } from '../colors/utils/is-color-scale';

export const isColorMode = (theme: string) => theme === 'light' || theme === 'dark';

export function resolveColorValue(colors: Record<string, ColorValue>, colorValue: unknown): ColorScale {
  if (isColorScale(colorValue)) {
    return colorValue;
  }

  const colorFromValue = colors[colorValue as never];

  if (!colorFromValue || colorFromValue === colorValue) {
    return myraColors.black.light;
  }

  return resolveColorValue(colors, colorFromValue);
}

export function resolveThemeColors(colors: Record<string, ColorValue>): ColorPalette {
  return pipe(
    colors,
    R.mapWithIndex((key, value) => resolveColorValue(colors, value))
  );
}

export function buildThemedCSSVariables(variables: ThemedCSSVariables): Dict<string | Dict<string>> {
  return pipe(
    variables,
    R.map((variables) => buildCSSVariables(variables || [])),
    mapKeys((key) => (key === BASE_THEME ? '' : `.${key} &,[data-theme="${key}"] &`)),
    R.toEntries,
    A.reduce({}, (acc, [key, value]) => (key === '' ? { ...acc, ...value } : { ...acc, [key]: value }))
  );
}

export function resolveThemeRecord<Value>(themeRecord: ThemeRecord<Value>): Record<Theme, Value> {
  return mapKeys((key) => String(key).replace('_', '') as Theme)(themeRecord) as Record<Theme, Value>;
}

export function isThemeRecord(record: Dict = {}): record is ThemeRecord<any> {
  return Object.keys(record).every((key) => key.startsWith('_')) && `_${BASE_THEME}` in record;
}

export function normalizeThemedValue<Value extends StringOrNumber>(themedValue: ThemedValue<Value>): ThemeRecord<Value> {
  return typeof themedValue === 'object' ? themedValue : ({ [`_${BASE_THEME}`]: themedValue } as ThemeRecord<Value>);
}
