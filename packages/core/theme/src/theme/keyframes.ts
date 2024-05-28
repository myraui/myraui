import { DefaultThemeTokens } from '../theme.types';

export type ThemeKeyframes = 'spin' | 'pulse' | 'bars-loader';

export const keyframes: DefaultThemeTokens<'keyframes'> = {
  spin: {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
  pulse: {
    '0%': { opacity: '0.3' },
    '50%': { opacity: '1' },
    '100%': { opacity: '0.3' },
  },
  'bars-loader': {
    '0%': { transform: 'scaleY(1)' },
    '50%': { transform: 'scaleY(0.5)' },
    '100%': { transform: 'scaleY(1)' },
  },
};
