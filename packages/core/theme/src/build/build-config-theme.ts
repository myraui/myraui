import { Exception } from '@myraui/shared-utils';
import { BuiltConfigTheme, ConfigTheme, ResolvedConfigTheme, ThemeEnv } from '../theme.types';
import * as RE from 'fp-ts/ReaderEither';
import { pipe } from 'fp-ts/lib/function';
import { flow } from 'fp-ts/function';
import { generateConfigTheme } from './generate-config-theme';
import { resolveConfigTheme } from './resolve-config-theme';
import { applyBaseTheme } from './apply-base-theme';
import { ColorMode } from '../colors';
import { extractResolvedTokens, extractUtilities } from './utils';

export function createBuiltConfigTheme(colorMode: ColorMode) {
  return <T extends ResolvedConfigTheme>(configTheme: T): RE.ReaderEither<ThemeEnv, Exception, BuiltConfigTheme<T>> => {
    return pipe(
      extractResolvedTokens(configTheme),
      RE.chain((resolvedTokens) => {
        return pipe(
          extractUtilities(configTheme),
          RE.map((utilities) => ({
            variants: [],
            utilities: utilities,
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
    RE.chain((fullConfigTheme) => {
      return pipe(generateConfigTheme(fullConfigTheme), RE.chain(flow(resolveConfigTheme, RE.chain(createBuiltConfigTheme(fullConfigTheme.extend)))));
    })
  );
}
