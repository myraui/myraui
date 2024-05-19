import { BuiltConfigTheme } from '../theme.types';
import { pipe } from 'fp-ts/function';
import * as R from 'fp-ts/Record';
import * as A from 'fp-ts/Array';
import { colorResolver } from '../resolvers/color-resolver';
import * as RE from 'fp-ts/ReaderEither';
import { Dict, mergeObjects, toValues } from '@myraui/shared-utils';
import { ResolvedValues } from '../resolvers/resolvers';

export function createColorSchemeSelector(colorScheme: string): string {
  return `color-scheme-${colorScheme},[data-color-scheme="${colorScheme}"]`;
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

export function buildColorSchemeVariants<T extends BuiltConfigTheme<any>>(configTheme: T) {
  return pipe(
    configTheme.tokens.colors,
    R.mapWithIndex((colorName) => pipe(colorResolver('color-scheme', colorName), RE.map(applyColorSchemeUtilities(colorName)))),
    R.sequence(RE.Applicative),
    RE.map((utilities) => {
      return pipe(
        utilities,
        R.toEntries,
        A.filter(([colorName]) => colorName !== 'color-scheme'),
        A.map(([colorName, value]) => {
          return {
            name: `color-scheme-${colorName}`,
            definition: [`&.color-scheme-${colorName}`, `&[data-color-scheme="${colorName}"]`],
            utilities: value,
          };
        })
      );
    })
  );
}

export function applyColorScheme<T extends BuiltConfigTheme<any>>(configTheme: T) {
  return pipe(
    buildColorSchemeVariants(configTheme),
    RE.map((variants) => {
      return {
        ...configTheme,
        variants: [...variants, ...configTheme.variants],
      };
    })
  );
}
