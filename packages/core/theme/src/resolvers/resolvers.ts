import { ThemeEnv, ThemeTokens } from '../theme.types';
import * as RE from 'fp-ts/ReaderEither';
import { Dict, Exception, StringOrNumber } from '@myraui/shared-utils';
import { colorResolver } from './color-resolver';
import { fontSizeResolver } from './font-size-resolver';
import { rawValueResolver } from './raw-value-resolver';

interface RecursiveKeyValuePair<K extends keyof any = string, V = string> {
  [key: string]: V | RecursiveKeyValuePair<K, V>;
}

type CSSRuleObject = RecursiveKeyValuePair<string, null | string | string[]>;

export type Utilities = CSSRuleObject;

export interface ResolvedValue<Value> {
  value: Value;
  utilities?: Utilities;
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
  keyframes: rawValueResolver,
  animation: rawValueResolver,
};
