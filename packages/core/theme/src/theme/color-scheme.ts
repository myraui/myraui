import { DefaultThemeTokens } from '../theme.types';

export type ThemeColorScheme = 'background' | 'text';

export const colorScheme: DefaultThemeTokens<'colorScheme'> = {
  background: 'primary',
  text: 'foreground',
};
