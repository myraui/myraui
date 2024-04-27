import { ThemeEnv, ThemeTokens } from '../theme.types';
import { CSSVariable } from '../utils/css-variables';
import * as RE from 'fp-ts/ReaderEither';
import { Dict, Exception, StringOrNumber } from '@myraui/utils';
import { colorResolver } from './color-resolver';
import { fontSizeResolver } from './font-size-resolver';

export interface ResolvedValue<Value> {
  value: Value;
  utilities?: ReadonlyArray<CSSVariable>;
}

export type ResolvedValues<Value> = Dict<ResolvedValue<Value>> | ResolvedValue<any>;

export type Resolver<Value = any, Env extends ThemeEnv = ThemeEnv> = (
  key: string,
  value: StringOrNumber
) => RE.ReaderEither<Env, Exception, ResolvedValues<Value>>;

type Resolvers = Partial<Record<keyof ThemeTokens, Resolver>>;

export const resolvers: Resolvers = {
  colors: colorResolver,
  fontSize: fontSizeResolver,
};
