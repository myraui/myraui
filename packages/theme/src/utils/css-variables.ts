import { SemanticTokens, Theme, ThemeEnv } from '../theme.types';
import * as RE from 'fp-ts/ReaderEither';
import { Exception } from '@myraui/utils';
import { pipe } from 'fp-ts/lib/function';

export interface CSSVariable {
  /**
   * This is the reference name of the CSS variable. e.g. var(--color-primary)
   */
  reference(): string;
  /**
   * This is the name of the CSS variable. e.g. --color-primary
   */
  name: string;

  // This is the value of the CSS variable. e.g. #fff
  value?: string;
}

export type ScopedCSSVariables<Scope extends string = string> = Record<Scope, CSSVariable[]>;

export type ThemedCSSVariables = Partial<ScopedCSSVariables<Theme>>;

const escRegex = /[^a-zA-Z0-9_\u0081-\uffff-]/g;
function esc(string: string) {
  return `${string}`.replace(escRegex, (s) => `\\${s}`);
}

const dashCaseRegex = /[A-Z]/g;
function dashCase(string: string) {
  return string.replace(dashCaseRegex, (match) => `-${match.toLowerCase()}`);
}

export function cssVariable(
  name: string,
  value?: string | CSSVariable,
  fallback?: string | CSSVariable
): RE.ReaderEither<ThemeEnv, Exception, CSSVariable> {
  return RE.asks(({ prefix }) => {
    const variable = dashCase(['-', prefix, esc(name)].filter(Boolean).join('-'));
    return {
      name: variable,
      reference() {
        return `var(${this.name}${fallback ? `, ${typeof fallback === 'string' ? fallback : fallback.reference}` : ``})`;
      },
      value: value ? (typeof value === 'string' ? value : value.reference()) : '',
    };
  });
}

/**
 * Create a variable for a specific token
 *
 * @param token the token
 * @param valueKey the key of the value
 * @param value
 * @param fallback
 */
export function semanticTokenVariable(
  token: keyof SemanticTokens,
  valueKey: string,
  value?: string | CSSVariable,
  fallback?: string | CSSVariable
): RE.ReaderEither<ThemeEnv, Exception, CSSVariable> {
  return cssVariable(`${token}-${valueKey}`, value, fallback);
}

/**
 * Create a variable for a color
 *
 * @param colorKey the key of the color
 * @param value
 * @param fallback
 */
export function colorVariable(
  colorKey: string,
  value?: string | CSSVariable,
  fallback?: string | CSSVariable
): RE.ReaderEither<ThemeEnv, Exception, CSSVariable> {
  return semanticTokenVariable('colors', colorKey, value, fallback);
}

/**
 * Create a variable for a color with a specific opacity
 *
 * @param colorKey the key of the color
 * @param value
 * @param fallback
 */
export function opacityVariable(
  colorKey: string,
  value?: string | CSSVariable,
  fallback?: string | CSSVariable
): RE.ReaderEither<ThemeEnv, Exception, CSSVariable> {
  return pipe(
    semanticTokenVariable('colors', colorKey, value, fallback),
    RE.map((variable) => ({ ...variable, name: `${variable.name}-opacity` }))
  );
}

/**
 * Check if a variable is an opacity variable
 *
 * @param variable the variable reference
 */
export function isOpacityVariable(variable: CSSVariable) {
  return variable.name.endsWith('-opacity');
}

/**
 *  Check if a token is a CSS variable
 * @param token
 */
export function isCSSVariable(token: string) {
  return token.startsWith('--');
}
