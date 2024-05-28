import { DefaultThemeTokens } from '../theme.types';
import { getByColorMode } from '../colors/utils';

export type ThemeColors = 'background' | 'foreground' | 'focus' | 'divider' | 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export const colors: DefaultThemeTokens<'colors'> = {
  light: {
    ...getByColorMode('light'),
    default: 'slate',
    background: 'gray.1',
    foreground: 'gray.12',
    focus: 'blue.8',
    divider: 'black.2',
    primary: 'blue',
    secondary: 'purple',
    success: 'green',
    warning: 'yellow',
    danger: 'red',
  },
  dark: {
    ...getByColorMode('dark'),
    divider: 'white.2',
  },
};
