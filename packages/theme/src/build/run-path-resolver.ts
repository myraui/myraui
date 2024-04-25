import { FullConfigTheme, GeneratedConfigTheme, GeneratedThemeToken, ThemeEnv } from '../theme.types';
import { pipe } from 'fp-ts/function';
import * as RE from 'fp-ts/ReaderEither';
import * as O from 'fp-ts/Option';
import * as A from 'fp-ts/Array';
import * as R from 'fp-ts/Record';
import { DeepRecord, Dict, Exception, RecordKey, StringOrNumber } from '@myraui/utils';
import { CSSVariable, cssVariable } from '../utils';

export function buildVariableFromPath(value: string) {
  return cssVariable(value.replace(/\./gi, '-'));
}

export function mapToVariables(record: Record<RecordKey, string>) {
  return pipe(
    record,
    R.filterMapWithIndex((key, value) => (key === 'DEFAULT' ? O.none : O.some(value))),
    R.mapWithIndex((key, value) => buildVariableFromPath(value)),
    R.sequence(RE.Applicative),
    RE.map((variables) => ({ DEFAULT: record.DEFAULT, ...variables }))
  );
}

export function generatePaths(path: StringOrNumber, theme: GeneratedConfigTheme): Array<[string, DeepRecord<any, any> | StringOrNumber]> {
  return pipe(
    String(path).split('.'),
    (keys) => keys.map((key, index) => keys.slice(0, index + 1).join('.')),
    A.map((path) => [path, path.split('.').reduce((acc, cur) => (acc && typeof acc === 'object' ? (acc as any)[cur] : undefined), theme as any)])
  );
}

export function resolvePath(
  path: StringOrNumber,
  theme: GeneratedConfigTheme,
  history: Array<string> = []
): RE.ReaderEither<ThemeEnv, Exception, CSSVariable | Record<string, CSSVariable | string> | undefined> {
  if (history.includes(String(path))) {
    return RE.left(new Exception(`Circular dependency detected ${history.join(' -> ')} -> ${path}`));
  }

  return pipe(
    generatePaths(path, theme),
    RE.of,
    RE.chain((paths) => {
      const [_path, value] = paths[paths.length - 1] as any;

      if (!value) {
        return RE.right(undefined);
      }

      if (paths.length > 1) {
        const [_parentPath, parentValue] = paths[paths.length - 2] as any;
        const key = _path.split('.').pop();

        if (parentValue.DEFAULT && parentValue[key]) {
          return pipe(
            Object.keys(parentValue).reduce((acc, cur) => ({ ...acc, [cur]: cur === 'DEFAULT' ? key : `${_parentPath}.${cur}` }), {}),
            mapToVariables
          );
        }
      }

      if (typeof value === 'object') {
        return pipe(
          Object.keys(value).reduce((acc, cur) => ({ ...acc, [cur]: cur === 'DEFAULT' ? value[cur] : `${_path}.${cur}` }), {}),
          mapToVariables
        );
      }

      return pipe(
        resolvePath(value, theme, [...history, String(path)]),
        RE.chain((resolved) => {
          return resolved ? RE.right(resolved) : buildVariableFromPath(_path);
        })
      );
    })
  );
}

export function resolvePaths<T extends GeneratedConfigTheme>(theme: T) {
  return <R extends GeneratedThemeToken>(token: R): RE.ReaderEither<ThemeEnv, Exception, R> =>
    pipe(
      token as Dict,
      R.mapWithIndex((key, value) =>
        typeof value === 'object'
          ? resolvePaths(theme)(value)
          : pipe(
              resolvePath(value, theme),
              RE.map((resolved) => resolved || value)
            )
      ),
      R.sequence(RE.Applicative),
      RE.map((resolved) => resolved as R)
    );
}

export function runPathResolver<T extends FullConfigTheme>(
  theme: GeneratedConfigTheme<T>
): RE.ReaderEither<ThemeEnv, Exception, GeneratedConfigTheme<T>> {
  return pipe(theme, R.map(resolvePaths(theme)), R.sequence(RE.Applicative)) as any;
}
