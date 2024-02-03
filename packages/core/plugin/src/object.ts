import { flatten } from 'flat';

export const flattenThemeObject = <T>(obj: T) => flatten(obj, { safe: true, delimiter: '-' }) as Object;
