import { Exception } from '@myraui/utils';
import { pipe } from 'fp-ts/function';
import { ColorResolver, PluginEnv } from '../plugin.types';
import * as RE from 'fp-ts/ReaderEither';
import { colorVariable } from '@myraui/theme';

/**
 * Generate a color resolver for a specific color, this will set the dynamic color in tailwind config theme.colors
 *
 * @param colorName the name of the color
 */
export function generateColorResolver(colorName: string): RE.ReaderEither<PluginEnv, Exception, ColorResolver> {
  return pipe(
    colorVariable(colorName),
    RE.map(([_colorVariable, _opacityVariable]) => {
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
    })
  );
}
