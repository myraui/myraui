import { BuiltConfigTheme } from '../theme.types';
import { flow, pipe } from 'fp-ts/function';
import * as R from 'fp-ts/Record';
import { colorResolver } from '../resolvers/color-resolver';
import * as RE from 'fp-ts/ReaderEither';
import { Dict, flattenObject, mapKeys, mergeObjects, toValues } from '@myraui/shared-utils';
import { ResolvedValues } from '../resolvers/resolvers';
import deepmerge from 'deepmerge';

export function createColorSchemeSelector(colorScheme: string): string {
  return `.color-scheme-${colorScheme},[data-color-scheme="${colorScheme}"]`;
}

export function applyColorSchemeUtilities(colorName: string) {
  return (resolved: ResolvedValues<any>) => {
    return pipe(
      resolved as Dict,
      R.map((item) => item.utilities),
      toValues,
      mergeObjects,
      (result) => {
        return { [createColorSchemeSelector(colorName)]: result };
      }
    );
  };
}

export function buildColorScheme<T extends BuiltConfigTheme<any>>(configTheme: T) {
  return pipe(
    configTheme.tokens.colors,
    flattenObject,
    mapKeys((key) => (key.endsWith('-DEFAULT') ? key.replace('-DEFAULT', '') : key)),
    R.mapWithIndex((colorName) => {
      return pipe(colorResolver(!colorName.includes('-'))('color-scheme', colorName.replace('-', '.')), RE.map(applyColorSchemeUtilities(colorName)));
    }),
    R.sequence(RE.Applicative)
  );
}

export function buildColorSchemeUtilities<T extends BuiltConfigTheme<any>>(configTheme: T) {
  return pipe(buildColorScheme(configTheme), RE.map(flow(toValues, mergeObjects)));
}

export function applyColorScheme<T extends BuiltConfigTheme<any>>(configTheme: T) {
  return pipe(
    buildColorSchemeUtilities(configTheme),
    RE.map((utilities) => {
      return {
        ...configTheme,
        utilities: deepmerge(configTheme.utilities, utilities),
      };
    })
  );
}
