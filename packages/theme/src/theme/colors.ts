import { ThemedThemeTokens } from '../theme.types';
import { getByColorMode } from '../colors/utils';

export type ThemeColors = 'background' | 'foreground' | 'focus' | 'divider' | 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export const colors: ThemedThemeTokens<'colors'> = {
  light: {
    ...getByColorMode('light'),
    background: 'colors.gray.1',
    foreground: 'colors.gray.12',
    focus: 'colors.blue.8',
    divider: 'colors.black.2',
    default: 'colors.slate',
    primary: 'colors.blue',
    secondary: 'colors.purple',
    success: 'colors.green',
    warning: 'colors.yellow',
    danger: 'colors.red',
  },
  dark: {
    ...getByColorMode('dark'),
    background: 'colors.gray.1',
    foreground: 'colors.gray.12',
    focus: 'colors.blue.8',
    divider: 'colors.white.2',
    default: 'colors.slate',
    primary: 'colors.blue',
    secondary: 'colors.purple',
    success: 'colors.green',
    warning: 'colors.yellow',
    danger: 'colors.red',
  },
};
