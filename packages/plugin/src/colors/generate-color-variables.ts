import { CSSVariables } from '@myraui/theme';
import { Exception } from '@myraui/utils';
import Color from 'color';
import * as RE from 'fp-ts/ReaderEither';
import { PluginEnv } from '../plugin.types';
import { isCSSVariable, myrauiOpacityVariable, myrauiVariable } from '../theme/variables';

const parsedColorsCache: Record<string, number[]> = {};

/**
 * Generate CSS variables for a color
 * @param colorName the name of the color
 * @param colorValue the value of the color
 */
export function generateColorVariables(colorName: string, colorValue: string): RE.ReaderEither<PluginEnv, Exception, CSSVariables> {
  return RE.asks(({ prefix }) => {
    /**
     * If the color value is a CSS variable, return it as is
     */
    if (isCSSVariable(colorValue)) {
      return { [myrauiVariable(prefix, 'colors', colorName)]: `var(${colorValue})` };
    }

    const parsedColor = parsedColorsCache[colorValue] || Color(colorValue).hsl().round().array();

    parsedColorsCache[colorValue] = parsedColor;

    const [h, s, l, defaultAlphaValue] = parsedColor;
    const variables: CSSVariables = {
      [myrauiVariable(prefix, 'colors', colorName)]: `${h} ${s}% ${l}%`,
    };

    if (typeof (defaultAlphaValue as unknown) === 'number') {
      variables[myrauiOpacityVariable(prefix, colorName)] = defaultAlphaValue.toFixed(2);
    }

    return variables;
  });
}
