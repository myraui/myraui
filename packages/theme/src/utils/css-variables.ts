import { Theme, ThemeEnv, ThemeTokens } from '../theme.types';
import * as RE from 'fp-ts/ReaderEither';
import { Dict, Exception } from '@myraui/utils';
import { pipe } from 'fp-ts/lib/function';
import * as A from 'fp-ts/Array';
import { SpacingScaleKeys } from '../generators/spacing-unit-generator';

export interface CSSVariable {
  /**
   * This is the reference name of the CSS variable. e.g. var(--color-primary)
   */
  reference(fallback?: string | CSSVariable): string;
  /**
   * This is the name of the CSS variable. e.g. --color-primary
   */
  name: string;

  // This is the value of the CSS variable. e.g. #fff
  value?: string;
}

export type CSSVariableOptions = {
  value?: string | CSSVariable;
  fallback?: string | CSSVariable;
};

export type ColorCSSVariableOptions = {
  color?: CSSVariableOptions;
  opacity?: CSSVariableOptions;
};

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
  name: string | CSSVariable,
  { fallback, value }: CSSVariableOptions = {}
): RE.ReaderEither<ThemeEnv, Exception, CSSVariable> {
  return RE.asks(({ prefix }) => {
    let variableName = '';
    if (typeof name === 'string') {
      variableName = dashCase(['-', prefix, esc(name)].filter(Boolean).join('-'));
    } else {
      variableName = name.name;
    }
    return {
      name: variableName,
      reference(_fallback: CSSVariableOptions['fallback']) {
        const finalFallback = _fallback || fallback;
        return `var(${this.name}${finalFallback ? `, ${typeof finalFallback === 'string' ? finalFallback : finalFallback.reference()}` : ``})`;
      },
      value: value ? (isCSSVariable(value) ? value.reference() : value) : '',
    };
  });
}

/**
 * Create a variable for a specific token
 *
 * @param token the token
 * @param valueKey the key of the value
 * @param options
 */
export function themeTokenVariable(
  token: keyof ThemeTokens,
  valueKey: string,
  options?: CSSVariableOptions
): RE.ReaderEither<ThemeEnv, Exception, CSSVariable> {
  return cssVariable(`${token}${valueKey === '' ? '' : `-${valueKey}`}`, options);
}

/**
 * Create a variable for a color
 *
 * @param colorKey the key of the color
 * @param options the options
 *
 * @return a tuple with the color and opacity variables
 */
export function colorVariable(
  colorKey: string,
  options: ColorCSSVariableOptions = {}
): RE.ReaderEither<ThemeEnv, Exception, [CSSVariable, CSSVariable]> {
  return pipe(
    RE.sequenceArray([themeTokenVariable('colors', colorKey, options.color), opacityVariable(colorKey, options.opacity)]),
    RE.map(([color, opacity]) => [color, opacity])
  );
}

/**
 * Create a variable for a color with a specific opacity
 *
 * @param colorKey the key of the color
 * @param options the options
 */
export function opacityVariable(colorKey: string | CSSVariable, options?: CSSVariableOptions): RE.ReaderEither<ThemeEnv, Exception, CSSVariable> {
  return pipe(
    typeof colorKey === 'string' ? themeTokenVariable('colors', colorKey, options) : cssVariable(colorKey, options),
    RE.map((variable) => ({ ...variable, name: `${variable.name}-opacity` }))
  );
}

/**
 *  Check if a token is a CSS variable
 * @param token
 */
export function isCSSVariable(token: any): token is CSSVariable {
  return typeof token === 'object' && 'name' in token && 'reference' in token && typeof token.reference === 'function';
}

export function buildCSSVariables(cssVariables: CSSVariable[]): Dict<string> {
  return pipe(
    cssVariables,
    A.filter((variable) => variable.value !== undefined && variable.value !== ''),
    A.reduce({} as Dict<string>, (acc, variable) => ({ ...acc, [variable.name]: variable.value } as Dict<string>))
  );
}

export function spacingUnitVariable<K extends SpacingScaleKeys>(spacingScaleKey?: K | undefined, options?: CSSVariableOptions) {
  const key = (spacingScaleKey ? `-${spacingScaleKey}` : '').replace('.', '_');

  return cssVariable(`spacing-unit${key}`, options);
}
