import { nextui, NextUIPluginConfig } from '@nextui-org/react';
import plugin from 'tailwindcss/plugin';
import deepMerge from 'deepmerge';
import { Config, PluginAPI } from 'tailwindcss/types/config';
import { animations } from './animations';
import tailwindAnimate from 'tailwindcss-animate';

const PREFIX = 'myraui';

const themeConfig: Partial<Config> = {
  theme: {
    extend: {
      ...animations,
      colors: {},
    },
  },
};

export function myraui(config?: NextUIPluginConfig): ReturnType<typeof plugin> {
  const plugins: Array<ReturnType<typeof plugin>> = [nextui({ prefix: PREFIX, ...config }), tailwindAnimate];

  const baseHandler = (handlerProps: PluginAPI) => {
    plugins.forEach((plugin) => plugin.handler(handlerProps));
  };
  const baseConfig = plugins.reduce((acc, plugin) => deepMerge(acc, plugin.config || {}), {});

  return plugin(
    (handlerProps) => {
      baseHandler(handlerProps);
    },
    deepMerge(baseConfig || {}, themeConfig)
  );
}
