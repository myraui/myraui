import { Exception } from '@myraui/utils';
import { GeneratedConfigTheme, GeneratedThemeToken, ResolvedConfigTheme, ResolvedThemeToken, ThemeEnv, ThemeTokens } from '../theme.types';
import * as RE from 'fp-ts/ReaderEither';
import { pipe } from 'fp-ts/lib/function';
import * as R from 'fp-ts/Record';
import { ResolvedValue, resolvers } from '../resolvers/resolvers';
import { isResolvedValue } from '../resolvers/utils/is-resolved-value';

function applyDefault(record: Record<string, any>) {
  if (record.DEFAULT) {
    return { ...record, DEFAULT: record[record.DEFAULT] };
  }
  return record;
}

export function resolveThemeToken<K extends keyof ThemeTokens, T extends GeneratedThemeToken>(
  tokenKey: K,
  token: T,
  prefix = ''
): RE.ReaderEither<ThemeEnv, Exception, ResolvedThemeToken<T> | ResolvedValue<any>> {
  return pipe(
    token,
    R.mapWithIndex((key, value) => {
      if (typeof value === 'object') {
        if (isResolvedValue(value)) return RE.of(value);
        return resolveThemeToken(tokenKey, value as any, `${prefix}${key}-`);
      }

      if (key === 'DEFAULT') {
        return resolvers[tokenKey](`${prefix}${value}`, token[value] as any);
      }

      return resolvers[tokenKey](`${prefix}${key}`, value);
    }),
    R.sequence(RE.Applicative)
  ) as any;
}

export function resolveConfigTheme<T extends GeneratedConfigTheme>(theme: T): RE.ReaderEither<ThemeEnv, Exception, ResolvedConfigTheme<T>> {
  return pipe(
    theme,
    R.mapWithIndex((key, value) => resolveThemeToken(key, value as GeneratedThemeToken)),
    R.sequence(RE.Applicative)
  ) as any;
}
