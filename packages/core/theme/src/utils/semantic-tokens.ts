import { ColorShade, shades } from '@myra-ui/colors';
import {
  BASE_THEME,
  CSSVariables,
  DEFAULT_SHADE,
  flattenSemanticTokens,
  flattenThemedCSSVariables,
  GroupedCSSVariables,
  isThemedValue,
  ThemedCSSVariables,
} from './theme';
import { ComponentTheme, ResolvedSemanticTokens, SemanticRecord, SemanticTokens, Theme, ThemedValue } from '../theme.types';

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

export function resolveSemanticTokens(prefix: string, semanticTokens: SemanticTokens): ResolvedSemanticTokens {
  return Object.entries(semanticTokens).reduce((acc, [key, value]) => {
    return { ...acc, [key]: value ? buildSemanticRecord(value, prefix, key as keyof SemanticTokens) : {} };
  }, {});
}

export function buildSemanticTokens(prefix: string, semanticTokens: SemanticTokens | Array<SemanticTokens>): CSSVariables {
  return (Array.isArray(semanticTokens) ? semanticTokens : [semanticTokens]).reduce((acc, semanticTokens) => {
    const properties = resolveSemanticTokens(prefix, semanticTokens);
    return {
      ...acc,
      ...flattenSemanticTokens(prefix, properties),
    };
  }, {} as CSSVariables);
}

export function walkComponentThemeRecord<Value extends string | number>(
  semanticRecord: SemanticRecord<ThemedValue<Value>>
): Partial<Record<Theme, SemanticRecord<Value>>> {
  const result: Partial<Record<Theme, SemanticRecord<Value>>> = {};

  if (!semanticRecord) {
    return result;
  }

  if (isThemedValue(semanticRecord)) {
    for (const [key, value] of Object.entries(semanticRecord)) {
      const theme = key.replace('_', '') as Theme;
      result[theme] = value as SemanticRecord<Value>;
    }
  } else {
    for (const [tokenKey, tokenValue] of Object.entries(semanticRecord)) {
      if (typeof tokenValue === 'object') {
        const valueResult = walkComponentThemeRecord(tokenValue as SemanticRecord<ThemedValue<Value>>);

        for (const [theme, value] of Object.entries(valueResult)) {
          result[theme as Theme] = { ...(result[theme as Theme] || {}), [tokenKey]: value } as SemanticRecord<Value>;
        }
      } else {
        result[BASE_THEME] = { ...(result[BASE_THEME] || {}), [tokenKey]: tokenValue } as SemanticRecord<Value>;
      }
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

export function buildComponentTheme(prefix: string, componentTheme: ComponentTheme): GroupedCSSVariables {
  const semanticTokens = createSemanticTokens(componentTheme);

  const variables: ThemedCSSVariables = {};

  for (const [theme, tokens] of Object.entries(semanticTokens)) {
    variables[theme as Theme] = buildSemanticTokens(prefix, tokens);
  }

  return flattenThemedCSSVariables(variables);
}
