import { ThemedTokens } from '../theme.types';

export type ThemeLineHeight = 'tiny' | 'small' | 'medium' | 'large' | 'huge';

export const lineHeight: ThemedTokens<ThemeLineHeight, string> = {
  light: {
    tiny: '1rem',
    small: '1.25rem',
    medium: '1.5rem',
    large: '1.75rem',
    huge: '2rem',
  },
  dark: {
    tiny: '1rem',
    small: '1.25rem',
    medium: '1.5rem',
    large: '1.75rem',
    huge: '2rem',
  },
};
