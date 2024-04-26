import { ConfigThemeGenerator } from './generators';
import { pipe } from 'fp-ts/lib/function';
import { ColorScale } from '../colors';
import * as R from 'fp-ts/Record';
import { ColorCSSVariableOptions, colorVariable, CSSVariable } from '../utils/css-variables';
import * as RE from 'fp-ts/ReaderEither';
import { ThemeEnv, ThemeTokens } from '../theme.types';
import { Dict, Exception, flattenObject, mapKeys } from '@myraui/utils';
import Color from 'color';
import { generateColorValueFn, ResolvedValue } from '../resolvers';
import { isColorScale } from '../colors/utils';

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

export function generateDefaultColor(color: string, shade: string): RE.ReaderEither<ThemeEnv, Exception, [CSSVariable, CSSVariable]> {
  return pipe(
    colorVariable(`${color}-${shade}`),
    RE.chain(([colorValue, opacityValue]) => colorVariable(color, { color: { value: colorValue }, opacity: { value: opacityValue } }))
  );
}

export function generateColorScale(
  color: string,
  value: string | ColorScale
): RE.ReaderEither<ThemeEnv, Exception, Dict<ResolvedValue<any>> | string> {
  if (!isColorScale(value)) {
    return RE.right(value);
  }

  return pipe(
    value,
    R.mapWithIndex((shade, colorValue) => {
      if (shade === 'DEFAULT') return generateDefaultColor(color, String(colorValue));
      return generateColorVariables(`${color}-${shade}`, colorValue as any);
    }),
    R.sequence(RE.Applicative),
    RE.map(
      R.mapWithIndex((key, value) => ({
        value: generateColorValueFn(...(value as [CSSVariable, CSSVariable])),
        utilities: value,
      }))
    )
  );
}

export const colorGenerator: ConfigThemeGenerator<'colors'> = (colors: ThemeTokens['colors']) => {
  return pipe(
    colors as Dict,
    R.mapWithIndex(generateColorScale),
    R.sequence(RE.Applicative),
    RE.map((palette) => flattenObject(palette, { maxDepth: 2 })),
    RE.map(mapKeys((key) => (key.endsWith('-DEFAULT') ? key.replace('-DEFAULT', '') : key))),
    RE.map((palette) => ({ colors: palette }))
  );
};
