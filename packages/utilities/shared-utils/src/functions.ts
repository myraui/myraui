import * as A from 'fp-ts/Array';
import { Dict, RecordKey } from './types';
import { pipe } from 'fp-ts/function';
import * as RE from 'fp-ts/ReaderEither';
import { Exception } from './errors';

type Extractable =
  | {
      [key: string]: any;
    }
  | undefined;

type ErrorTransformer<E> = (e: E) => Exception;

const errorTransform = <E>(e: E) => e;

export function unwrapRE<R, E extends Exception, A>(readerEither: RE.ReaderEither<R, E, A>, env: R, error: ErrorTransformer<E> = errorTransform): A {
  return pipe(
    readerEither,
    RE.getOrElse((e) => {
      throw error(e);
    })
  )(env);
}

export function mergeObjects<T extends Dict>(array: readonly T[]): T {
  return A.reduce<T, T>({} as T, (acc, obj) => ({ ...acc, ...obj }))([...array]);
}

export function mapKeys<K extends RecordKey, J extends RecordKey, A>(f: (key: K, value: A) => J) {
  return (record: Record<K, A>): Record<J, A> => {
    return pipe(
      record,
      Object.entries,
      A.map(([key, value]) => [f(key as K, value), value]),
      Object.fromEntries
    );
  };
}

export function swapKeys<K extends RecordKey, J extends RecordKey, A>(record: Record<K, Record<J, A>>): Record<J, Record<K, A>> {
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

export function toValues<K extends RecordKey, A>(record: Record<K, A>): A[] {
  return Object.values(record);
}

export function fromArray<K extends RecordKey, A>(f: (a: K) => A) {
  return (array: Array<K>): Record<K, A> =>
    pipe(
      array,
      A.map((a) => [a, f(a)]),
      Object.fromEntries
    );
}

export function objectToDeps(obj: Extractable) {
  if (!obj || typeof obj !== 'object') {
    return '';
  }

  try {
    return JSON.stringify(obj);
  } catch (e) {
    return '';
  }
}
