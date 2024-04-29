import { ThemedThemeTokens } from '../theme.types';

export const boxShadow: ThemedThemeTokens<'boxShadow'> = {
  light: {
    tiny: '0px 0px 3px 0px rgb(0 0 0 / 0.01), 0px 1px 6px 0px rgb(0 0 0 / 0.04), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
    small: '0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
    medium: '0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
    large: '0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
    huge: '0px 0px 40px 0px rgb(0 0 0 / 0.05), 0px 40px 80px 0px rgb(0 0 0 / 0.16), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
    DEFAULT: 'medium',
  },
  dark: {
    tiny: '0px 0px 3px 0px rgb(0 0 0 / 0.03), 0px 1px 6px 0px rgb(0 0 0 / 0.1), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
    small: '0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
    medium: '0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
    large: '0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
    huge: '0px 0px 40px 0px rgb(0 0 0 / 0.08), 0px 40px 80px 0px rgb(0 0 0 / 0.32), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
    DEFAULT: 'medium',
  },
};