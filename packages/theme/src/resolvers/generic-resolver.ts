import { ResolvedValue, Resolver } from './resolvers';
import { pipe } from 'fp-ts/lib/function';
import { cssVariable } from '../utils';
import { ThemeTokens } from '../theme.types';
import * as RE from 'fp-ts/ReaderEither';
import { isResolvedValue } from './utils/is-resolved-value';

export const genericResolver =
  (tokenKey: keyof ThemeTokens): Resolver =>
  (key: string, value: string | ResolvedValue<any>) => {
    if (isResolvedValue(value)) {
      return RE.of({ [key]: value });
    }
    return pipe(
      cssVariable(`${tokenKey}-${key}`, { value }),
      RE.map((variable) => ({
        [key]: {
          value: value,
          utilities: [variable],
        },
      }))
    );
  };
