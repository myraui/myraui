import { ColorMode, ColorScale, FlatMyraColor, MyraColor } from './colors';
import { DefaultSemanticColors } from './theme/colors';
import { CSSVariable } from './utils';

export type ThemeEnv = {
  prefix: string;
};

export type Theme = ColorMode | string;

export type BaseTheme = 'light';

export type ThemeRecord<Value> = Partial<Record<`_${Theme}`, Value>> & Record<`_${BaseTheme}`, Value>;

export type ThemedValue<Value> = Value | ThemeRecord<Value>;

export type ColorValue = (ColorScale | MyraColor) | string;

/**
 * Nested record of semantic tokens
 *
 * Depth: 5
 */
export type SemanticRecord<
  Value,
  K1 extends string = string,
  K2 extends string = string,
  K3 extends string = string,
  K4 extends string = string,
  K5 extends string = string
> = Record<K1 | string, Value | Record<K2 | string, Value | Record<K3 | string, Value | Record<K4 | string, Value | Record<K5 | string, Value>>>>>;

export type SemanticTokens = {
  colors: SemanticRecord<(MyraColor | FlatMyraColor) | string, DefaultSemanticColors>;
};

export type FlatSemanticTokens<S extends SemanticTokens> = {
  [K in keyof S]: S[K] extends SemanticRecord<infer Value> ? Record<string, Value> : never;
};

export type ExtractSemanticRecord<K extends keyof Required<SemanticTokens>> = Required<SemanticTokens>[K] extends SemanticRecord<
  infer Value,
  infer K1,
  infer K2,
  infer K3,
  infer K4,
  infer K5
>
  ? SemanticRecord<Value, K1, K2, K3, K4, K5>
  : never;

export type ComponentTheme = {
  [K in keyof SemanticTokens]?: ExtractSemanticRecord<K>;
};

export type ResolvedSemanticTokens = {
  [K in keyof SemanticTokens]: Array<CSSVariable>;
};

export type ConfigTheme = {
  extend?: ColorMode;
  colors?: Partial<Record<MyraColor & string, ColorValue>>;
  semanticTokens?: SemanticTokens;
};

export type ConfigThemes = Record<string, ConfigTheme>;
