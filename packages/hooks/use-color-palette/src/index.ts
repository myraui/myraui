import { ColorScale } from '@myra-ui/colors';
import { ColorPalette, ColorPaletteKeys, resolveColorPalette, Theme, useMyraUIContext } from '@myra-ui/system';
import React, { useRef } from 'react';

export function useColorPalette(theme: Theme, palette: Partial<ColorPalette> = {}): UseColorPaletteReturn {
  const { prefix } = useMyraUIContext();
  const [colorPalette, setColorPalette] = React.useState<Record<ColorPaletteKeys, ColorScale>>(
    resolveColorPalette(palette, theme, document.documentElement, prefix)
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
