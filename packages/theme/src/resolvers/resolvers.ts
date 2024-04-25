import { ThemeEnv, ThemeTokens } from '../theme.types';
import { CSSVariable } from '../utils';
import * as RE from 'fp-ts/ReaderEither';
import { Exception } from '@myraui/utils';
import { colorResolver } from './color-resolver';
import { genericResolver } from './generic-resolver';

export interface ResolvedValue<Value> {
  value: Value;
  utilities?: ReadonlyArray<CSSVariable>;
}

export type Resolver<Value = any, Env extends ThemeEnv = ThemeEnv> = (
  key: string,
  value: string | CSSVariable
) => RE.ReaderEither<Env, Exception, ResolvedValue<Value>>;

type Resolvers = Record<keyof ThemeTokens, Resolver>;

export const resolvers: Resolvers = {
  colors: colorResolver,
  opacity: genericResolver('opacity'),
  fontSize: genericResolver('fontSize'),
  lineHeight: genericResolver('lineHeight'),
  width: genericResolver('width'),
  height: genericResolver('height'),
  radius: genericResolver('radius'),
  boxShadow: genericResolver('boxShadow'),
  borderWidth: genericResolver('borderWidth'),
  minWidth: genericResolver('minWidth'),
  minHeight: genericResolver('minHeight'),
  spacing: genericResolver('spacing'),
};
