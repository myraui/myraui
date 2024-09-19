import type { StorybookConfig } from '@storybook/react-vite';

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../../**/**/stories/*.@(mdx|stories.@(js|jsx|ts|tsx))', '../../**/**/stories/*.@(mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions', 'storybook-dark-mode', '@chromatic-com/storybook'],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  docs: {},

  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [nxViteTsPaths()],
    }),

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};

export default config;
