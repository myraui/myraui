import { Exception, mergeObjects, StringOrNumber, toValues } from '@myraui/utils';
import { GeneratedConfigTheme, GeneratedThemeToken, ResolvedConfigTheme, ResolvedThemeToken, ThemeEnv, ThemeTokens } from '../theme.types';
import * as RE from 'fp-ts/ReaderEither';
import { pipe } from 'fp-ts/lib/function';
import * as R from 'fp-ts/Record';
import { resolvers } from '../resolvers/resolvers';
import { isResolvedValue } from '../resolvers/utils/is-resolved-value';
import { flow } from 'fp-ts/function';
import { themeTokenVariable } from '../utils/css-variables';

export function resolveDefault<K extends keyof ThemeTokens>(tokenKey: K, value: StringOrNumber, prefix: string) {
  const key = prefix.replace(/-$/, '');
  return pipe(
    themeTokenVariable(tokenKey, `${prefix}${value}`),
    RE.chain((variableValue) =>
      pipe(
        themeTokenVariable(tokenKey, `${key}`, { value: variableValue }),
        RE.map((variable) => ({
          [key || 'DEFAULT']: {
            value: variable.reference(),
            utilities: [variable],
          },
        }))
      )
    )
  );
}

export function resolveThemeToken<K extends keyof ThemeTokens, T extends GeneratedThemeToken>(
  tokenKey: K,
  token: T,
  prefix = ''
): RE.ReaderEither<ThemeEnv, Exception, ResolvedThemeToken<T>> {
  return pipe(
    token,
    R.mapWithIndex((key, value) => {
      if (typeof value === 'object') {
        if (isResolvedValue(value)) return RE.of({ [`${prefix}${key}`]: value });
        return resolveThemeToken(tokenKey, value as any, `${prefix}${key}-`);
      }

      if (key === 'DEFAULT') {
        return resolveDefault(tokenKey, value, prefix);
      }

      return resolvers[tokenKey](`${prefix}${key}`, value);
    }),
    R.sequence(RE.Applicative),
    RE.map(flow(toValues, mergeObjects))
  ) as any;
}

export function resolveConfigTheme<T extends GeneratedConfigTheme>(theme: T): RE.ReaderEither<ThemeEnv, Exception, ResolvedConfigTheme<T>> {
  return pipe(
    theme,
    R.mapWithIndex((key, value) => resolveThemeToken(key, value as GeneratedThemeToken)),
    R.sequence(RE.Applicative)
  ) as any;
}
