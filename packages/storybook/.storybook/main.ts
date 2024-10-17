import type { StorybookConfig } from '@storybook/react-vite';

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { mergeConfig } from 'vite';

const depth = 10;

const stories = Array.from({ length: depth }, (_, i) => `../../react/src${'/**'.repeat(i)}/*.@(mdx|stories.@(js|jsx|ts|tsx))`);

const config: StorybookConfig = {
  stories: [...stories, '../../react/stories/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions', 'storybook-dark-mode', '@chromatic-com/storybook'],

  framework: {
    name: '@storybook/experimental-nextjs-vite',
    options: {},
  },

  docs: {},

  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [nxViteTsPaths()],
    }),

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;
