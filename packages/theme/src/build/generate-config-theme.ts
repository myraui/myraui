import { Exception, toValues } from '@myraui/utils';
import { FullConfigTheme, GeneratedConfigTheme, ThemeEnv } from '../theme.types';
import * as RE from 'fp-ts/ReaderEither';
import * as A from 'fp-ts/Array';
import { pipe } from 'fp-ts/lib/function';
import * as R from 'fp-ts/Record';
import { flow } from 'fp-ts/function';
import deepmerge from 'deepmerge';
import { generators } from '../generators/generators';

export const generateConfigTheme = <T extends FullConfigTheme>(configTheme: T): RE.ReaderEither<ThemeEnv, Exception, GeneratedConfigTheme<T>> => {
  return pipe(
    generators,
    R.mapWithIndex((key, generator) => generator(configTheme[key as keyof typeof configTheme] as any)),
    R.sequence(RE.Applicative),
    RE.map(
      flow(
        toValues,
        A.reduce({} as GeneratedConfigTheme, (acc, cur) => deepmerge(acc, cur))
      )
    )
  );
};
