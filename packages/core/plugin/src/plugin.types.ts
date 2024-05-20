import { ColorMode, ConfigThemes, ResolvedTokenValues, ThemeEnv, ThemeVariant } from '@myraui/theme';
import { Dict } from '@myraui/shared-utils';

export type MyraUIPluginConfig = {
  prefix?: string;
  themes?: ConfigThemes;
  defaultExtendTheme?: ColorMode;
};

export type PluginEnv = ThemeEnv;

export interface ResolvedThemes {
  variants: ThemeVariant[];
  baseStyles: Dict;
  utilities: Dict;
  tokens: ResolvedTokenValues<any>;
  themes: Array<string>;
}
