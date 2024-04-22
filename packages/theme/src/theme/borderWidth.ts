import { ThemedTokens } from '../theme.types';

export type ThemeBorderWidth = 'none' | 'small' | 'medium' | 'large' | 'huge';

export const borderWidth: ThemedTokens<ThemeBorderWidth, string> = {
  light: {
    none: '0',
    small: '1px',
    medium: '2px',
    large: '3px',
    huge: '4px',
  },
  dark: {
    none: '0',
    small: '1px',
    medium: '2px',
    large: '3px',
    huge: '4px',
  },
};
