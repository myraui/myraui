import { PartialThemeTokens, ThemeTokens } from '../theme.types';

export function createThemeTokens(partialThemeTokens: PartialThemeTokens = {}): ThemeTokens {
  return {
    colors: partialThemeTokens.colors || {},
    fontSize: partialThemeTokens.fontSize || {},
    lineHeight: partialThemeTokens.lineHeight || {},
    width: partialThemeTokens.width || {},
    height: partialThemeTokens.height || {},
    borderRadius: partialThemeTokens.borderRadius || {},
    boxShadow: partialThemeTokens.boxShadow || {},
    borderWidth: partialThemeTokens.borderWidth || {},
    opacity: partialThemeTokens.opacity || {},
    minWidth: partialThemeTokens.minWidth || {},
    minHeight: partialThemeTokens.minHeight || {},
    spacing: partialThemeTokens.spacing || {},
    grayscale: partialThemeTokens.grayscale || {},
    keyframes: partialThemeTokens.keyframes || {},
    animation: partialThemeTokens.animation || {},
  };
}
