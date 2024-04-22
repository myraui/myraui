import { ColorShade, extractColorShade, shades } from '../colors';
import { ColorCSSVariableOptions, colorVariable, CSSVariable } from '../utils';
import { pipe } from 'fp-ts/function';
import * as RE from 'fp-ts/ReaderEither';
import { ThemeEnv } from '../theme.types';
import { Exception, mergeObjects } from '@myraui/utils';
import { ResolvedValue, Resolver } from './resolvers';
import Color from 'color';

export type ColorValueFunction = ({ opacityValue, opacityVariable }: { opacityValue: string; opacityVariable: string }) => string;

const parsedColorsCache: Record<string, number[]> = {};

export function createColorValueOptions(colorValue: string): ColorCSSVariableOptions {
  const parsedColor = parsedColorsCache[colorValue] || Color(colorValue).hsl().round().array();

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

export function createColorValue(
  key: string,
  value: string,
  shade?: ColorShade
): RE.ReaderEither<ThemeEnv, Exception, ResolvedValue<ColorValueFunction>> {
  return pipe(
    RE.of(extractColorShade(value)),
    RE.chain((color) => colorVariable(`${color.name}-${shade || color.shade}`)),
    RE.chain(([colorValue, opacityColorValue]) => {
      const colorKey = shade ? `${key}-${shade}` : key;
      return pipe(
        colorVariable(colorKey, { color: { value: colorValue }, opacity: { value: opacityColorValue } }),
        RE.map((colorVariables) => ({
          value: generateColorValueFn(...colorVariables),
          utilities: colorVariables,
        }))
      );
    })
  );
}

export const colorResolver: Resolver<ColorValueFunction> = (key: string, value: string) => {
  return pipe(
    createColorValue(key, value),
    RE.chain((colorVariables) =>
      pipe(
        shades,
        RE.traverseArray((shade) => createColorValue(key, value, shade)),
        RE.map(mergeObjects),
        RE.map((shadeVariables) => ({ ...shadeVariables, ...colorVariables }))
      )
    )
  );
};
