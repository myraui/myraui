import { ColorValue, SemanticRecord } from '../theme.types';
import { Color, getBaseColors } from '@myra-ui/colors';

export type SemanticColors =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'text'
  | 'neutral'
  | 'danger'
  | 'warning'
  | 'info'
  | 'success'
  | 'divider'
  | 'overlay'
  | 'focus';

export const semanticColors: SemanticRecord<SemanticColors | Color, ColorValue> = {
  DEFAULT: {
    primary: 'teal',
    secondary: 'red',
    accent: 'yellow',
    text: 'gray',
    neutral: 'gray',
    danger: 'red',
    warning: 'orange',
    info: 'blue',
    success: 'green',
    overlay: 'gray',
    focus: 'blue',
    divider: 'gray',
  },
  dark: getBaseColors('dark'),
  light: getBaseColors('light'),
};
