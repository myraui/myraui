import { ConfigThemeGenerator } from './generators';
import { pipe } from 'fp-ts/function';
import { colorResolver } from '../resolvers/color-resolver';
import * as RE from 'fp-ts/ReaderEither';
import * as R from 'fp-ts/Record';
import { Dict } from '@myraui/shared-utils';
import { ResolvedValue } from '../resolvers';

export function updateColorScheme(background?: Dict<ResolvedValue<any>>, foreground?: Dict<ResolvedValue<any>>) {
  if (!background || !foreground) {
    return background || foreground || {};
  }

  return pipe(
    background,
    R.mapWithIndex((key, value) => {
      const foregroundValue = foreground[key];
      return {
        value: [value.value, foregroundValue.value],
        utilities: { ...value?.utilities, ...foregroundValue?.utilities },
      };
    })
  );
}

export const colorSchemeGenerator: ConfigThemeGenerator<'colorScheme'> = (colorScheme) => {
  return pipe(
    { 'color-scheme': colorScheme.background, 'color-scheme-text': colorScheme.text },
    R.mapWithIndex((key, value) => (value ? colorResolver(key, value) : RE.right(undefined))),
    R.sequence(RE.Applicative),
    RE.map((result) => ({
      colorScheme: updateColorScheme(result['color-scheme'] as any, result['color-scheme-text'] as any),
    }))
  );
};
