import { Exception } from '@myraui/utils';
import { pipe } from 'fp-ts/function';
import { ColorResolver, PluginEnv } from '../plugin.types';
import { myrauiOpacityVariable, myrauiVariable } from '../theme/variables';
import * as RE from 'fp-ts/ReaderEither';

/**
 * Generate a color resolver for a specific color, this will set the dynamic color in tailwind config theme.colors
 *
 * @param colorName the name of the color
 */
export function generateColorResolver(colorName: string): RE.ReaderEither<PluginEnv, Exception, ColorResolver> {
  return pipe(
    RE.asks(({ prefix }) => {
      const _colorVariable = myrauiVariable(prefix, 'colors', colorName);
      const _opacityVariable = myrauiOpacityVariable(prefix, colorName);

      return ({ opacityVariable, opacityValue }) => {
        // if the opacity is set  with a slash (e.g. bg-primary/90), use the provided value
        if (!isNaN(+opacityValue)) {
          return `hsl(var(${_colorVariable}) / ${opacityValue})`;
        }
        // if no opacityValue was provided (=it is not parsable to a number)
        // the myrauiOpacityVariable (opacity defined in the color definition rgb(0, 0, 0, 0.5)) should have the priority
        // over the tw class based opacity(e.g. "bg-opacity-90")
        // This is how tailwind behaves as for v3.2.4
        if (opacityVariable) {
          return `hsl(var(${_colorVariable}) / var(${_opacityVariable}, var(${opacityVariable})))`;
        }

        return `hsl(var(${_colorVariable}) / var(${_opacityVariable}, 1))`;
      };
    })
  );
}
