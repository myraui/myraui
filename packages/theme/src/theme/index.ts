import { colors } from './colors';
import { fontSize } from './fontSize';
import { ThemedThemeTokens, ThemeTokens } from '../theme.types';
import { lineHeight } from './lineHeight';
import { borderRadius } from './borderRadius';
import { borderWidth } from './borderWidth';
import { boxShadow } from './boxShadow';
import { opacity } from './opacity';
import { width } from './width';
import { height } from './height';
import { ColorMode } from '../colors';
import { pipe } from 'fp-ts/lib/function';
import { Dict, swapKeys } from '@myraui/utils';

type Tokens = {
  [K in keyof ThemeTokens]: ThemedThemeTokens<K>;
};

const tokens: Tokens = {
  colors,
  fontSize,
  lineHeight,
  borderRadius,
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

export const defaultThemes = pipe(tokens as Dict, swapKeys) as DefaultThemes;
