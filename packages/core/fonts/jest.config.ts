/* eslint-disable */
export default {
  displayName: '@myraui/fonts',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  transformIgnorePatterns: ['!(react/.+)'],
  moduleFileExtensions: ['ts', 'js'],
  coverageDirectory: '../../../coverage/packages/core/fonts',
};
