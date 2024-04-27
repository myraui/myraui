import { ConfigThemeGenerator } from './generators';
import { pipe } from 'fp-ts/function';
import { colorResolver } from '../resolvers/color-resolver';
import * as RE from 'fp-ts/ReaderEither';

export const colorSchemeGenerator: ConfigThemeGenerator<'colorScheme'> = (colorScheme: string) => {
  return pipe(
    colorResolver('color-scheme', colorScheme),
    RE.map((result) => ({ colors: { 'color-scheme': result } }))
  );
};
