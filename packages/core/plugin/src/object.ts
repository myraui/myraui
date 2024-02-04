import { ColorScale, invertColorScale } from '@myra-ui/colors';
import { flatten } from 'flat';

export const flattenThemeObject = <T>(obj: T) => {
  return flatten(obj, { safe: true, delimiter: '-' }) as Object;
};

export const flattenColors = (colors: Record<string, ColorScale>): Record<string, string> => {
  return flattenThemeObject(colors) as Record<string, string>;
};
