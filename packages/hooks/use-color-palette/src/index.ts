import { ColorPalette, getComputedColorScale } from '@myra-ui/plugin';
import React from 'react';

const prefix = 'myra-ui';

export function useColorPalette(element: HTMLElement | null, palette: Partial<ColorPalette> = {}) {
  const [colorPalette, setColorPalette] = React.useState<Partial<ColorPalette>>(palette);

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
