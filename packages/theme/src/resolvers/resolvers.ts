import { ThemeEnv, ThemeTokens } from '../theme.types';
import { CSSVariable } from '../utils';
import * as RE from 'fp-ts/ReaderEither';
import { Exception } from '@myraui/utils';
import { colorResolver } from './color-resolver';

export interface ResolvedValue<Value> {
  value: Value;
  utilities?: ReadonlyArray<CSSVariable>;
}

export type Resolver<Value = string, Env extends ThemeEnv = ThemeEnv> = (
  key: string,
  value: string
) => RE.ReaderEither<Env, Exception, ResolvedValue<Value>>;

type Resolvers = Record<keyof ThemeTokens, Resolver>;

export const resolvers: Resolvers = {
  colors: colorResolver,
} as any;
