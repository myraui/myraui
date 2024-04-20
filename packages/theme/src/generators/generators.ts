import { Exception } from '@myraui/utils';
import { ConfigTheme, GeneratedConfigTheme, ThemeEnv } from '../theme.types';
import * as RE from 'fp-ts/ReaderEither';

export type ConfigThemeGenerator<K extends keyof Required<ConfigTheme>> = (
  value: Required<ConfigTheme>[K]
) => RE.ReaderEither<ThemeEnv, Exception, Partial<GeneratedConfigTheme>>;
