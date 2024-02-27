import theme from './theme';
import { Preview } from '@storybook/react';
import formatCode from './utils/formatCode';

import './style.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: { hideNoControlsWarning: true },
    actions: { argTypesRegex: '^on.*' },
    docs: {
      source: {
        transform: formatCode,
      },
      theme,
    },
    darkMode: {
      current: 'dark',
      stylePreview: true,
      darkClass: 'dark',
      lightClass: 'light',
      classTarget: 'html',
    },
    options: {
      storySort: {},
    },
  },
};

export default preview;
