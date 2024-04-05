import { shades } from '../color-shades';
import { ColorScale, ColorShade } from '../color-types';

export function isColorScale(value: unknown): value is ColorScale {
  if (!value) return false;
  return (
    Object.keys(value).every((key: string) => shades.includes(+key as ColorShade)) &&
    Object.values(value).every((val: unknown) => typeof val === 'string')
  );
}
