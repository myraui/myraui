import { ThemedTokens } from '../theme.types';
import { SpacingScaleKeys } from '../generators/spacing-unit-generator';

export type ThemeWidth = 'divider';

export const width: ThemedTokens<ThemeWidth, string | SpacingScaleKeys> = {
  light: {
    divider: '1px',
  },
  dark: {
    divider: '1px',
  },
};
