import * as A from 'fp-ts/Array';
import { Dict } from '../types';
import { pipe } from 'fp-ts/function';

export function mergeObjects<T extends Dict>(array: readonly T[]): T {
  return A.reduce<T, T>({} as T, (acc, obj) => ({ ...acc, ...obj }))([...array]);
}

export function mapKeys<K extends string, J extends string, A>(f: (key: K, value: A) => J) {
  return (record: Record<K, A>): Record<J, A> => {
    return pipe(
      record,
      Object.entries,
      A.map(([key, value]) => [f(key as K, value), value]),
      Object.fromEntries
    );
  };
}

export function swapKeys<K extends string, J extends string, A>(record: Record<K, Record<J, A>>): Record<J, Record<K, A>> {
  return pipe(
    record,
    Object.entries,
    A.reduce({} as Dict, (result, [key, value]) => {
      for (const [k, v] of Object.entries(value)) {
        if (!result[k]) result[k] = {};
        result[k][key] = v;
      }
      return result;
    })
  ) as Record<J, Record<K, A>>;
}
