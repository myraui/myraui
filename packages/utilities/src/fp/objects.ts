import * as A from 'fp-ts/Array';
import { Dict } from '../types';

export function mergeObjects<T extends Dict>(array: readonly T[]): T {
  return A.reduce<T, T>({} as T, (acc, obj) => ({ ...acc, ...obj }))([...array]);
}
