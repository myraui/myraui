import { pipe } from 'fp-ts/lib/function';
import * as RE from 'fp-ts/ReaderEither';
import {
  ComponentTheme,
  GeneratedThemeToken,
  PartialThemeTokens,
  ResolvedConfigTheme,
  Theme,
  ThemedValue,
  ThemeEnv,
  ThemeRecord,
  ThemeTokens,
  ThemeTokensRecord,
} from '../theme.types';
import { buildThemedCSSVariables, isThemeRecord, normalizeThemedValue, resolveThemeRecord } from './theme';
import { ThemedCSSVariables } from './css-variables';
import * as R from 'fp-ts/Record';
import { flow } from 'fp-ts/function';
import { Dict, Exception, mergeObjects, swapKeys, toValues } from '@myraui/utils';
import { extractUtilities, resolveThemeToken } from '../build';

export function normalizeThemeToken<Value>(themeToken: ThemeTokensRecord<ThemedValue<Value>>): ThemeTokensRecord<ThemeRecord<Value>>;
export function normalizeThemeToken<Value>(themedValue: ThemeRecord<Value>): ThemeRecord<Value>;
export function normalizeThemeToken(themeToken: Dict): any {
  if (!themeToken) return {};
  if (isThemeRecord(themeToken)) return themeToken;
  return pipe(themeToken, R.map(flow(normalizeThemedValue, normalizeThemeToken)));
}

export function buildThemedThemeToken<Value>(themeToken: ThemeTokensRecord<ThemeRecord<Value>>): Record<Theme, ThemeTokensRecord<Value>> {
  if (!themeToken) return {};
  if (isThemeRecord(themeToken)) return resolveThemeRecord(themeToken);

  return pipe(
    themeToken,
    R.mapWithIndex((_, value) => buildThemedThemeToken(value as any)),
    swapKeys
  ) as any;
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
        tokens as Dict,
        R.mapWithIndex((key, value) => resolveThemeToken(key as keyof ThemeTokens, value as GeneratedThemeToken)),
        R.sequence(RE.Applicative),
        RE.map((result) => result as ResolvedConfigTheme),
        RE.chain(extractUtilities),
        RE.map((variables) => ({ [theme]: variables } as ThemedCSSVariables))
      );
    }),
    R.sequence(RE.Applicative),
    RE.map(flow(toValues, mergeObjects)),
    RE.map(buildThemedCSSVariables)
  );
}
