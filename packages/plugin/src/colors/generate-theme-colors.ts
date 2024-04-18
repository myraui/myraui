import { ColorPalette, CSSVariable, flattenColorPalette, ResolvedSemanticTokens, resolveThemeColors } from '@myraui/theme';
import { Dict, Exception, toValues } from '@myraui/utils';
import { flow, pipe } from 'fp-ts/function';
import * as R from 'fp-ts/Record';
import * as A from 'fp-ts/Array';
import * as RE from 'fp-ts/ReaderEither';
import { ColorResolver, PluginEnv } from '../plugin.types';
import { generateColorResolver } from './generate-color-resolver';
import { generateColorVariables } from './generate-color-variables';
import { colorPaletteResolver } from './color-palette-resolver';

export type GeneratedColor = { variables: readonly CSSVariable[]; resolver?: ColorResolver; colorName: string };

export type GeneratedColors = {
  variables: readonly CSSVariable[];
  colors: Dict<ColorResolver>;
};

export function generateThemeColor(colorName: string, colorValue: string): RE.ReaderEither<PluginEnv, Exception, GeneratedColor> {
  return pipe(
    generateColorVariables(colorName, colorValue),
    RE.chain((variables) =>
      pipe(
        generateColorResolver(colorName),
        RE.map((resolver) => ({ variables, resolver, colorName }))
      )
    )
  );
}

export function generateSemanticTokenColor(
  tokenKey: string,
  variables: readonly CSSVariable[]
): RE.ReaderEither<PluginEnv, Exception, GeneratedColor> {
  return pipe(
    generateColorResolver(tokenKey),
    RE.map((resolver) => ({ variables, resolver, colorName: tokenKey }))
  );
}

export function combineGeneratedColors(colors: readonly GeneratedColor[]) {
  return colors.reduce<GeneratedColors>(
    (acc, { variables, resolver, colorName }) => {
      return {
        variables: [...acc.variables, ...variables],
        colors: resolver ? { ...acc.colors, [colorName]: resolver } : acc.colors,
      };
    },
    { variables: [], colors: {} }
  );
}

export function generateThemeColors(colors: ColorPalette): RE.ReaderEither<PluginEnv, Exception, GeneratedColors> {
  return pipe(
    resolveThemeColors(colors || {}),
    flattenColorPalette,
    R.mapWithIndex(colorPaletteResolver),
    R.sequence(RE.Applicative),
    RE.map(toValues),
    RE.map(combineGeneratedColors)
  );
}

export function generateSemanticTokenColors(
  semanticTokenColors: ResolvedSemanticTokens['colors']
): RE.ReaderEither<PluginEnv, Exception, GeneratedColors> {
  return pipe(
    semanticTokenColors,
    R.map(flow(R.mapWithIndex(generateSemanticTokenColor), R.sequence(RE.Applicative))),
    R.sequence(RE.Applicative),
    RE.map(flow(toValues, A.chain(toValues))),
    RE.map(combineGeneratedColors)
  );
}
