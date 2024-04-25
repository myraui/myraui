import { ColorCSSVariableOptions, colorVariable, CSSVariable, opacityVariable } from '../utils';
import { pipe } from 'fp-ts/function';
import * as RE from 'fp-ts/ReaderEither';
import { ThemeEnv } from '../theme.types';
import { Exception } from '@myraui/utils';
import { Resolver } from './resolvers';
import Color from 'color';

export type ColorValueFunction = ({ opacityValue, opacityVariable }: { opacityValue: string; opacityVariable: string }) => string;

const parsedColorsCache: Record<string, number[]> = {};

export function parseColor(colorValue: string) {
  try {
    return Color(colorValue).hsl().round().array();
  } catch (err) {
    console.error(`Error parsing color: ${colorValue}`);

    return [0, 0, 0, 1];
  }
}

export function createColorValueOptions(colorValue: string): ColorCSSVariableOptions {
  const parsedColor = parsedColorsCache[colorValue] || parseColor(colorValue);

  parsedColorsCache[colorValue] = parsedColor;
  const [h, s, l, defaultAlphaValue] = parsedColor;

  return {
    color: { value: `${h} ${s}% ${l}%` },
    opacity: {
      value: typeof (defaultAlphaValue as unknown) == 'number' ? defaultAlphaValue.toFixed(2) : undefined,
    },
  };
}

/**
 * Generate CSS variables for a color
 * @param colorName the name of the color
 * @param colorValue the value of the color
 */
export function generateColorVariables(colorName: string, colorValue: string): RE.ReaderEither<ThemeEnv, Exception, [CSSVariable, CSSVariable]> {
  return pipe(createColorValueOptions(colorValue), (options) => colorVariable(colorName, options));
}

export function generateColorValueFn(_colorVariable: string | CSSVariable, _opacityVariable: CSSVariable): ColorValueFunction {
  const colorValue = typeof _colorVariable === 'string' ? _colorVariable : _colorVariable.reference();

  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue && !isNaN(+opacityValue)) {
      return `hsl(${colorValue} / ${opacityValue})`;
    }
    // if no opacityValue was provided (=it is not parsable to a number)
    // the myrauiOpacityVariable (opacity defined in the color definition rgb(0, 0, 0, 0.5)) should have the priority
    // over the tw class based opacity(e.g. "bg-opacity-90")
    // This is how tailwind behaves as for v3.2.4
    if (opacityVariable) {
      return `hsl(${colorValue} / ${_opacityVariable.reference(`var(${opacityVariable})`)})`;
    }

    return `hsl(${colorValue} / ${_opacityVariable.reference('1')})`;
  };
}

export function resolveColorValue(key: string, value: string | CSSVariable) {
  if (typeof value === 'string') {
    return generateColorVariables(key, value);
  }

  return pipe(
    opacityVariable(value),
    RE.chain((opacity) => colorVariable(key, { color: { value }, opacity: { value: opacity } }))
  );
}

export const colorResolver: Resolver<ColorValueFunction> = (key: string, value: string | CSSVariable) => {
  return pipe(
    resolveColorValue(key, value),
    RE.map(([colorVariable, opacityVariable]) => ({
      value: generateColorValueFn(colorVariable, opacityVariable),
      utilities: [colorVariable, opacityVariable],
    }))
  );
};
