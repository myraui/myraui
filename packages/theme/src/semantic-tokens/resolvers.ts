import { SemanticTokens, ThemeEnv } from '../theme.types';
import { CSSVariable } from '../utils';
import * as RE from 'fp-ts/ReaderEither';
import { Exception } from '@myraui/utils';
import { colorResolver } from './color-resolver';

type Resolver = (tokenKey: string, tokenValue: string) => RE.ReaderEither<ThemeEnv, Exception, ReadonlyArray<CSSVariable>>;

type Resolvers = Record<keyof SemanticTokens, Resolver>;

export const resolvers: Resolvers = {
  colors: colorResolver,
};
