const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const myraUIPlugin = require('@myraui/react/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/{react,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  plugins: [
    myraUIPlugin({
      themes: {
        dark: {
          colors: {
            background: 'gray.6',
            foreground: 'gray.12',
            focus: 'blue.8',
            divider: 'blackAlpha.2',
            default: 'slate',
            primary: 'blue',
            secondary: 'purple',
            success: 'green',
            warning: 'yellow',
            danger: 'red',
          },
        },
        light: {
          colors: {
            background: 'gray.1',
            foreground: 'gray.12',
            focus: 'blue.8',
            divider: 'blackAlpha.2',
            default: 'slate',
            primary: 'blue',
            secondary: 'purple',
            success: 'green',
            warning: 'yellow',
            danger: 'red',
          },
        },
      },
    }),
  ],
};
