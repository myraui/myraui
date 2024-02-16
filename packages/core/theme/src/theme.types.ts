import { ColorMode, ColorScale, FlatMyraColor, MyraColor } from '@myra-ui/colors';

export type Theme = ColorMode & string;

export type BaseTheme = 'light';

export type ThemeRecord<Value> = Partial<Record<`_${Theme}`, Value>> & Record<`_${BaseTheme}`, Value>;

export type ThemedValue<Value> = Value extends string | number ? Value | ThemeRecord<Value> : ThemeRecord<Value>;

export type ColorValue = (ColorScale | MyraColor) | string;

/**
 * Nested record of semantic tokens
 *
 * Depth: 5
 */
export type SemanticRecord<Value> = Record<
  string,
  Value | Record<string, Value | Record<string, Value | Record<string, Value | Record<string, Value>>>>
>;

export type SemanticTokens = {
  colors?: SemanticRecord<(MyraColor | FlatMyraColor) | string>;
};

export type ComponentTheme = {
  [K in keyof SemanticTokens]?: SemanticRecord<SemanticTokens[K] extends SemanticRecord<infer Value> ? ThemedValue<Value> : never>;
};

export type ResolvedSemanticTokens = Partial<Record<keyof SemanticTokens, Record<string, string>>>;

export type ConfigTheme = {
  extend?: ColorMode;
  colors?: Partial<Record<MyraColor & string, ColorValue>>;
};

export type ConfigThemes = Record<string, ConfigTheme>;
