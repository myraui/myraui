import { pipe } from 'fp-ts/lib/function';
import * as RE from 'fp-ts/ReaderEither';
import { ColorModeValue, ComponentColorScheme, ThemeEnv, ThemeTokens } from '../theme.types';
import { buildThemedUtilities, normalizeColorModeValue } from './theme';
import * as R from 'fp-ts/Record';
import { flow } from 'fp-ts/function';
import { DeepRecord, Dict, Exception, mergeObjects, swapKeys, toValues } from '@myraui/shared-utils';
import { extractUtilities } from '../build';
import { colorSchemeGenerator } from '../generators/color-scheme-generator';
import { ResolvedValue } from '../resolvers';
import { Utilities } from '../resolvers/resolvers';
import * as O from 'fp-ts/Option';

export function createComponentColorScheme(colorScheme: ComponentColorScheme): ColorModeValue<ThemeTokens['colorScheme']> {
  return pipe(
    { background: colorScheme.colorScheme, text: colorScheme.textColorScheme },
    R.filterMap((value) => (value ? O.some(normalizeColorModeValue(value)) : O.none)),
    swapKeys
  );
}

export function buildComponentColorScheme(colorScheme: ComponentColorScheme): RE.ReaderEither<ThemeEnv, Exception, Dict<string | Utilities>> {
  return pipe(
    createComponentColorScheme(colorScheme) as Dict,
    R.mapWithIndex((theme, value) => {
      return pipe(
        colorSchemeGenerator(value),
        RE.map((result) => result.colorScheme as DeepRecord<ResolvedValue<any>>),
        RE.chain(extractUtilities),
        RE.map((variables) => ({ [theme]: variables }))
      );
    }),
    R.sequence(RE.Applicative),
    RE.map(flow(toValues, mergeObjects)),
    RE.map(buildThemedUtilities)
  );
}
