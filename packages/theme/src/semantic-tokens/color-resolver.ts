import { ColorShade, extractColorShade, shades } from '../colors';
import { colorVariable, CSSVariable } from '../utils';
import { pipe } from 'fp-ts/function';
import * as RE from 'fp-ts/ReaderEither';
import { ThemeEnv } from '../theme.types';
import { Dict, Exception, mergeObjects } from '@myraui/utils';

export function createColorValue(
  key: string,
  value: string,
  shade?: ColorShade
): RE.ReaderEither<ThemeEnv, Exception, Dict<[CSSVariable, CSSVariable]>> {
  return pipe(
    RE.of(extractColorShade(value)),
    RE.chain((color) => colorVariable(`${color.name}-${shade || color.shade}`)),
    RE.chain(([colorValue, opacityColorValue]) => {
      const colorKey = shade ? `${key}-${shade}` : key;
      return pipe(
        colorVariable(colorKey, { color: { value: colorValue }, opacity: { value: opacityColorValue } }),
        RE.map((colorVariables) => ({ [colorKey]: colorVariables }))
      );
    })
  );
}

export function colorResolver(key: string, value: string): RE.ReaderEither<ThemeEnv, Exception, Dict<ReadonlyArray<CSSVariable>>> {
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
}
