const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const myraUIPlugin = require('@myra-ui/theme/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'), ...createGlobPatternsForDependencies(__dirname)],
  theme: {
    extend: {},
  },
  plugins: [
    myraUIPlugin({
      themes: {
        light: {},
      },
      semanticTokens: {
        colors: {
          primary: 'blue.8',
          accent: 'slate',
        },
      },
    }),
  ],
};
