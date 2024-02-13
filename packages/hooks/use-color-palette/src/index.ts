'use client';
import { ColorScale } from '@myra-ui/colors';
import React, { useRef } from 'react';
import { ColorPalette, ColorPaletteKeys, resolveColorPalette, DefaultThemes } from '@myra-ui/theme';
import { useMyraUIContext } from '@myra-ui/system';

export function useColorPalette(theme: DefaultThemes, palette: Partial<ColorPalette> = {}): UseColorPaletteReturn {
  const { prefix } = useMyraUIContext();
  const [colorPalette, setColorPalette] = React.useState<Record<ColorPaletteKeys, ColorScale>>(
    global.document ? resolveColorPalette(palette, theme, global.document.documentElement, prefix) : ({} as any)
  );
  const elementRef = useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (elementRef?.current) {
      setColorPalette(resolveColorPalette(palette, theme, elementRef.current, prefix));
    }
  }, [elementRef?.current, theme, prefix]);

  return [colorPalette, elementRef];
}

export type UseColorPaletteReturn = [Record<ColorPaletteKeys, ColorScale>, React.RefObject<any>];
