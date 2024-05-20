import { StringOrNumber } from '@myraui/shared-utils';
import { Resolver } from './resolvers';
import * as RE from 'fp-ts/ReaderEither';

/**
 * Resolves the raw value without generating utilities
 * @param _key
 * @param value
 */
export const rawValueResolver: Resolver = (_key: string, value: StringOrNumber) => {
  return RE.right({ value: value, utilities: {} });
};
