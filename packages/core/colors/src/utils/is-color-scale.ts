import { shades } from '../color-shades';
import { ColorScale, ColorShade } from '../color-types';

export function isColorScale(value: any): value is ColorScale {
  if (!value) return false;
  return (
    Object.keys(value).every((key: string) => shades.includes(+key as ColorShade)) &&
    Object.values(value).every((val: any) => typeof val === 'string')
  );
}
