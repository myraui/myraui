import { Dict } from '@myra-ui/utilities';
import { ColorMode } from '../colors';
import { ConfigThemes, CSSVariables, ThemeEnv } from '../theme';

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
  variables: CSSVariables;
  colors: Dict<ColorResolver>;
  colorMode: ColorMode;
};

export type ResolvedThemes = {
  variants: ResolvedVariant[];
  utilities: Record<string, Dict>;
  colors: Dict<ColorResolver>;
  baseStyles: Dict;
};
