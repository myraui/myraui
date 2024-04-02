import { SemanticTokens } from '../../theme';

/**
 * Create a variable for a specific token
 *
 * @param prefix the prefix of the plugin
 * @param token the token
 * @param valueKey the key of the value
 */
export function myrauiVariable(prefix: string, token: keyof SemanticTokens, valueKey: string) {
  return `--${prefix}-${token}-${valueKey}`;
}

/**
 * Create a variable for a color with a specific opacity
 *
 * @param prefix the prefix of the plugin
 * @param colorKey the key of the color
 */
export function myrauiOpacityVariable(prefix: string, colorKey: string) {
  return `${myrauiVariable(prefix, 'colors', colorKey)}-opacity`;
}

/**
 * Check if a variable is an opacity variable
 *
 * @param variable the variable reference
 */
export function isOpacityVariable(variable: string) {
  return variable.endsWith('-opacity');
}

/**
 *  Check if a token is a CSS variable
 * @param token
 */
export function isCSSVariable(token: string) {
  return token.startsWith('--');
}
