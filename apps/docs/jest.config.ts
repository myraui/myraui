/* eslint-disable */
export default {
  displayName: 'docs',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['@testing-library/jest-dom', '../../tools/scripts/setup-tests.ts'],
  coverageDirectory: '../../coverage/apps/docs',
};
