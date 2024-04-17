import { ThemedSemanticRecord } from '../theme.types';

export type SemanticFontSize = 'tiny' | 'small' | 'medium' | 'large' | 'huge';

export const fontSize: ThemedSemanticRecord<SemanticFontSize, string> = {
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
