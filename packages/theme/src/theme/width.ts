import { ThemedSemanticRecord } from '../theme.types';
import { SpacingScaleKeys } from '../layout/spacing-scale';

export type SemanticWidth = 'divider';

export const width: ThemedSemanticRecord<SemanticWidth, string | SpacingScaleKeys> = {
  light: {
    divider: '1px',
  },
  dark: {
    divider: '1px',
  },
};
