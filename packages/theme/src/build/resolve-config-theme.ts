import { Exception } from '@myraui/utils';
import { GeneratedConfigTheme, GeneratedThemeToken, ResolvedConfigTheme, ResolvedThemeToken, ThemeEnv, ThemeTokens } from '../theme.types';
import * as RE from 'fp-ts/ReaderEither';
import { pipe } from 'fp-ts/lib/function';
import * as R from 'fp-ts/Record';
import { resolvers } from '../resolvers/resolvers';
import { runPathResolver } from './run-path-resolver';
import { isCSSVariable } from '../utils';

export function joinTokenPrefix(prefix: string, path: string) {
  return !path ? prefix : !prefix ? path : `${prefix}-${path}`;
}

export function resolveDefault(value: Record<string, any>) {
  if (value.DEFAULT) {
    return { ...value, DEFAULT: value[value.DEFAULT] };
  }
  return value;
}

export function resolveThemeToken<K extends keyof ThemeTokens, T extends GeneratedThemeToken>(
  tokenKey: K,
  token: T,
  prefix = ''
): RE.ReaderEither<ThemeEnv, Exception, ResolvedThemeToken<T>> {
  return pipe(
    token,
    resolveDefault,
    R.mapWithIndex((key, value) => {
      if (typeof value === 'string' || isCSSVariable(value)) {
        return resolvers[tokenKey](joinTokenPrefix(prefix, key === 'DEFAULT' ? '' : key), value);
      }
      return resolveThemeToken(tokenKey, value as any, joinTokenPrefix(prefix, key === 'DEFAULT' ? '' : key));
    }),
    R.sequence(RE.Applicative) as any
  );
}

export function resolveConfigTheme<T extends GeneratedConfigTheme>(theme: T): RE.ReaderEither<ThemeEnv, Exception, ResolvedConfigTheme<T>> {
  return pipe(
    runPathResolver(theme),
    RE.map(R.mapWithIndex((key, value) => resolveThemeToken(key, value as GeneratedThemeToken))),
    RE.chain(R.sequence(RE.Applicative))
  ) as any;
}
