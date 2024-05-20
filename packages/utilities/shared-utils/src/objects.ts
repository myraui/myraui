import { flatten } from 'flat';
import { Dict } from './types';

export type FlattenObjectOptions = {
  delimiter?: string;
  prefix?: string;
  maxDepth?: number;
};

export function flattenObject<R = Dict, T = object>(obj: T, options: FlattenObjectOptions = {}): R {
  return flatten(options.prefix ? { [options.prefix]: obj } : obj, {
    safe: true,
    delimiter: options.delimiter || '-',
    maxDepth: options.maxDepth,
  }) as R;
}
