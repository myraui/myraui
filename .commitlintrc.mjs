import conventional from '@commitlint/config-conventional';

export default {
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  helpUrl: 'https://github.com/myraui/myraui/blob/main/CONTRIBUTING.md#commit-convention',
  rules: {
    ...conventional.rules,
    'type-enum': [2, 'always', ['feat', 'feature', 'fix', 'refactor', 'docs', 'build', 'test', 'ci', 'chore']],
    'function-rules/header-max-length': [0],
  },
};
