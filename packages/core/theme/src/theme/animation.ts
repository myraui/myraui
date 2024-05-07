import { DefaultThemeTokens } from '../theme.types';

export type ThemeAnimation =
  | 'spin-linear'
  | 'spin-ease'
  | 'dots-loader-1'
  | 'dots-loader-2'
  | 'dots-loader-3'
  | 'bars-loader-1'
  | 'bars-loader-2'
  | 'bars-loader-3'
  | 'bars-loader-4'
  | 'bars-loader-5';

export const animation: DefaultThemeTokens<'animation'> = {
  'spin-linear': 'spin 1.2s linear infinite',
  'spin-ease': 'spin 1.2s ease infinite',
  'dots-loader-1': 'dots-loader 1s linear infinite both',
  'dots-loader-2': 'dots-loader 1s linear 0.3s infinite both',
  'dots-loader-3': 'dots-loader 1s linear 0.6s infinite both',
  'bars-loader-1': 'bars-loader 0.7s linear infinite both',
  'bars-loader-2': 'bars-loader 0.7s linear 0.2s infinite both',
  'bars-loader-3': 'bars-loader 0.7s linear 0.3s infinite both',
  'bars-loader-4': 'bars-loader 0.7s linear 0.4s infinite both',
  'bars-loader-5': 'bars-loader 0.7s linear 0.5s infinite both',
};
