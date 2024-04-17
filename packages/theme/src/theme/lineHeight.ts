import { ThemedSemanticRecord } from '../theme.types';

export type SemanticLineHeight = 'tiny' | 'small' | 'medium' | 'large' | 'huge';

export const lineHeight: ThemedSemanticRecord<SemanticLineHeight, string> = {
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
