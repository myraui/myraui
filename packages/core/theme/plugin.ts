import { nextui, NextUIPluginConfig } from '@nextui-org/react';
import plugin from 'tailwindcss/plugin';
import deepMerge from 'deepmerge';
import { Config } from 'tailwindcss/types/config';

const themeConfig: Partial<Config> = {
  theme: {
    extend: {
      colors: {},
    },
  },
};

export function myraui(config?: NextUIPluginConfig): ReturnType<typeof plugin> {
  const { handler: baseHandler, config: baseThemeConfig } = nextui(config);

  return plugin(
    (handlerProps) => {
      baseHandler(handlerProps);
    },
    deepMerge(baseThemeConfig || {}, themeConfig)
  );
}
