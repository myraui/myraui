/**
 * Part of this code is taken from @chakra-ui/react package ❤️
 */
const fs = require('fs');

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const dashCase = (str) => {
  return str.replace(/([A-Z])/g, (_, char) => `-${char.toLowerCase()}`);
};

const camelCase = (str) => {
  return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase());
};

const workspaces = ['components', 'core', 'hooks', 'utilities'];
const generators = ['component', 'package', 'hook'];

const defaultOutDirs = {
  component: 'components',
  hook: 'hooks',
  package: 'utilities',
};

/**
 * @param {import("plop").NodePlopAPI} plop
 */
module.exports = function main(plop) {
  plop.setHelper('capitalize', (text) => {
    return capitalize(camelCase(text));
  });
  plop.setHelper('camelCase', (text) => {
    return camelCase(text);
  });

  generators.forEach((generator) => {
    plop.setGenerator(generator, {
      description: `Generates a ${generator}`,
      prompts: [
        {
          type: 'input',
          name: `packageName`,
          message: `Enter ${generator} name:`,

          validate: (value) => {
            if (!value) {
              return `${generator} name is required`;
            }

            // check is has a valid hook name "use-something"
            if (generator === 'hook' && !value.startsWith('use-')) {
              return "Hook name must start with 'use-'";
            }

            // check is case is correct
            if (value !== value.toLowerCase()) {
              return `${generator} name must be in lowercase`;
            }

            // cannot have spaces
            if (value.includes(' ')) {
              return `${generator} name cannot have spaces`;
            }

            return true;
          },
        },
        {
          type: 'input',
          name: 'description',
          message: `The description of this ${generator}:`,
        },
        {
          type: 'list',
          name: 'outDir',
          message: `where should this ${generator} live?`,
          default: defaultOutDirs[generator],
          choices: workspaces,
          validate: (value) => {
            if (!value) {
              return `outDir is required`;
            }

            return true;
          },
        },
      ],
      actions(answers) {
        const actions = [];

        if (!answers) return actions;

        const { description, outDir, packageName } = answers;

        const destination = `packages/${outDir}/${dashCase(packageName)}`;

        const data = {
          packageName,
          description,
          outDir,
          destination,
        };

        actions.push({
          type: 'addMany',
          templateFiles: `plop/${generator}/**`,
          destination: `{{destination}}`,
          base: `plop/${generator}`,
          data,
          abortOnFail: true,
        });

        if (generator === 'component') {
          // update index.ts
          actions.push({
            type: 'append',
            path: `packages/core/theme/src/components/index.ts`,
            pattern: /^/,
            template: `export * from './{{packageName}}';\n`,
            separator: '',
            data,
          });
        }

        return actions;
      },
    });
  });
};
