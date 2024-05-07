import { DefaultThemeTokens } from '../theme.types';

export type ThemeOpacity = 'hover' | 'disabled';

export const opacity: DefaultThemeTokens<'opacity'> = {
  hover: '0.8',
  disabled: '0.5',
};
