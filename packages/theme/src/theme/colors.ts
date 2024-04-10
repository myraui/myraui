import { FlatMyraColor, MyraColor } from '../colors';
import { Theme } from '../theme.types';

export type DefaultSemanticColors =
  | 'background'
  | 'foreground'
  | 'focus'
  | 'divider'
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

export const defaultColors: Record<Theme, Record<DefaultSemanticColors, MyraColor | FlatMyraColor>> = {
  light: {
    background: 'gray.1',
    foreground: 'gray.12',
    focus: 'blue.8',
    divider: 'blackAlpha.2',
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
    divider: 'whiteAlpha.2',
    default: 'slate',
    primary: 'blue',
    secondary: 'purple',
    success: 'green',
    warning: 'yellow',
    danger: 'red',
  },
};
