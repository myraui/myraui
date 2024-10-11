import { relative } from 'path';
import { ESLint } from 'eslint';

const removeIgnoredFiles = async (files) => {
  const cwd = process.cwd();
  const eslint = new ESLint();
  const relativePaths = files.map((file) => relative(cwd, file));
  const isIgnored = await Promise.all(relativePaths.map((file) => eslint.isPathIgnored(file)));
  const filteredFiles = files.filter((_, i) => !isIgnored[i]);

  return filteredFiles.join(' ');
};

export default {
  '**/*.{js,ts,jsx,tsx}': async (files) => {
    const filesToLint = await removeIgnoredFiles(files);

    return [`eslint -c .eslintrc.json --max-warnings=0 --fix ${filesToLint}`];
  },
  '**/*.{css, json}': async (files) => {
    const filesToLint = await removeIgnoredFiles(files);

    if (!filesToLint) return [];

    return [`prettier --config .prettierrc --ignore-path --write ${filesToLint}`];
  },
};
