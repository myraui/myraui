import { ColorMode, ConfigThemes, CSSVariable, ThemeEnv } from '@myraui/theme';
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

export type ColorResolver = ({ opacityValue, opacityVariable }: { opacityValue: string; opacityVariable: string }) => string;

export type ResolvedThemeConfig = {
  themeName: string;
  variables: CSSVariable[];
  colors: Dict<ColorResolver>;
  colorMode: ColorMode;
};

export type ResolvedThemes = {
  variants: ResolvedVariant[];
  utilities: Record<string, Dict<string>>;
  colors: Dict<ColorResolver>;
  baseStyles: Dict;
};
