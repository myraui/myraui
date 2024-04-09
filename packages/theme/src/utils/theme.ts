import { Dict, flattenObject, mapKeys } from '@myraui/utils';
import * as A from 'fp-ts/Array';
import * as R from 'fp-ts/Record';
import { pipe } from 'fp-ts/function';
import { ColorPalette, ColorScale, isColorScale, myraColors } from '../colors';
import { ColorValue, Theme, ThemedValue, ThemeRecord } from '../theme.types';
import { BASE_THEME } from './constants';
import { ScopedCSSVariables, ThemedCSSVariables } from './css-variables';

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
  return pipe(
    colors,
    R.mapWithIndex((key, value) => resolveColorValue(colors, value))
  );
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

export function flattenThemedCSSVariables(variables: ThemedCSSVariables): ScopedCSSVariables {
  return pipe(
    variables,
    R.toEntries,
    A.map(([theme, scopedVariables]) => {
      if (theme === BASE_THEME) {
        return [theme, scopedVariables];
      } else {
        return [`.${theme} &,[data-theme="${theme}"] &`, scopedVariables];
      }
    }),
    Object.fromEntries
  );
}

export function resolveThemeRecord<Value>(themeRecord: ThemeRecord<Value>): Record<Theme, Value> {
  return mapKeys((key) => key.replace('_', '') as Theme)(themeRecord) as Record<Theme, Value>;
}

export function isThemeRecord(record: Dict = {}): record is ThemeRecord<any> {
  return Object.keys(record).every((key) => key.startsWith('_')) && `_${BASE_THEME}` in record;
}

export function normalizeThemedValue<Value extends string | number>(themedValue: ThemedValue<Value>): ThemeRecord<Value> {
  return typeof themedValue === 'object' ? themedValue : ({ [`_${BASE_THEME}`]: themedValue } as ThemeRecord<Value>);
}
