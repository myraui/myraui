import { ResolvedSemanticTokens, SemanticTokens, ThemeEnv } from '../theme.types';
import * as RE from 'fp-ts/ReaderEither';
import { Exception, flattenObject } from '@myraui/utils';
import { flow, pipe } from 'fp-ts/function';
import * as A from 'fp-ts/Array';
import { CSSVariable } from '../utils';
import { resolvers } from './resolvers';
import * as R from 'fp-ts/Record';

export function resolveSemanticTokens(semanticTokens: SemanticTokens): RE.ReaderEither<ThemeEnv, Exception, ResolvedSemanticTokens> {
  return pipe(
    semanticTokens,
    R.map(flattenObject),
    R.toEntries,
    A.map(([key, value]) =>
      pipe(
        resolvers[key as keyof SemanticTokens](value),
        RE.map((variables) => [key, variables])
      )
    ),
    RE.sequenceArray,
    RE.map(Object.fromEntries)
  );
}

export function buildSemanticTokens(semanticTokens: SemanticTokens): RE.ReaderEither<ThemeEnv, Exception, Array<CSSVariable>> {
  return pipe(
    resolveSemanticTokens(semanticTokens),
    RE.map(
      flow(
        R.toEntries,
        A.map(([_, value]) => value)
      )
    ),
    RE.map(A.flatten)
  );
}
