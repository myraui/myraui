import { ConfigThemeGenerator } from './generators';
import { pipe } from 'fp-ts/function';
import { colorResolver } from '../resolvers/color-resolver';
import * as RE from 'fp-ts/ReaderEither';

export function colorSchemeGenerator(key: string): ConfigThemeGenerator<'colorScheme' | 'colorSchemeForeground'> {
  return (colorScheme) =>
    pipe(
      colorResolver()(key, colorScheme),
      RE.map((result) => ({ colors: { [key]: result } }))
    );
}
