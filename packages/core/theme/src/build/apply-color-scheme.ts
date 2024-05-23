import { ThemeEnv } from '../theme.types';
import { flow, pipe } from 'fp-ts/function';
import * as R from 'fp-ts/Record';
import { colorResolver } from '../resolvers/color-resolver';
import * as RE from 'fp-ts/ReaderEither';
import * as Reader from 'fp-ts/Reader';
import { Dict, Exception, flattenObject, mapKeys, mergeObjects, toValues } from '@myraui/shared-utils';
import { extractUtilities } from './utils';
import { Utilities } from '../resolvers/resolvers';

export function applyColorSchemeUtilities(key: string, colorValue: string) {
  if (!colorValue) return RE.of<ThemeEnv, Exception, Utilities>({});
  return pipe(
    colorResolver(!colorValue.includes('-'))(key, colorValue.replace('-', '.')),
    RE.chain((resolved) => extractUtilities(resolved as Dict))
  );
}

export function buildForegroundValues(colors: Dict) {
  const textOnly = pipe(
    colors,
    mapKeys((key) => `/${key}`),
    R.mapWithIndex((colorName) => colorName)
  );

  return pipe(
    colors,
    R.map((colorName) =>
      pipe(
        colors,
        R.mapWithIndex((textColorName) => `${colorName}/${textColorName}`)
      )
    ),
    (result) => flattenObject(result, { delimiter: '/' }),
    (values) => ({ ...values, ...textOnly })
  );
}

export function colorSchemeMatcherValues(colors: Dict) {
  return pipe(
    colors,
    flattenObject,
    mapKeys((key) => (key.endsWith('-DEFAULT') ? key.replace('-DEFAULT', '') : key)),
    R.mapWithIndex((colorName) => colorName),
    (values) => ({ ...values, ...buildForegroundValues(values) })
  );
}

export function extractColorSchemeColors(value: string) {
  return value.split('/');
}

export function colorSchemeMatcher(env: ThemeEnv) {
  return (value: any) => {
    const [colorName, textColorName] = extractColorSchemeColors(value);
    return pipe(
      env,
      pipe(
        { 'color-scheme': colorName, 'color-scheme-foreground': textColorName },
        R.mapWithIndex(applyColorSchemeUtilities),
        R.sequence(RE.Applicative),
        RE.map(flow(toValues, mergeObjects)),
        RE.getOrElse(() => Reader.of({}))
      )
    );
  };
}
