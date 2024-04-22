import { ColorMode, ColorPalette, ColorScale, FlatMyraColor, MyraColor } from './colors';
import { ThemeColors } from './theme/colors';
import { DeepRecord, DeepRecordCopy, RecordKey } from '@myraui/utils';
import { ThemeFontSize } from './theme/fontSize';
import { ThemeLineHeight } from './theme/lineHeight';
import { ThemeRadius } from './theme/radius';
import { ThemeBorderWidth } from './theme/borderWidth';
import { ThemeBoxShadow } from './theme/boxShadow';
import { ThemeOpacity } from './theme/opacity';
import { ThemeHeight } from './theme/height';
import { ThemeWidth } from './theme/width';
import { ResolvedValue } from './resolvers';
import { SpacingScaleKeys } from './generators/spacing-unit-generator';
import { CSSVariable } from './utils';

export type ThemeEnv = {
  prefix: string;
  defaultExtendTheme: ColorMode;
};

export type Theme = ColorMode | string;

export type BaseTheme = 'light';

export type ThemeRecord<Value> = Partial<Record<`_${Theme}`, Value>> & Record<`_${BaseTheme}`, Value>;

export type ThemedValue<Value> = Value | ThemeRecord<Value>;

export type ColorValue = (ColorScale | MyraColor) | string;

export type ThemeTokens = {
  colors: DeepRecord<(MyraColor | FlatMyraColor) | string, ThemeColors>;
  fontSize: DeepRecord<string, ThemeFontSize>;
  lineHeight: DeepRecord<string, ThemeLineHeight>;
  radius: DeepRecord<string, ThemeRadius>;
  borderWidth: DeepRecord<string, ThemeBorderWidth>;
  boxShadow: DeepRecord<string, ThemeBoxShadow>;
  opacity: DeepRecord<string, ThemeOpacity>;
  width: DeepRecord<string | SpacingScaleKeys, ThemeWidth>;
  height: DeepRecord<string | SpacingScaleKeys, ThemeHeight>;
  minWidth: DeepRecord<string | SpacingScaleKeys>;
  minHeight: DeepRecord<string | SpacingScaleKeys>;
  spacing: DeepRecord<string | SpacingScaleKeys>;
};

export type PartialThemeTokens = Partial<ThemeTokens>;

export type ComponentTheme = {
  [K in keyof ThemeTokens]?: ThemeTokens[K] extends DeepRecord<infer V> ? DeepRecord<ThemedValue<V>> : ThemeTokens[K];
};

export type ThemedTokens<Key extends RecordKey, Value> = Record<Theme, DeepRecord<Value, Key>>;

export type GeneratedThemeToken<D = unknown> = D extends DeepRecord<any> ? DeepRecordCopy<D, string> : DeepRecord<string>;

export type ResolvedThemeToken<D = unknown> = D extends DeepRecord<any> ? DeepRecordCopy<D, ResolvedValue<any>> : DeepRecord<ResolvedValue<any>>;

export type BuiltThemeToken<D = unknown> = D extends DeepRecord<any> ? DeepRecordCopy<D, any> : DeepRecord<any>;

export type ResolvedSemanticTokens = Record<keyof ThemeTokens, ResolvedThemeToken<any>>;

export interface ConfigTheme extends PartialThemeTokens {
  extend?: ColorMode;
  colorPalette?: ColorPalette<MyraColor | string>;
  /**
   * The unit token that defines a consistent spacing scale across the components.
   * @default 4 (px)
   */
  spacingUnit?: number;
}

export type FullConfigTheme<C extends ConfigTheme = ConfigTheme> = {
  [K in keyof Required<ConfigTheme>]: Exclude<Required<C>[K], undefined>;
};

export type GeneratedConfigTheme<T extends FullConfigTheme<any> = FullConfigTheme<any>> = {
  [K in keyof ThemeTokens]: GeneratedThemeToken<T[K]>;
};

export type ResolvedConfigTheme<T extends GeneratedConfigTheme = GeneratedConfigTheme> = {
  [K in keyof T]: ResolvedThemeToken<T[K]>;
};

export type ResolvedTokenValues<T extends ResolvedConfigTheme> = {
  [K in keyof T]: BuiltThemeToken<T[K]>;
};

export interface BuiltConfigTheme<T extends ResolvedConfigTheme> {
  colorMode: ColorMode;
  tokens: ResolvedTokenValues<T>;
  utilities: Array<CSSVariable>;
}

export type ConfigThemes = Record<string, ConfigTheme>;
