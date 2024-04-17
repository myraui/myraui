import { ThemedSemanticRecord } from '../theme.types';

export type SemanticBorderWidth = 'none' | 'small' | 'medium' | 'large' | 'huge';

export const borderWidth: ThemedSemanticRecord<SemanticBorderWidth, string> = {
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
