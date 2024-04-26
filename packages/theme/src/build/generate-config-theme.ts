import { Exception, toValues } from '@myraui/utils';
import { FullConfigTheme, GeneratedConfigTheme, ThemeEnv } from '../theme.types';
import * as RE from 'fp-ts/ReaderEither';
import * as A from 'fp-ts/Array';
import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/lib/function';
import * as R from 'fp-ts/Record';
import { flow } from 'fp-ts/function';
import deepmerge from 'deepmerge';
import { ConfigThemeGenerator, generators } from '../generators/generators';
import { createThemeTokens } from '../utils/create-theme-tokens';

export function generateConfigTheme<T extends FullConfigTheme>(configTheme: T): RE.ReaderEither<ThemeEnv, Exception, GeneratedConfigTheme<T>> {
  return pipe(
    configTheme,
    R.mapWithIndex((key, value) => {
      const generator = (generators as any)[key] as ConfigThemeGenerator<any> | undefined;
      return generator ? generator(value) : RE.right({ [key]: value });
    }),
    R.sequence(RE.Applicative),
    RE.map(
      flow(
        toValues,
        A.reduce({} as GeneratedConfigTheme, (acc, cur) => deepmerge(cur, acc, {}))
      )
    ),
    RE.map(R.filterMapWithIndex((key, value) => (Object.keys(createThemeTokens()).includes(key) ? O.some(value) : O.none)))
  ) as any;
}
