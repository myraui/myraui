import { ColorShade, extractColorShade, shades } from '../colors';
import { colorVariable, CSSVariable } from '../utils';
import { pipe } from 'fp-ts/function';
import * as RE from 'fp-ts/ReaderEither';
import { ThemeEnv } from '../theme.types';
import { Dict, Exception, mergeObjects } from '@myraui/utils';
import { ResolvedValue, Resolver } from './resolvers';

export type ColorValueFunction = ({ opacityValue, opacityVariable }: { opacityValue: string; opacityVariable: string }) => string;

export function generateColorValueFn(_colorVariable: CSSVariable, _opacityVariable: CSSVariable): ColorValueFunction {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue && !isNaN(+opacityValue)) {
      return `hsl(${_colorVariable.reference()} / ${opacityValue})`;
    }
    // if no opacityValue was provided (=it is not parsable to a number)
    // the myrauiOpacityVariable (opacity defined in the color definition rgb(0, 0, 0, 0.5)) should have the priority
    // over the tw class based opacity(e.g. "bg-opacity-90")
    // This is how tailwind behaves as for v3.2.4
    if (opacityVariable) {
      return `hsl(${_colorVariable.reference()} / ${_opacityVariable.reference(`var(${opacityVariable})`)})`;
    }

    return `hsl(${_colorVariable.reference()} / ${_opacityVariable.reference('1')})`;
  };
}

export function createColorValue(
  key: string,
  value: string,
  shade?: ColorShade
): RE.ReaderEither<ThemeEnv, Exception, Dict<ResolvedValue<ColorValueFunction>>> {
  return pipe(
    RE.of(extractColorShade(value)),
    RE.chain((color) => colorVariable(`${color.name}-${shade || color.shade}`)),
    RE.chain(([colorValue, opacityColorValue]) => {
      const colorKey = shade ? `${key}-${shade}` : key;
      return pipe(
        colorVariable(colorKey, { color: { value: colorValue }, opacity: { value: opacityColorValue } }),
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
