import { flatten } from 'flat';

export function flattenObject<T, R = Object>(obj: T, delimiter = '-'): R {
  return flatten(obj, { safe: true, delimiter }) as R;
}
