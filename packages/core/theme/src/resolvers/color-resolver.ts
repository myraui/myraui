import { colorVariable, CSSVariable } from '../utils/css-variables';
import { pipe } from 'fp-ts/function';
import * as RE from 'fp-ts/ReaderEither';
import { ResolvedValues, Resolver } from './resolvers';
import { ColorShade, extractColorShade, shades } from '../colors';
import { ThemeEnv } from '../theme.types';
import { Exception, mergeObjects, StringOrNumber } from '@myraui/shared-utils';

export type ColorValueFunction = ({ opacityValue, opacityVariable }: { opacityValue: string; opacityVariable: string }) => string;

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
): RE.ReaderEither<ThemeEnv, Exception, ResolvedValues<ColorValueFunction>> {
  return pipe(
    RE.of(extractColorShade(value)),
    RE.chain((color) => {
      if (!shade) {
        return color.isFallbackShade ? colorVariable(color.name) : colorVariable(`${color.name}-${color.shade}`);
      }
      return colorVariable(`${color.name}-${shade}`);
    }),
    RE.chain(([colorValue, opacityColorValue]) => {
      const colorKey = shade ? `${shade}` : 'DEFAULT';
      return pipe(
        colorVariable(colorKey === 'DEFAULT' ? key : `${key}-${colorKey}`, { color: { value: colorValue }, opacity: { value: opacityColorValue } }),
        RE.map((colorVariables) => ({
          [colorKey]: {
            value: generateColorValueFn(...colorVariables),
            utilities: colorVariables,
          },
        }))
      );
    })
  );
}

export const colorResolver: Resolver<ColorValueFunction> = (key: string, value: StringOrNumber) => {
  return pipe(
    createColorValue(key, String(value)),
    RE.chain((colorVariables) =>
      pipe(
        shades,
        RE.traverseArray((shade) => createColorValue(key, String(value), shade)),
        RE.map(mergeObjects),
        RE.map((shadeVariables) => ({ ...shadeVariables, ...colorVariables }))
      )
    )
  );
};
