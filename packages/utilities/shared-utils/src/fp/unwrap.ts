import * as RE from 'fp-ts/ReaderEither';
import { pipe } from 'fp-ts/function';
import { Exception } from './exception';

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
