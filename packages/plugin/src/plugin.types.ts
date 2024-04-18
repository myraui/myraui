import { ColorMode, ConfigThemes, ResolvedSemanticRecord, SemanticTokens, ThemeEnv } from '@myraui/theme';
import { Dict } from '@myraui/utils';

export type MyraUIPluginConfig = {
  prefix?: string;
  themes?: ConfigThemes;
  defaultExtendTheme?: ColorMode;
};

export type ResolvedVariant = {
  name: string;
  definition: string[];
};

export type PluginEnv = ThemeEnv & {
  defaultExtendTheme: ColorMode;
};

export type ResolvedThemeValueKeys = keyof SemanticTokens | 'spacing';

export type ResolvedThemeValues = Record<ResolvedThemeValueKeys, ResolvedSemanticRecord>;

export type ResolvedThemeConfig = {
  themeName: string;
  colorMode: ColorMode;
  values: ResolvedThemeValues;
};

export type ResolvedThemes = {
  variants: ResolvedVariant[];
  utilities: Record<string, Dict<string>>;
  values: Record<ResolvedThemeValueKeys, Dict<unknown>>;
  baseStyles: Dict;
};
