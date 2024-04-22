import { ThemedTokens } from '../theme.types';
import { SpacingScaleKeys } from '../generators/spacing-unit-generator';

export type ThemeHeight = 'divider';

export const height: ThemedTokens<ThemeHeight, string | SpacingScaleKeys> = {
  light: {
    divider: '1px',
  },
  dark: {
    divider: '1px',
  },
};
