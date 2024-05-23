import { ThemeEnv } from '../theme.types';
import { flow, pipe } from 'fp-ts/function';
import * as R from 'fp-ts/Record';
import * as Reader from 'fp-ts/Reader';
import { colorResolver } from '../resolvers/color-resolver';
import * as RE from 'fp-ts/ReaderEither';
import { Dict, Exception, flattenObject, mapKeys, mergeObjects, toValues } from '@myraui/shared-utils';
import { extractUtilities } from './utils';
import { Utilities } from '../resolvers/resolvers';
import { extractColorSchemeColors } from '../utils/theme';

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

export function buildColorScheme(value?: string) {
  if (!value) return RE.of({} as Utilities);
  const [colorName, textColorName] = extractColorSchemeColors(value);

  return pipe(
    { 'color-scheme': colorName, 'color-scheme-foreground': textColorName },
    R.filter((value) => !!value),
    R.mapWithIndex(applyColorSchemeUtilities),
    R.sequence(RE.Applicative),
    RE.map(flow(toValues, mergeObjects))
  );
}

export function colorSchemeMatcher(env: ThemeEnv) {
  return (value: any) =>
    pipe(
      buildColorScheme(value),
      RE.getOrElse(() => Reader.of({} as Utilities))
    )(env);
}
