import { ColorPalette, ColorPaletteProps } from './theming-types';

/**
 * Filter object key,value pairs by predicate
 * @param obj - object to filter
 * @param predicate - predicate function, returns true if the key,value pair should be included
 */
export function pickBy<T extends object>(obj: T, predicate: (value: any, key: string) => boolean): Partial<T> {
  return Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value, key))) as any;
}

export function isDefined<T>(value: T): boolean {
  return Boolean(value);
}

export function getComponentColorPalette<K extends Partial<ColorPalette>>(
  props: ColorPaletteProps,
  defaults?: K
): ColorPaletteProps['colorPalette'] & K {
  const fromShorthand = { primary: props.primaryColor, neutral: props.neutralColor, text: props.textColor };

  return {
    ...(defaults || {}),
    ...pickBy(props.colorPalette || {}, isDefined),
    ...pickBy(fromShorthand, isDefined),
  } as any;
}
