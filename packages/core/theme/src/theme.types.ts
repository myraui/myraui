import { Color, ColorMode, ColorScale } from '@myra-ui/colors';
import { RecordKey } from '@myra-ui/shared-utils';
import { SemanticColors } from './semantic/colors';

export type Theme = ColorMode & string;

export type DefaultVariant = 'DEFAULT';

export type VariantRecord<Variant extends RecordKey, Value> = Partial<Record<Variant | DefaultVariant, Value>>;

export type VariantValue<Variant extends RecordKey, Value> = Value extends string | number
  ? Value | VariantRecord<Variant, Value>
  : VariantRecord<Variant, Value>;

export type ResolvedVariantValue<V extends VariantValue<never, never>> = V extends VariantValue<infer Variant, infer Value>
  ? VariantRecord<Variant, Value>
  : never;

export type ThemedValue<Value> = VariantValue<Theme, Value>;

export type FullSemanticRecord<K extends RecordKey, Value = string> = ThemedValue<Record<K, Value>>;

export type SemanticRecord<K extends RecordKey, Value = string> = ThemedValue<Partial<Record<K, Value>>>;

export type ResolvedSemanticRecord<K extends RecordKey, Value> = VariantRecord<Theme, Partial<Record<K, Value>>>;

export type ColorValue = ColorScale | Color;

export type ThemeColors = Partial<Record<Color | SemanticColors, ColorValue>>;

export type ConfigTheme = {
  colorMode?: ColorMode;
  colors?: ThemeColors;
};

export type ConfigThemes = Record<string, ConfigTheme>;
