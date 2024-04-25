import { ThemedThemeTokens } from '../theme.types';

export type ThemeBorderWidth = 'small' | 'medium' | 'large' | 'huge';

export const borderWidth: ThemedThemeTokens<'borderWidth'> = {
  light: {
    small: '1px',
    medium: '2px',
    large: '3px',
    huge: '4px',
    DEFAULT: 'medium',
  },
  dark: {
    small: '1px',
    medium: '2px',
    large: '3px',
    huge: '4px',
    DEFAULT: 'medium',
  },
};
