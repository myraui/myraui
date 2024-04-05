import { SemanticTokens, Theme } from '../theme.types';
import { defaultColors } from './colors';

export const semanticTokens: Record<Theme, SemanticTokens> = {
  dark: {
    colors: defaultColors.dark,
  },
  light: {
    colors: defaultColors.light,
  },
};
