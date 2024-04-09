import { ColorCSSVariableOptions, colorVariable, CSSVariable, isCSSVariable } from '@myraui/theme';
import { Exception } from '@myraui/utils';
import Color from 'color';
import * as RE from 'fp-ts/ReaderEither';
import { PluginEnv } from '../plugin.types';
import { pipe } from 'fp-ts/function';

const parsedColorsCache: Record<string, number[]> = {};

function createColorValue(colorValue: string): ColorCSSVariableOptions {
  if (isCSSVariable(colorValue)) return { color: { value: colorValue } };

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
export function generateColorVariables(colorName: string, colorValue: string): RE.ReaderEither<PluginEnv, Exception, CSSVariable[]> {
  return pipe(createColorValue(colorValue), (options) => colorVariable(colorName, options));
}
