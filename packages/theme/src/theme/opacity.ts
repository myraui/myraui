import { ThemedSemanticRecord } from '../theme.types';

export type SemanticOpacity = 'hover' | 'disabled';

export const opacity: ThemedSemanticRecord<SemanticOpacity, string> = {
  light: {
    hover: '0.8',
    disabled: '0.5',
  },
  dark: {
    hover: '0.9',
    disabled: '0.5',
  },
};
