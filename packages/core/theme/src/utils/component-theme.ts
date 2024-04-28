import { pipe } from 'fp-ts/lib/function';
import * as RE from 'fp-ts/ReaderEither';
import { ComponentColorScheme, ThemeEnv } from '../theme.types';
import { buildThemedCSSVariables, normalizeThemedValue, resolveThemeRecord } from './theme';
import { ThemedCSSVariables } from './css-variables';
import * as R from 'fp-ts/Record';
import { flow } from 'fp-ts/function';
import { DeepRecord, Dict, Exception, mergeObjects, toValues } from '@myraui/shared-utils';
import { extractUtilities } from '../build';
import { colorSchemeGenerator } from '../generators/color-scheme-generator';
import { ResolvedValue } from '../resolvers';

export function buildComponentColorScheme(colorScheme: ComponentColorScheme): RE.ReaderEither<ThemeEnv, Exception, Dict<string | Dict<string>>> {
  return pipe(
    normalizeThemedValue(colorScheme),
    resolveThemeRecord,
    R.mapWithIndex((theme, value) => {
      return pipe(
        colorSchemeGenerator(value),
        RE.map((result) => result.colors as DeepRecord<ResolvedValue<any>>),
        RE.chain(extractUtilities),
        RE.map((variables) => ({ [theme]: variables } as ThemedCSSVariables))
      );
    }),
    R.sequence(RE.Applicative),
    RE.map(flow(toValues, mergeObjects)),
    RE.map(buildThemedCSSVariables)
  );
}
