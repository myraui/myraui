import { ColorMode, ConfigThemes, ResolvedTokenValues, ThemeEnv, ThemeTokens } from '@myraui/theme';
import { Dict } from '@myraui/shared-utils';

export type MyraUIPluginConfig = {
  prefix?: string;
  themes?: ConfigThemes;
  defaultExtendTheme?: ColorMode;
};

export type ResolvedVariant = {
  name: string;
  definition: string[];
};

export type PluginEnv = ThemeEnv;

export interface ResolvedThemes {
  variants: ResolvedVariant[];
  baseStyles: Dict;
  utilities: Dict;
  tokens: ResolvedTokenValues<any>;
}
