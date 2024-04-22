import { DeepRecord, DeepRecordCopy, Exception, toValues } from '@myraui/utils';
import { BuiltConfigTheme, ConfigTheme, ResolvedConfigTheme, ResolvedTokenValues, ThemeEnv } from '../theme.types';
import * as RE from 'fp-ts/ReaderEither';
import { pipe } from 'fp-ts/lib/function';
import * as R from 'fp-ts/Record';
import { ResolvedValue } from '../resolvers';
import { isResolvedValue } from '../resolvers/utils/is-resolved-value';
import { CSSVariable } from '../utils';
import * as RA from 'fp-ts/ReadonlyArray';
import { flow } from 'fp-ts/function';
import { generateConfigTheme } from './generate-config-theme';
import { resolveConfigTheme } from './resolve-config-theme';
import { applyBaseTheme } from './apply-base-theme';
import { ColorMode } from '../colors';

export function extractUtilities<T extends DeepRecord<ResolvedValue<any>>>(record: T): RE.ReaderEither<ThemeEnv, Exception, readonly CSSVariable[]> {
  return pipe(
    record,
    R.map((value) => {
      return isResolvedValue(value) ? RE.right(value.utilities || []) : extractUtilities(value);
    }),
    R.sequence(RE.Applicative),
    RE.map(flow(toValues, RA.flatten))
  );
}

export function extractResolvedValue<T extends DeepRecord<ResolvedValue<any>>>(
  record: T
): RE.ReaderEither<ThemeEnv, Exception, DeepRecordCopy<T, any>> {
  return pipe(
    record,
    R.map((value) => {
      return isResolvedValue(value) ? RE.right(value.value) : extractResolvedValue(value);
    }),
    R.sequence(RE.Applicative) as any
  );
}

export function extractResolvedTokens<T extends ResolvedConfigTheme>(configTheme: T): RE.ReaderEither<ThemeEnv, Exception, ResolvedTokenValues<T>> {
  return pipe(configTheme, R.map(extractResolvedValue), R.sequence(RE.Applicative) as any);
}

export function createBuiltConfigTheme(colorMode: ColorMode) {
  return <T extends ResolvedConfigTheme>(configTheme: T): RE.ReaderEither<ThemeEnv, Exception, BuiltConfigTheme<T>> => {
    return pipe(
      extractResolvedTokens(configTheme),
      RE.chain((resolvedTokens) => {
        return pipe(
          extractUtilities(configTheme),
          RE.map((utilities) => ({
            utilities: [...utilities],
            tokens: resolvedTokens,
            colorMode,
          }))
        );
      })
    );
  };
}

export function buildConfigTheme<T extends ConfigTheme>(themeName: string, configTheme: T) {
  return pipe(
    applyBaseTheme(themeName, configTheme),
    RE.chain((fullConfigTheme) =>
      pipe(generateConfigTheme(fullConfigTheme), RE.chain(flow(resolveConfigTheme, RE.chain(createBuiltConfigTheme(fullConfigTheme.extend)))))
    )
  );
}
