import { ResolvedValue } from '../resolvers';
import * as RE from 'fp-ts/ReaderEither';
import { ResolvedConfigTheme, ResolvedTokenValues, ThemeEnv } from '../theme.types';
import { Utilities } from '../resolvers/resolvers';
import { flow, pipe } from 'fp-ts/function';
import * as R from 'fp-ts/Record';
import { isResolvedValue } from '../resolvers/utils/is-resolved-value';
import { DeepRecord, DeepRecordCopy, Exception, mergeObjects, toValues } from '@myraui/shared-utils';

export function extractUtilities(record: DeepRecord<ResolvedValue<any>>): RE.ReaderEither<ThemeEnv, Exception, Utilities> {
  return pipe(
    record,
    R.map((value) => {
      return isResolvedValue(value) ? RE.right(value.utilities ? value.utilities : {}) : extractUtilities(value as any);
    }),
    R.sequence(RE.Applicative),
    RE.map(flow(toValues, mergeObjects))
  );
}

export function extractResolvedValue<T extends DeepRecord<ResolvedValue<any>>>(record: T): RE.ReaderEither<ThemeEnv, Exception, DeepRecordCopy<T>> {
  return pipe(
    record,
    R.map((value) => {
      return isResolvedValue(value) ? RE.right(value.value) : extractResolvedValue(value as any);
    }),
    R.sequence(RE.Applicative) as any
  );
}

export function extractResolvedTokens<T extends ResolvedConfigTheme>(configTheme: T): RE.ReaderEither<ThemeEnv, Exception, ResolvedTokenValues<T>> {
  return pipe(configTheme, R.map(extractResolvedValue), R.sequence(RE.Applicative) as any);
}
