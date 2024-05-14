import { Dict } from '@myraui/shared-utils';
import withAlphaVariable from 'tailwindcss/lib/util/withAlphaVariable';
import { CSSRuleObject } from 'tailwindcss/types/config';
import { pipe } from 'fp-ts/function';
import { ColorValueFunction } from '@myraui/theme';

type UtilityMatcher<T> = (value: T, extra: { modifier: string | null }) => CSSRuleObject | null;

type ColorSchemeValue = ColorValueFunction | [ColorValueFunction, ColorValueFunction];

export function extractColorSchemeColors(value: ColorSchemeValue, inverted = false) {
  return pipe(
    Array.isArray(value) ? [...value] : [value, undefined],
    (array) => (inverted ? array.reverse() : array),
    ([background, foreground]) => ({
      background: background ? withAlphaVariable({ color: background, property: 'background-color', variable: '--tw-bg-opacity' }) : undefined,
      text: foreground ? withAlphaVariable({ color: foreground, property: 'color', variable: '--tw-text-opacity' }) : undefined,
    })
  );
}

export function colorSchemeBgMatcher(value: ColorSchemeValue, inverted = false) {
  return pipe(extractColorSchemeColors(value, inverted), ({ background, text }) => ({
    ...background,
    ...(text ? text : {}),
  }));
}

export function colorSchemeTextMatcher(value: ColorSchemeValue, inverted = false) {
  return pipe(extractColorSchemeColors(value, inverted), ({ text }) => ({ ...(text || {}) }));
}

export function colorSchemeMatchers(): Dict<UtilityMatcher<ColorValueFunction>> {
  return {
    'bg-color-scheme': (value) => colorSchemeBgMatcher(value),
    'text-color-scheme': (value) => colorSchemeTextMatcher(value),
    'bg-inverted-color-scheme': (value) => colorSchemeBgMatcher(value, true),
    'text-inverted-color-scheme': (value) => colorSchemeTextMatcher(value, true),
  };
}
