import { ThemedTokens } from '../theme.types';

export type ThemeFontSize = 'tiny' | 'small' | 'medium' | 'large' | 'huge';

export const fontSize: ThemedTokens<ThemeFontSize, string> = {
  light: {
    tiny: '0.75rem',
    small: '0.875rem',
    medium: '1rem',
    large: '1.125rem',
    huge: '1.25rem',
  },
  dark: {
    tiny: '0.75rem',
    small: '0.875rem',
    medium: '1rem',
    large: '1.125rem',
    huge: '1.25rem',
  },
};
