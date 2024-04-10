import { ColorShade, extractColorShade, shades } from '../colors';
import { colorVariable, CSSVariable } from '../utils';
import { pipe } from 'fp-ts/function';
import * as RE from 'fp-ts/ReaderEither';
import * as RA from 'fp-ts/ReadonlyArray';
import { ThemeEnv } from '../theme.types';
import { Exception } from '@myraui/utils';

export function createColorValue(key: string, value: string, shade?: ColorShade): RE.ReaderEither<ThemeEnv, Exception, [CSSVariable, CSSVariable]> {
  return pipe(
    RE.of(extractColorShade(value)),
    RE.chain((color) => colorVariable(`${color.name}-${shade || color.shade}`)),
    RE.chain(([colorValue, opacityColorValue]) =>
      colorVariable(shade ? `${key}-${shade}` : key, { color: { value: colorValue }, opacity: { value: opacityColorValue } })
    ),
    RE.map(([color, opacity]) => [color, opacity])
  );
}

export function colorResolver(key: string, value: string): RE.ReaderEither<ThemeEnv, Exception, ReadonlyArray<CSSVariable>> {
  return pipe(
    createColorValue(key, value),
    RE.chain((colorVariables) =>
      pipe(
        shades,
        RE.traverseArray((shade) => createColorValue(key, value, shade)),
        RE.map((shadeVariables) => [...shadeVariables, colorVariables]),
        RE.map(RA.flatten)
      )
    )
  );
}
