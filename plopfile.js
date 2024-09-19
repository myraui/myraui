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

const generators = ['package', 'hook', 'component'];

const outDirs = {
  package: ['utilities', 'services', 'server'],
  hook: ['hooks'],
  component: ['atoms', 'molecules', 'organisms', 'templates', 'pages'],
};

const defaultOutDirs = {
  component: 'atoms',
  hook: 'hooks',
  package: 'utilities',
};

const rootDirs = {
  package: 'packages',
  hook: 'packages',
  component: 'packages/components',
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
          name: `${generator}Name`,
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
          when: () => generator !== 'component',
        },
        {
          type: 'list',
          name: 'outDir',
          message: `where should this ${generator} live?`,
          default: defaultOutDirs[generator],
          choices: outDirs[generator],
          when: () => outDirs[generator].length > 1,
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

        const { description, outDir } = answers;
        const packageName = answers[`${generator}Name`];

        const rootDir = rootDirs[generator];

        let destination = `${rootDir}/${outDir}/${dashCase(packageName)}`;

        if (generator === 'component') {
          destination = `${rootDir}/${outDir}`;
        }

        const data = {
          description,
          outDir,
          destination,
          [`${generator}Name`]: packageName,
        };

        actions.push({
          type: 'addMany',
          templateFiles: `plop/${generator}/**`,
          destination: `{{destination}}`,
          base: `plop/${generator}`,
          data,
          abortOnFail: true,
        });

        if (generator === 'component' || generator === 'hook') {
          const indexFile = `${rootDir}/${outDir}/src/index.ts`;

          if (fs.readFileSync(indexFile, 'utf-8') === '') {
            fs.writeFileSync(indexFile, `\n`);
          }

          actions.push({
            type: 'append',
            path: `${rootDir}/${outDir}/src/index.ts`,
            pattern: /^/,
            template: `export * from './{{${generator}Name}}';\n`,
            separator: '',
            data,
          });
        }

        return actions;
      },
    });
  });
};
