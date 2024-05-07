import { DefaultThemeTokens } from '../theme.types';

export type ThemeKeyframes = 'spin';

export const keyframes: DefaultThemeTokens<'keyframes'> = {
  spin: {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
};
