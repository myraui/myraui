import { Resolver } from './resolvers';
import { pipe } from 'fp-ts/lib/function';
import { cssVariable } from '../utils/css-variables';
import { ThemeTokens } from '../theme.types';
import * as RE from 'fp-ts/ReaderEither';
import { StringOrNumber } from '@myraui/utils';

function validateKey(key: string) {
  return key.replace(/\./, '_');
}

export const genericResolver =
  (tokenKey: keyof ThemeTokens): Resolver =>
  (key: string, value: StringOrNumber) => {
    return pipe(
      cssVariable(`${tokenKey}-${validateKey(key)}`, { value: String(value) }),
      RE.map((variable) => ({
        [key]: {
          value: variable.reference(),
          utilities: [variable],
        },
      }))
    );
  };
