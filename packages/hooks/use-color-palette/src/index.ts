import { ColorPalette, getComputedColorScale } from '@myra-ui/system';
import React from 'react';

const prefix = 'myra-ui';

export function useColorPalette(element: HTMLElement | null, palette: Partial<ColorPalette> = {}): Partial<ColorPalette> | null {
  const [colorPalette, setColorPalette] = React.useState<Partial<ColorPalette> | null>(null);

  React.useEffect(() => {
    if (element) {
      setColorPalette({
        action: getComputedColorScale('action', element, prefix),
        neutral: getComputedColorScale('neutral', element, prefix),
        foreground: getComputedColorScale('foreground', element, prefix),
      });
    }
  }, [element]);

  return colorPalette;
}

export type UseColorPaletteReturn = ReturnType<typeof useColorPalette>;
