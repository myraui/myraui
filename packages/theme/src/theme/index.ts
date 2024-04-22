import { colors } from './colors';
import { fontSize } from './fontSize';
import { ThemedTokens, ThemeTokens } from '../theme.types';
import { lineHeight } from './lineHeight';
import { radius } from './radius';
import { borderWidth } from './borderWidth';
import { boxShadow } from './boxShadow';
import { opacity } from './opacity';
import { width } from './width';
import { height } from './height';
import { ColorMode } from '../colors';
import { pipe } from 'fp-ts/lib/function';
import { swapKeys } from '@myraui/utils';

const tokens: Record<keyof ThemeTokens, ThemedTokens<any, any>> = {
  colors,
  fontSize,
  lineHeight,
  radius,
  borderWidth,
  boxShadow,
  opacity,
  width,
  height,
  minHeight: {},
  minWidth: {},
  spacing: {},
};

export type DefaultThemes = Record<ColorMode, ThemeTokens>;

export const defaultThemes = pipe(tokens, swapKeys) as DefaultThemes;
