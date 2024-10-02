import { nextui, NextUIPluginConfig } from '@nextui-org/react';
import plugin from 'tailwindcss/plugin';

export function myraui(config: NextUIPluginConfig): ReturnType<typeof plugin> {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return plugin(() => {}, {
    plugins: [nextui(config)],
    theme: {
      extend: {
        colors: {
          crimson: '#DC143C',
        },
      },
    },
  });
}
