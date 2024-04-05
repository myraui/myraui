import { flatten } from 'flat';
import { Dict } from '../types';

export type FlattenObjectOptions = {
  delimiter?: string;
  prefix?: string;
};

export function flattenObject<R = Dict, T = object>(obj: T, options: FlattenObjectOptions = { delimiter: '-' }): R {
  return flatten(options.prefix ? { [options.prefix]: obj } : obj, { safe: true, delimiter: options.delimiter }) as R;
}
