import { pipe } from 'fp-ts/lib/function';
import * as RE from 'fp-ts/ReaderEither';
import { ComponentTheme, GeneratedThemeToken, PartialThemeTokens, Theme, ThemedValue, ThemeEnv, ThemeRecord, ThemeTokens } from '../theme.types';
import { buildThemedCSSVariables, isThemeRecord, normalizeThemedValue, resolveThemeRecord } from './theme';
import { ThemedCSSVariables } from './css-variables';
import * as R from 'fp-ts/Record';
import { flow } from 'fp-ts/function';
import { DeepRecord, Dict, Exception, mergeObjects, swapKeys, toValues } from '@myraui/utils';
import { extractUtilities } from '../build/build-config-theme';
import { resolveThemeToken } from '../build/resolve-config-theme';

export function normalizeThemeToken<Value>(themeToken: DeepRecord<ThemedValue<Value>>): DeepRecord<ThemeRecord<Value>>;
export function normalizeThemeToken<Value>(themedValue: ThemeRecord<Value>): ThemeRecord<Value>;
export function normalizeThemeToken(themeToken: Dict): any {
  if (!themeToken) return {};
  if (isThemeRecord(themeToken)) return themeToken;
  return pipe(themeToken, R.map(flow(normalizeThemedValue, normalizeThemeToken)));
}

export function buildThemedThemeToken<Value>(themeToken: DeepRecord<ThemeRecord<Value>>): Record<Theme, DeepRecord<Value>> {
  if (!themeToken) return {};
  if (isThemeRecord(themeToken)) return resolveThemeRecord(themeToken);

  return pipe(
    themeToken,
    R.mapWithIndex((_, value) => buildThemedThemeToken(value as any)),
    swapKeys
  ) as Record<Theme, DeepRecord<Value>>;
}

export function resolveComponentTheme(componentTheme: ComponentTheme): Record<Theme, PartialThemeTokens> {
  return pipe(
    componentTheme,
    R.filter((value) => !!value),
    R.map((value) => pipe(normalizeThemeToken(value), buildThemedThemeToken)),
    swapKeys
  ) as Record<Theme, PartialThemeTokens>;
}

export function buildComponentTheme(componentTheme: ComponentTheme): RE.ReaderEither<ThemeEnv, Exception, Dict<string | Dict<string>>> {
  return pipe(
    resolveComponentTheme(componentTheme),
    R.mapWithIndex((theme, tokens) => {
      return pipe(
        tokens,
        R.filter((value) => !!value),
        R.mapWithIndex((key, value) => resolveThemeToken(key as keyof ThemeTokens, value as GeneratedtqThemeToken)),
        R.sequence(RE.Applicative),
        RE.chain(extractUtilities),
        RE.map((variables) => ({ [theme]: variables } as ThemedCSSVariables))
      );
    }),
    R.sequence(RE.Applicative),
    RE.map(flow(toValues, mergeObjects)),
    RE.map(buildThemedCSSVariables)
  );
}
