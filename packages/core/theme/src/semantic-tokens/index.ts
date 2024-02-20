import { SemanticTokens, Theme } from '../theme.types';
import { defaultColors } from './colors';

export const defaultSemanticTokens: Record<Theme, SemanticTokens> = {
  dark: {
    colors: defaultColors.dark,
  },
  light: {
    colors: defaultColors.light,
  },
};
