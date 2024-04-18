import { colors } from './colors';
import { fontSize } from './fontSize';
import { SemanticTokens, Theme, ThemedSemanticRecord } from '../theme.types';
import { lineHeight } from './lineHeight';
import { radius } from './radius';
import { borderWidth } from './borderWidth';
import { boxShadow } from './boxShadow';
import { opacity } from './opacity';
import { width } from './width';
import { height } from './height';

const tokens: Record<keyof SemanticTokens, ThemedSemanticRecord<any, any>> = {
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
};

export const semanticTokens: Record<Theme, SemanticTokens> = Object.entries(tokens).reduce((acc, cur) => {
  const [key, value] = cur;
  return {
    light: { ...acc.light, [key]: value.light || {} },
    dark: { ...acc.dark, [key]: value.dark || {} },
  };
}, {} as Record<Theme, SemanticTokens>);
