const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const { myraui } = require('@myraui/theme/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '../../packages/**/{stories,src}/**/*.{js,jsx,ts,tsx,mdx}'),
    ...createGlobPatternsForDependencies(__dirname),
    join(__dirname, '.storybook'),
    join(__dirname, '../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'),
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [myraui()],
};
