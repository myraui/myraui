import theme from './theme';
import { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

import './style.scss';
import React from 'react';
import { MyraUIProvider } from '@myraui/system';
import { DocsContainer, DocsContainerProps } from '@storybook/blocks';

const decorators: Preview['decorators'] = [
  (Story) => {
    return (
      <MyraUIProvider>
        <div className="bg-dark w-72">
          <Story />
        </div>
      </MyraUIProvider>
    );
  },
];

const Container = (props: DocsContainerProps) => {
  return (
    <MyraUIProvider>
      <DocsContainer {...props} />
    </MyraUIProvider>
  );
};

const commonTheme = {
  brandTitle: 'MyraUI',
  brandUrl: 'https://github.com/gitaumoses4/myraui',
  brandTarget: '_self',
};

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: { hideNoControlsWarning: true },
    docs: {
      theme,
      container: Container,
    },
    darkMode: {
      current: 'dark',
      stylePreview: true,
      darkClass: 'dark',
      lightClass: 'light',
      classTarget: 'html',
      dark: {
        ...themes.dark,
        ...commonTheme,
        appBorderRadius: 14,
        brandImage: '/images/logo/dark-logo.svg',
      },
      light: {
        ...themes.light,
        ...commonTheme,
        appBorderRadius: 14,
        brandImage: '/images/logo/light-logo.svg',
      },
    },
    options: {
      storySort: {},
    },
  },
  decorators,
};

export default preview;
