import { SemanticRecord } from '@myra-ui/breakpoint-utils';
import { Color } from '@myra-ui/colors';

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

export const semanticColors: SemanticRecord<SemanticColors, Color> = {
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
};
