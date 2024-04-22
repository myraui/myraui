import { Resolver } from './resolvers';
import { pipe } from 'fp-ts/lib/function';
import { cssVariable } from '../utils';
import { ThemeTokens } from '../theme.types';
import * as RE from 'fp-ts/ReaderEither';

export const genericResolver =
  (tokenKey: keyof ThemeTokens): Resolver =>
  (key: string, value: string) => {
    return pipe(
      cssVariable(`${tokenKey}-${key}`, { value }),
      RE.map((variable) => ({
        [key]: {
          value,
          utilities: [variable],
        },
      }))
    );
  };
