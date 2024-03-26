const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const myraUIPlugin = require('@myra-ui/theme/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '../../packages/**/src/**/*.{js,jsx,ts,tsx,mdx}'),
    join(__dirname, '../../packages/**/stories/**/*.{js,jsx,ts,tsx,mdx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateColumns: {
        13: 'repeat(13, minmax(0, 1fr))',
      },
    },
  },
  plugins: [myraUIPlugin({})],
};
