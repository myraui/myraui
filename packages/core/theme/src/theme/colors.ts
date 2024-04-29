import { ThemedThemeTokens } from '../theme.types';
import { getByColorMode } from '../colors/utils';

export type ThemeColors = 'background' | 'foreground' | 'focus' | 'divider' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export const colors: ThemedThemeTokens<'colors'> = {
  light: {
    ...getByColorMode('light'),
    background: 'gray.1',
    foreground: 'gray.12',
    focus: 'blue.8',
    divider: 'black.2',
    primary: 'indigo',
    secondary: 'purple',
    success: 'green',
    warning: 'yellow',
    danger: 'red',
  },
  dark: {
    ...getByColorMode('dark'),
    background: 'gray.1',
    foreground: 'gray.12',
    focus: 'blue.8',
    divider: 'white.2',
    primary: 'indigo',
    secondary: 'purple',
    success: 'green',
    warning: 'yellow',
    danger: 'red',
  },
};
