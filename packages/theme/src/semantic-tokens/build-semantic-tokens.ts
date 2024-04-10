import { PartialSemanticTokens, ResolvedSemanticRecord, ResolvedSemanticTokens, SemanticRecord, SemanticTokens, ThemeEnv } from '../theme.types';
import * as RE from 'fp-ts/ReaderEither';
import { Exception, flattenObject, toValues } from '@myraui/utils';
import { flow, pipe } from 'fp-ts/function';
import * as A from 'fp-ts/Array';
import * as RA from 'fp-ts/ReadonlyArray';
import { CSSVariable } from '../utils';
import { resolvers } from './resolvers';
import * as R from 'fp-ts/Record';

export function createSemanticTokens(partialSemanticTokens: PartialSemanticTokens = {}): SemanticTokens {
  return {
    colors: partialSemanticTokens.colors || {},
  };
}

export function buildSemanticRecord<Value>(
  tokenKey: keyof SemanticTokens,
  semanticRecord: SemanticRecord<Value>
): RE.ReaderEither<ThemeEnv, Exception, ResolvedSemanticRecord> {
  return pipe(semanticRecord, flattenObject, R.mapWithIndex(resolvers[tokenKey]), R.sequence(RE.Applicative));
}

export function resolveSemanticTokens(semanticTokens: SemanticTokens): RE.ReaderEither<ThemeEnv, Exception, ResolvedSemanticTokens> {
  return pipe(semanticTokens, R.mapWithIndex(buildSemanticRecord), R.sequence(RE.Applicative));
}

export function buildSemanticTokens(semanticTokens: SemanticTokens): RE.ReaderEither<ThemeEnv, Exception, ReadonlyArray<CSSVariable>> {
  return pipe(semanticTokens, resolveSemanticTokens, RE.map(flow(toValues, A.chain(toValues))), RE.map(RA.flatten));
}
