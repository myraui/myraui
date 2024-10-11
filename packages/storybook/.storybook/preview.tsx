import theme from './theme';
import { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { Toaster } from '@myraui/components';

import './style.scss';
import React, { useEffect } from 'react';
import { DocsContainer, DocsContainerProps } from '@storybook/blocks';
import { ThemeProvider } from 'next-themes';

const decorators: Preview['decorators'] = [
  (Story, { viewMode }) => {
    return (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Story />
        {viewMode === 'story' && <Toaster />}
      </ThemeProvider>
    );
  },
];

const Container = (props: DocsContainerProps) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // scroll to bottom
      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight + 100);
      }, 100);
    }
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <DocsContainer {...props} />
      <Toaster />
    </ThemeProvider>
  );
};

const commonTheme = {
  brandTitle: 'MyraUI',
  brandUrl: 'https://github.com/myraui/myraui',
  brandTarget: '_self',
};

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme,
      container: Container,
      source: {
        type: 'code',
      },
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
  tags: ['autodocs'],
};

export default preview;
