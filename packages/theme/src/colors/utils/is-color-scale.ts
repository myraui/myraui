import { shades } from '../color-shades';
import { ColorScale } from '../color-types';

const keys = [...shades, 'DEFAULT'].map(String);

export function isColorScale(value: unknown): value is ColorScale {
  if (!value) return false;
  if (typeof value !== 'object') return false;
  if (Object.keys(value).length !== keys.length) return false;

  return Object.keys(value).every((key: string) => keys.includes(key));
}
