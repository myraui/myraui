import { ColorValue, ThemedRecord } from '../theme.types';
import { getByColorMode, MyraColor } from '@myra-ui/colors';

export const defaultColors: ThemedRecord<MyraColor, ColorValue> = {
  dark: getByColorMode('dark'),
  light: getByColorMode('light'),
};
