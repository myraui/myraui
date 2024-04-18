import { ColorMode, ColorPalette, ColorScale, FlatMyraColor, MyraColor } from './colors';
import { SemanticColors } from './theme/colors';
import { Dict, RecordKey } from '@myraui/utils';
import { SemanticFontSize } from './theme/fontSize';
import { SemanticLineHeight } from './theme/lineHeight';
import { SemanticRadius } from './theme/radius';
import { SemanticBorderWidth } from './theme/borderWidth';
import { SemanticBoxShadow } from './theme/boxShadow';
import { SemanticOpacity } from './theme/opacity';
import { SpacingScaleKeys } from './layout/spacing-scale';
import { SemanticHeight } from './theme/height';
import { SemanticWidth } from './theme/width';
import { ResolvedValue } from './resolvers/resolvers';

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
  K1 extends RecordKey = RecordKey,
  K2 extends RecordKey = RecordKey,
  K3 extends RecordKey = RecordKey,
  K4 extends RecordKey = RecordKey,
  K5 extends RecordKey = RecordKey
> = Record<
  K1 | RecordKey,
  Value | Record<K2 | RecordKey, Value | Record<K3 | RecordKey, Value | Record<K4 | RecordKey, Value | Record<K5 | RecordKey, Value>>>>
>;

export type SemanticTokens = {
  colors: SemanticRecord<(MyraColor | FlatMyraColor) | string, SemanticColors>;
  fontSize: SemanticRecord<string, SemanticFontSize>;
  lineHeight: SemanticRecord<string, SemanticLineHeight>;
  radius: SemanticRecord<string, SemanticRadius>;
  borderWidth: SemanticRecord<string, SemanticBorderWidth>;
  boxShadow: SemanticRecord<string, SemanticBoxShadow>;
  opacity: SemanticRecord<string, SemanticOpacity>;
  width: SemanticRecord<string | SpacingScaleKeys, SemanticWidth>;
  height: SemanticRecord<string | SpacingScaleKeys, SemanticHeight>;
  minWidth: SemanticRecord<string | SpacingScaleKeys>;
  minHeight: SemanticRecord<string | SpacingScaleKeys>;
};

export type PartialSemanticTokens = Partial<SemanticTokens>;

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

export type ThemedSemanticRecord<Key extends RecordKey, Value> = Record<Theme, SemanticRecord<Value, Key>>;

export type ResolvedSemanticRecord = Dict<ResolvedValue<unknown>>;

export type ResolvedSemanticTokens = Record<keyof SemanticTokens, ResolvedSemanticRecord>;

export interface ConfigTheme extends PartialSemanticTokens {
  extend?: ColorMode;
  colorPalette?: ColorPalette<MyraColor | string>;
  /**
   * The unit token that defines a consistent spacing scale across the components.
   * @default 4 (px)
   */
  spacingUnit?: number;
}

export type ConfigThemes = Record<string, ConfigTheme>;
