import { pipe } from 'fp-ts/lib/function';
import * as RE from 'fp-ts/ReaderEither';
import { ComponentTheme, SemanticRecord, SemanticTokens, Theme, ThemedValue, ThemeEnv, ThemeRecord } from '../theme.types';
import { buildThemedCSSVariables, isThemeRecord, normalizeThemedValue, resolveThemeRecord } from './theme';
import { buildSemanticTokens } from '../semantic-tokens';
import { ThemedCSSVariables } from './css-variables';
import * as R from 'fp-ts/Record';
import { flow } from 'fp-ts/function';
import { Dict, Exception, mergeObjects, swapKeys } from '@myraui/utils';

export function normalizeSemanticRecord<Value>(semanticRecord: SemanticRecord<ThemedValue<Value>>): SemanticRecord<ThemeRecord<Value>>;
export function normalizeSemanticRecord<Value>(themedValue: ThemeRecord<Value>): ThemeRecord<Value>;
export function normalizeSemanticRecord(semanticRecord: Dict): any {
  if (!semanticRecord) return {};
  if (isThemeRecord(semanticRecord)) return semanticRecord;
  return pipe(semanticRecord, R.map(flow(normalizeThemedValue, normalizeSemanticRecord)));
}

export function resolveSemanticRecord<Value>(semanticRecord: SemanticRecord<ThemeRecord<Value>>): Record<Theme, SemanticRecord<Value>> {
  if (!semanticRecord) return {};
  if (isThemeRecord(semanticRecord)) return resolveThemeRecord(semanticRecord);

  return pipe(
    semanticRecord,
    R.mapWithIndex((_, value) => resolveSemanticRecord(value as any)),
    swapKeys
  ) as Record<Theme, SemanticRecord<Value>>;
}

export function resolveComponentTheme(componentTheme: ComponentTheme): Record<Theme, SemanticTokens> {
  return pipe(
    componentTheme,
    R.filter((value) => !!value),
    R.map((value) => pipe(normalizeSemanticRecord(value), resolveSemanticRecord)),
    swapKeys
  ) as Record<Theme, SemanticTokens>;
}

export function buildComponentTheme(componentTheme: ComponentTheme): RE.ReaderEither<ThemeEnv, Exception, Dict<string | Dict<string>>> {
  return pipe(
    resolveComponentTheme(componentTheme),
    R.toEntries,
    RE.traverseArray(([theme, tokens]) => {
      return pipe(
        buildSemanticTokens(tokens),
        RE.map((variables) => ({ [theme]: variables } as ThemedCSSVariables))
      );
    }),
    RE.map(mergeObjects),
    RE.map(buildThemedCSSVariables)
  );
}
