const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.js',
    'src/**/*.jsx',
    '!src/**/*.d.ts',
    '!src/**/*.test.tsx',
    '!src/**/*.test.ts',
    '!src/**/*.spec.tsx',
    '!src/**/*.spec.ts',
  ],
};
