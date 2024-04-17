import { ThemedSemanticRecord } from '../theme.types';
import { SpacingScaleKeys } from '../layout/spacing-scale';

export type SemanticHeight = 'divider';

export const height: ThemedSemanticRecord<SemanticHeight, string | SpacingScaleKeys> = {
  light: {
    divider: '1px',
  },
  dark: {
    divider: '1px',
  },
};
