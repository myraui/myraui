import { ThemedThemeTokens } from '../theme.types';

export type ThemeRadius = 'small' | 'medium' | 'large' | 'full';

export const radius: ThemedThemeTokens<'radius'> = {
  light: {
    small: '8px',
    medium: '12px',
    large: '14px',
    full: '9999px',
    DEFAULT: 'medium',
  },
  dark: {
    small: '8px',
    medium: '12px',
    large: '14px',
    full: '9999px',
    DEFAULT: 'medium',
  },
};
