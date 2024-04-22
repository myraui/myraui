import { ThemedTokens } from '../theme.types';

export type ThemeRadius = 'none' | 'small' | 'medium' | 'large' | 'full';

export const radius: ThemedTokens<ThemeRadius, string> = {
  light: {
    none: '0',
    small: '8px',
    medium: '12px',
    large: '14px',
    full: '9999px',
  },
  dark: {
    none: '0',
    small: '8px',
    medium: '12px',
    large: '14px',
    full: '9999px',
  },
};
