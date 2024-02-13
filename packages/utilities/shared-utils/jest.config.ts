/* eslint-disable */
export default {
  displayName: '@myra-ui/shared-utils',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js'],
  coverageDirectory: '../../../coverage/packages/utilities/shared-utils',
};
