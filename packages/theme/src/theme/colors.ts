import { ThemedThemeTokens } from '../theme.types';

export type ThemeColors = 'background' | 'foreground' | 'focus' | 'divider' | 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export const colors: ThemedThemeTokens<'colors'> = {
  light: {
    background: 'gray.1',
    foreground: 'gray.12',
    focus: 'blue.8',
    divider: 'black.2',
    default: 'slate',
    primary: 'blue',
    secondary: 'purple',
    success: 'green',
    warning: 'yellow',
    danger: 'red',
  },
  dark: {
    background: 'gray.1',
    foreground: 'gray.12',
    focus: 'blue.8',
    divider: 'white.2',
    default: 'slate',
    primary: 'blue',
    secondary: 'purple',
    success: 'green',
    warning: 'yellow',
    danger: 'red',
  },
};
