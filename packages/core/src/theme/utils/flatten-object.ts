import { flatten } from 'flat';

export function flattenObject<T, R = object>(obj: T, delimiter = '-'): R {
  return flatten(obj, { safe: true, delimiter }) as R;
}
