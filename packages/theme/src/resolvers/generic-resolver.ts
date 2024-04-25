import { Resolver } from './resolvers';
import { pipe } from 'fp-ts/lib/function';
import { CSSVariable, cssVariable, isCSSVariable } from '../utils';
import { ThemeTokens } from '../theme.types';
import * as RE from 'fp-ts/ReaderEither';

export const genericResolver =
  (tokenKey: keyof ThemeTokens): Resolver =>
  (key: string, value: string | CSSVariable) => {
    return pipe(
      cssVariable(`${tokenKey}-${key}`, { value }),
      RE.map((variable) => ({
        value: isCSSVariable(value) ? value.value : value,
        utilities: [variable],
      }))
    );
  };
