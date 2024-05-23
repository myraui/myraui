import { pipe } from 'fp-ts/lib/function';
import { ComponentColorScheme, ThemeEnv } from '../theme.types';
import { buildThemedUtilities, extractColorSchemeColors, normalizeColorModeValue } from './theme';
import * as R from 'fp-ts/Record';
import { Dict, Exception } from '@myraui/shared-utils';
import { buildColorScheme } from '../build/apply-color-scheme';
import * as RE from 'fp-ts/ReaderEither';
import { Utilities } from '../resolvers/resolvers';

export function buildComponentColorScheme(
  colorSchemeValue?: ComponentColorScheme,
  isText = false
): RE.ReaderEither<ThemeEnv, Exception, Dict<string | Utilities>> {
  return pipe(
    normalizeColorModeValue(colorSchemeValue),
    R.map((colorScheme) => {
      if (!colorScheme) return colorScheme;

      const [background, foreground] = extractColorSchemeColors(colorScheme);

      return isText && !foreground ? `/${background}` : colorScheme;
    }),
    R.map(buildColorScheme),
    R.sequence(RE.Applicative),
    RE.map(buildThemedUtilities)
  );
}
