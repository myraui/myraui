import { colors } from './colors';
import { fontSize } from './fontSize';
import { DefaultThemeTokens, ThemeTokens } from '../theme.types';
import { lineHeight } from './lineHeight';
import { borderRadius } from './borderRadius';
import { borderWidth } from './borderWidth';
import { boxShadow } from './boxShadow';
import { opacity } from './opacity';
import { width } from './width';
import { height } from './height';
import { ColorMode, myraColors } from '../colors';
import { pipe } from 'fp-ts/lib/function';
import { swapKeys } from '@myraui/shared-utils';
import * as R from 'fp-ts/Record';
import { grayscale } from './grayscale';
import { keyframes } from './keyframes';
import { animation } from './animation';
import deepMerge from 'deepmerge';
import { normalizeColorModeValue } from '../utils';
import { colorScheme } from './color-scheme';

type Tokens = {
  [K in keyof ThemeTokens]: DefaultThemeTokens<K>;
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
  grayscale,
  animation,
  keyframes,
  colorScheme,
};

export type DefaultThemes = Record<ColorMode, ThemeTokens>;

export const defaultThemes = pipe(
  tokens,
  R.map(normalizeColorModeValue),
  R.map((value) => ({ ...value, dark: deepMerge(value.light as any, (value.dark as any) || {}) })),
  swapKeys
) as DefaultThemes;

export const colorSchemeOptions = [
  'background',
  'foreground',
  'focus',
  'divider',
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
  ...Object.keys(myraColors),
];
