import { ThemedThemeTokens } from '../theme.types';

export type ThemeOpacity = 'hover' | 'disabled';

export const opacity: ThemedThemeTokens<'opacity'> = {
  light: {
    hover: '0.8',
    disabled: '0.5',
  },
  dark: {
    hover: '0.9',
    disabled: '0.5',
  },
};
