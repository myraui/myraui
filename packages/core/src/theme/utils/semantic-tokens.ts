import { Exception, mergeObjects } from '@myra-ui/utilities';
import { pipe } from 'fp-ts/lib/function';
import * as RE from 'fp-ts/ReaderEither';
import { ColorShade, shades } from '../../colors';
import { ComponentTheme, ResolvedSemanticTokens, SemanticRecord, SemanticTokens, Theme, ThemedValue } from '../theme.types';
import {
  CSSVariables,
  DEFAULT_SHADE,
  flattenSemanticTokens,
  flattenThemedCSSVariables,
  GroupedCSSVariables,
  isThemeRecord,
  normalizeThemedValue,
  resolveThemeRecord,
} from './theme';

export type ThemeEnv = {
  prefix: string;
};

type Resolver = (prefix: string, keyPrefix: string, key: string, value: string) => CSSVariables;

type Resolvers = Record<keyof SemanticTokens, Resolver>;

function buildColor(prefix: string, keyPrefix: string, key: string, colorName: string): CSSVariables {
  let colorShade = colorName.split('.')?.[1];

  if (colorShade && shades.includes(+colorShade as ColorShade)) {
    colorName = colorName.split('.')[0];
  } else {
    colorShade = DEFAULT_SHADE.toString();
  }

  return shades.reduce(
    (acc, shade) => {
      return {
        ...acc,
        [`${keyPrefix}-${shade}`]: `--${prefix}-colors-${colorName}-${shade}`,
        [`${keyPrefix}-${shade}-opacity`]: `--${prefix}-colors-${colorName}-${shade}-opacity`,
      };
    },
    {
      [`${keyPrefix}`]: `--${prefix}-colors-${colorName}-${colorShade}`,
      [`${keyPrefix}-opacity`]: `--${prefix}-colors-${colorName}-${colorShade}-opacity`,
    }
  );
}

const builders: Resolvers = {
  colors: buildColor,
};

export function buildSemanticRecord<Value extends string | number>(
  record: SemanticRecord<Value>,
  prefix: string,
  tokensKey: keyof SemanticTokens,
  keyPrefix = ''
): CSSVariables {
  const resolved: CSSVariables = {};

  const resolver = builders[tokensKey];

  for (const [key, value] of Object.entries(record)) {
    const fullKeyPrefix = `${keyPrefix}${keyPrefix ? '-' : ''}${key}`;
    if (typeof value === 'object') {
      Object.assign(resolved, buildSemanticRecord(value as SemanticRecord<string>, prefix, tokensKey, fullKeyPrefix));
    } else {
      Object.assign(resolved, resolver(prefix, fullKeyPrefix, key, value as string));
    }
  }

  return resolved;
}

export function resolveSemanticTokens(semanticTokens: SemanticTokens): RE.ReaderEither<ThemeEnv, Exception, ResolvedSemanticTokens> {
  return pipe(
    RE.asks(({ prefix }) => {
      return Object.entries(semanticTokens).reduce((acc, [key, value]) => {
        return { ...acc, [key]: value ? buildSemanticRecord(value, prefix, key as keyof SemanticTokens) : {} };
      }, {});
    })
  );
}

export function buildSemanticTokens(semanticTokens: SemanticTokens | Array<SemanticTokens>): RE.ReaderEither<ThemeEnv, Exception, CSSVariables> {
  return pipe(
    Array.isArray(semanticTokens) ? semanticTokens : [semanticTokens],
    RE.traverseArray((semanticTokens) => pipe(resolveSemanticTokens(semanticTokens), RE.chain(flattenSemanticTokens))),
    RE.map(mergeObjects)
  );
}

export function walkComponentThemeRecord<Value extends string | number>(
  semanticRecord: SemanticRecord<ThemedValue<Value>>
): Partial<Record<Theme, SemanticRecord<Value>>> {
  const result: Partial<Record<Theme, SemanticRecord<Value>>> = {};

  if (!semanticRecord) return result;
  if (isThemeRecord(semanticRecord)) return resolveThemeRecord(semanticRecord);

  for (const [tokenKey, tokenValue] of Object.entries(semanticRecord)) {
    const valueResult = walkComponentThemeRecord(normalizeThemedValue(tokenValue as any));

    for (const [theme, value] of Object.entries(valueResult)) {
      result[theme as Theme] = { ...(result[theme as Theme] || {}), [tokenKey]: value } as SemanticRecord<Value>;
    }
  }

  return result;
}

export function createSemanticTokens(componentTheme: ComponentTheme): Record<Theme, SemanticTokens> {
  const semanticTokens: Partial<Record<Theme, SemanticTokens>> = {};

  for (const [tokenKey, tokenValue] of Object.entries(componentTheme)) {
    const resolved = walkComponentThemeRecord(tokenValue as SemanticRecord<ThemedValue<string>>);

    for (const [theme, value] of Object.entries(resolved)) {
      semanticTokens[theme as Theme] = { ...semanticTokens[theme as Theme], [tokenKey]: value } as SemanticTokens;
    }
  }

  return semanticTokens as Record<Theme, SemanticTokens>;
}

export function buildComponentTheme(prefix: string, componentTheme: ComponentTheme): RE.ReaderEither<ThemeEnv, Exception, GroupedCSSVariables> {
  return pipe(
    createSemanticTokens(componentTheme),
    Object.entries,
    RE.traverseArray(([theme, tokens]) => {
      return pipe(
        buildSemanticTokens(tokens),
        RE.map((variables) => ({ [theme]: variables } as GroupedCSSVariables))
      );
    }),
    RE.map(mergeObjects),
    RE.map(flattenThemedCSSVariables)
  );
}
