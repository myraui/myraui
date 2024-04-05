import { ConfigTheme, CSSVariables, flattenColorPalette, ResolvedSemanticTokens, resolveThemeColors } from '@myraui/theme';
import { Dict, Exception } from '@myraui/utils';
import { pipe } from 'fp-ts/function';
import * as O from 'fp-ts/Option';
import * as RE from 'fp-ts/ReaderEither';
import { ColorResolver, PluginEnv } from '../plugin.types';
import { isOpacityVariable } from '../theme/variables';
import { generateColorResolver } from './generate-color-resolver';
import { generateColorVariables } from './generate-color-variables';

export type GeneratedColor = { variables: CSSVariables; resolver?: ColorResolver; colorName: string };

export type GeneratedColors = {
  variables: CSSVariables;
  colors: Dict<ColorResolver>;
};

function generateThemeColor([colorName, colorValue]: [string, string]): RE.ReaderEither<PluginEnv, Exception, GeneratedColor> {
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

function generateSemanticTokenColor([tokenKey, tokenValue]: [string, string]): RE.ReaderEither<PluginEnv, Exception, GeneratedColor> {
  return pipe(
    generateColorVariables(tokenKey, tokenValue),
    RE.chain((variables) =>
      pipe(
        tokenKey,
        O.fromPredicate(isOpacityVariable),
        O.fold(
          () =>
            pipe(
              generateColorResolver(tokenKey),
              RE.map((resolver) => ({ variables, resolver, colorName: tokenKey }))
            ),
          () => RE.of({ variables, colorName: tokenKey })
        )
      )
    )
  );
}

function combineGeneratedColors(colors: readonly GeneratedColor[]) {
  return colors.reduce<GeneratedColors>(
    (acc, { variables, resolver, colorName }) => {
      return {
        variables: { ...acc.variables, ...variables },
        colors: resolver ? { ...acc.colors, [colorName]: resolver } : acc.colors,
      };
    },
    { variables: {}, colors: {} }
  );
}

export function generateThemeColors(colors: ConfigTheme['colors']): RE.ReaderEither<PluginEnv, Exception, GeneratedColors> {
  return pipe(resolveThemeColors(colors || {}), flattenColorPalette, RE.traverseArray(generateThemeColor), RE.map(combineGeneratedColors));
}

export function generateSemanticTokenColors(semanticTokens: ResolvedSemanticTokens): RE.ReaderEither<PluginEnv, Exception, GeneratedColors> {
  return pipe(semanticTokens.colors || {}, Object.entries, RE.traverseArray(generateSemanticTokenColor), RE.map(combineGeneratedColors));
}
