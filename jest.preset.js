const nxPreset = require('@nx/jest/preset').default;
const path = require('path');

module.exports = {
  ...nxPreset,
  testEnvironment: 'jsdom',
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
    '!src/**/*.stories.tsx',
    '!src/**/*.stories.ts',
    '!src/**/*.stories.tsx',
    '!src/**/*.stories.ts',
  ],
  transform: {
    '^.+\\.m?(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom', path.join(__dirname, 'tools/scripts/setup-tests.ts')],
  transformIgnorePatterns: ['!(src/.+)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  coverageReporters: ['text', 'lcov'],
};
