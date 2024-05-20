import { DefaultThemeTokens } from '../theme.types';

export type ThemeKeyframes = 'spin' | 'dots-loader' | 'bars-loader';

export const keyframes: DefaultThemeTokens<'keyframes'> = {
  spin: {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
  'dots-loader': {
    '0%': { transform: 'scale(0)' },
    '50%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(0)' },
  },
  'bars-loader': {
    '0%': { transform: 'scaleY(1)' },
    '50%': { transform: 'scaleY(0.5)' },
    '100%': { transform: 'scaleY(1)' },
  },
};
