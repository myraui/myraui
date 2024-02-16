import { ColorMode, ColorScale, ColorShade, FlatMyraColor, MyraColor } from '@myra-ui/colors';
import { RecordKey } from '@myra-ui/shared-utils';

export type Theme = ColorMode & string;

export type BaseTheme = 'light';

export type VariantRecord<Variant extends RecordKey, Value> = Partial<Record<Variant | BaseTheme, Value>>;

export type VariantValue<Variant extends RecordKey, Value> = Value extends string | number
  ? Value | VariantRecord<Variant, Value>
  : VariantRecord<Variant, Value>;

export type ThemedValue<Value> = VariantValue<Theme, Value>;

export type ThemedRecord<K extends RecordKey, Value = string> = ThemedValue<Partial<Record<K, Value>>>;

export type ColorValue = (ColorScale | MyraColor) | string;

export type SemanticValue<Value extends string | number> = Value | (Partial<Record<Theme, Value>> & Record<BaseTheme, Value>);

export type SemanticRecord<Value extends string | number> = Record<string, SemanticValue<Value>>;

export type SemanticTokens = {
  colors?: SemanticRecord<(MyraColor | FlatMyraColor) | string>;
};

export type ResolvedSemanticTokens = Partial<Record<Theme, Partial<Record<keyof SemanticTokens, Record<string, string>>>>>;

export type ConfigTheme = {
  extend?: ColorMode;
  colors?: Partial<Record<MyraColor & string, ColorValue>>;
};

export type ConfigThemes = Record<string, ConfigTheme>;
