import { ConfigThemeGenerator } from './generators';
import { pipe } from 'fp-ts/function';
import { colorResolver } from '../resolvers/color-resolver';
import * as RE from 'fp-ts/ReaderEither';
import { ColorScheme } from '../theme.types';
import * as R from 'fp-ts/Record';
import { extractColorSchemeColors } from '../utils/theme';

export const colorSchemeGenerator: ConfigThemeGenerator<'colorScheme'> = (colorScheme: ColorScheme) => {
  const [background, foreground] = extractColorSchemeColors(colorScheme);
  return pipe(
    { 'color-scheme': background, 'color-scheme-foreground': foreground },
    R.filter((value) => !!value),
    R.mapWithIndex(colorResolver()),
    R.sequence(RE.Applicative),
    RE.map((result) => ({ colors: result }))
  );
};
