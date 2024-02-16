import { ColorShade, shades } from '@myra-ui/colors';
import { BASE_THEME, CSSVariables, DEFAULT_SHADE, flattenSemanticTokens, ThemedCSSVariables } from '../utils/theme';
import { ResolvedSemanticTokens, SemanticRecord, SemanticTokens, SemanticValue, Theme } from '../theme.types';

type Builder = (prefix: string, key: string, value: string) => CSSVariables;

type Builders = Record<keyof SemanticTokens, Builder>;

function buildColor(prefix: string, key: string, colorName: string, defaultShade = DEFAULT_SHADE): CSSVariables {
  let colorShade = colorName.split('.')?.[1];

  if (colorShade && shades.includes(+colorShade as ColorShade)) {
    colorName = colorName.split('.')[0];
  } else {
    colorShade = defaultShade.toString();
  }

  return shades.reduce(
    (acc, shade) => {
      return {
        ...acc,
        [`${key}-${shade}`]: `--${prefix}-colors-${colorName}-${shade}`,
        [`${key}-${shade}-opacity`]: `--${prefix}-colors-${colorName}-${shade}-opacity`,
      };
    },
    {
      [key]: `--${prefix}-colors-${colorName}-${colorShade}`,
      [`${key}-opacity`]: `--${prefix}-colors-${colorName}-${colorShade}-opacity`,
    }
  );
}

const builders: Builders = {
  colors: buildColor,
};

export function normalizeSemanticValue<Value extends string | number>(value: SemanticValue<Value>) {
  if (typeof value === 'object') {
    return value;
  }

  return { [BASE_THEME]: value };
}

export function buildSemanticRecord<Value extends string | number>(
  record: SemanticRecord<Value>,
  prefix: string,
  tokensKey: keyof SemanticTokens
): ThemedCSSVariables {
  const resolved: ThemedCSSVariables = {};

  const resolver = builders[tokensKey];

  for (const [key, value] of Object.entries(record)) {
    const normalizedValue = normalizeSemanticValue(value);

    Object.entries(normalizedValue).forEach(([variant, value]) => {
      (resolved as any)[variant] = {
        ...((resolved as any)[variant] || {}),
        ...resolver(prefix, key, value as string),
      };
    }, {});
  }

  return resolved;
}

export function resolveSemanticTokens(prefix: string, semanticTokens: SemanticTokens): ResolvedSemanticTokens {
  const resolved: ResolvedSemanticTokens = {};

  Object.entries(semanticTokens).forEach(([key, value]) => {
    const builtRecord = value ? buildSemanticRecord(value, prefix, key as keyof SemanticTokens) : {};

    Object.entries(builtRecord).forEach(([themeKey, value]) => {
      const theme = themeKey as Theme;
      resolved[theme] = { ...(resolved[theme] || {}), [key]: value };
    });
  }, {} as ThemedCSSVariables);

  return resolved;
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
