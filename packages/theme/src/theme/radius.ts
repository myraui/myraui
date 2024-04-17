import { ThemedSemanticRecord } from '../theme.types';

export type SemanticRadius = 'none' | 'small' | 'medium' | 'large' | 'full';

export const radius: ThemedSemanticRecord<SemanticRadius, string> = {
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
