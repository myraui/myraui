import { ColorMode, ColorScale, MyraColor } from './colors';
import { ThemeColors } from './theme/colors';
import { Assign, DeepRecordCopy, RecordKey } from '@myraui/utils';
import { ThemeFontSize } from './theme/fontSize';
import { ThemeLineHeight } from './theme/lineHeight';
import { ThemeRadius } from './theme/radius';
import { ThemeBorderWidth } from './theme/borderWidth';
import { ThemeBoxShadow } from './theme/boxShadow';
import { ThemeOpacity } from './theme/opacity';
import { ThemeHeight } from './theme/height';
import { ThemeWidth } from './theme/width';
import { ResolvedValue } from './resolvers';
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

export type WithDefault<K extends RecordKey, V> = Assign<Record<K, V>, { DEFAULT?: K | RecordKey }> | Record<RecordKey, V>;

export type ThemeTokensRecord<
  Value,
  K1 extends RecordKey = RecordKey,
  K2 extends RecordKey = RecordKey,
  K3 extends RecordKey = RecordKey,
  K4 extends RecordKey = RecordKey
> = WithDefault<K1, Value | WithDefault<K2, Value | WithDefault<K3, Value | WithDefault<K4, Value>>>>;

export type ThemeTokens = {
  colors: ThemeTokensRecord<string, ThemeColors | MyraColor, keyof ColorScale>;
  fontSize: ThemeTokensRecord<string, ThemeFontSize>;
  lineHeight: ThemeTokensRecord<string, ThemeLineHeight>;
  radius: ThemeTokensRecord<string, ThemeRadius>;
  borderWidth: ThemeTokensRecord<string, ThemeBorderWidth>;
  boxShadow: ThemeTokensRecord<string, ThemeBoxShadow>;
  opacity: ThemeTokensRecord<string, ThemeOpacity>;
  width: ThemeTokensRecord<string, ThemeWidth>;
  height: ThemeTokensRecord<string, ThemeHeight>;
  minWidth: ThemeTokensRecord<string>;
  minHeight: ThemeTokensRecord<string>;
  spacing: ThemeTokensRecord<string>;
};

export type PartialThemeTokens = Partial<ThemeTokens>;

export type ComponentTheme = {
  [K in keyof ThemeTokens]?: ThemeTokensRecord<ThemeTokens[K] extends ThemeTokensRecord<infer V> ? ThemedValue<V> : ThemedValue<unknown>>;
};

export type ThemedThemeTokens<Key extends keyof ThemeTokens> = Record<Theme, Partial<ThemeTokens[Key]>>;

export type GeneratedThemeToken<D = unknown> = D extends ThemeTokensRecord<any> ? DeepRecordCopy<D, string> : ThemeTokensRecord<string>;

export type ResolvedThemeToken<D = unknown> = D extends ThemeTokensRecord<any>
  ? DeepRecordCopy<D, ResolvedValue<any>>
  : ThemeTokensRecord<ResolvedValue<any>>;

export type BuiltThemeToken<D = unknown> = D extends ThemeTokensRecord<any> ? DeepRecordCopy<D> : ThemeTokensRecord<any>;

export type ResolvedSemanticTokens = Record<keyof ThemeTokens, ResolvedThemeToken>;

export interface ConfigTheme extends PartialThemeTokens {
  extend?: ColorMode;
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
  [K in keyof ThemeTokens]: ResolvedThemeToken<T[K]>;
};

export type ResolvedTokenValues<T extends ResolvedConfigTheme> = {
  [K in keyof ThemeTokens]: BuiltThemeToken<T[K]>;
};

export interface BuiltConfigTheme<T extends ResolvedConfigTheme> {
  colorMode: ColorMode;
  tokens: ResolvedTokenValues<T>;
  utilities: Array<CSSVariable>;
}

export type ConfigThemes = Record<string, ConfigTheme>;
