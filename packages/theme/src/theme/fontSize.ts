import { ThemedThemeTokens } from '../theme.types';

export type ThemeFontSize = 'tiny' | 'small' | 'medium' | 'large' | 'huge';

export const fontSize: ThemedThemeTokens<'fontSize'> = {
  light: {
    tiny: '0.75rem',
    small: '0.875rem',
    medium: '1rem',
    large: '1.125rem',
    huge: '1.25rem',
    DEFAULT: 'medium',
  },
  dark: {
    tiny: '0.75rem',
    small: '0.875rem',
    medium: '1rem',
    large: '1.125rem',
    huge: '1.25rem',
    DEFAULT: 'medium',
  },
};
