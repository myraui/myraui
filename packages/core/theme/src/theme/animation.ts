import { DefaultThemeTokens } from '../theme.types';

export type ThemeAnimation = 'spin-linear' | 'spin-ease';

export const animation: DefaultThemeTokens<'animation'> = {
  'spin-linear': 'spin 0.8s linear infinite',
  'spin-ease': 'spin 0.8s ease infinite',
};
