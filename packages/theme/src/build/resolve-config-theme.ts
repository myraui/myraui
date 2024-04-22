import { Exception } from '@myraui/utils';
import { GeneratedConfigTheme, GeneratedThemeToken, ResolvedConfigTheme, ResolvedThemeToken, ThemeEnv, ThemeTokens } from '../theme.types';
import * as RE from 'fp-ts/ReaderEither';
import { pipe } from 'fp-ts/lib/function';
import * as R from 'fp-ts/Record';
import { resolvers } from '../resolvers/resolvers';

export function resolveThemeToken<K extends keyof ThemeTokens, T extends GeneratedThemeToken>(
  tokenKey: K,
  token: T,
  prefix = ''
): RE.ReaderEither<ThemeEnv, Exception, ResolvedThemeToken<T>> {
  return pipe(
    token,
    R.mapWithIndex((key, value) => {
      if (typeof value === 'string') {
        return resolvers[tokenKey](`${prefix}${key}`, value);
      }
      return resolveThemeToken(tokenKey, value, `${prefix}${key}-`);
    }),
    R.sequence(RE.Applicative) as any
  );
}

export function resolveConfigTheme<T extends GeneratedConfigTheme>(theme: T): RE.ReaderEither<ThemeEnv, Exception, ResolvedConfigTheme<T>> {
  return pipe(
    theme,
    R.mapWithIndex((key, value) => resolveThemeToken(key, value as GeneratedThemeToken)),
    R.sequence(RE.Applicative),
    RE.map((result) => result as ResolvedConfigTheme<T>)
  );
}
