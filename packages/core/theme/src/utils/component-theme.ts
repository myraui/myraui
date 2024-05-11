import { pipe } from 'fp-ts/lib/function';
import * as RE from 'fp-ts/ReaderEither';
import { ComponentColorScheme, ThemeEnv } from '../theme.types';
import { buildThemedUtilities, normalizeColorModeValue } from './theme';
import * as R from 'fp-ts/Record';
import { flow } from 'fp-ts/function';
import { DeepRecord, Dict, Exception, mergeObjects, toValues } from '@myraui/shared-utils';
import { extractUtilities } from '../build';
import { colorSchemeGenerator } from '../generators/color-scheme-generator';
import { ResolvedValue } from '../resolvers';
import { Utilities } from '../resolvers/resolvers';

export function buildComponentColorScheme(colorScheme: ComponentColorScheme): RE.ReaderEither<ThemeEnv, Exception, Dict<string | Utilities>> {
  return pipe(
    normalizeColorModeValue(colorScheme),
    R.mapWithIndex((theme, value) => {
      return pipe(
        colorSchemeGenerator(value as string),
        RE.map((result) => result.colors as DeepRecord<ResolvedValue<any>>),
        RE.chain(extractUtilities),
        RE.map((variables) => ({ [theme]: variables }))
      );
    }),
    R.sequence(RE.Applicative),
    RE.map(flow(toValues, mergeObjects)),
    RE.map(buildThemedUtilities)
  );
}
