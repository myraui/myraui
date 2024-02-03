import plugin from 'tailwindcss/plugin.js';
import { MyraUIPluginConfig } from './types';

export const myraUI = (config?: MyraUIPluginConfig): ReturnType<typeof plugin> => {
  return plugin(() => {});
};
