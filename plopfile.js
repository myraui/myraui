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

function generateParentPath(path) {
  const parts = path.split('/');

  return '../'.repeat(parts.length - 1);
}

const generators = ['package', 'hook', 'component'];

const types = {
  package: ['utilities', 'services', 'server', 'core'],
  hook: [],
  component: ['atoms', 'molecules', 'organisms', 'templates', 'pages'],
  'react-package': ['core'],
};

const defaultOutDirs = {
  component: 'atoms',
  package: 'core',
};

const rootDirs = {
  package: 'packages',
  hook: 'packages/hooks',
  component: 'packages/components',
};

const templateDirs = {
  package: 'package',
  hook: 'hook',
  component: 'component',
  'react-package': 'react-package',
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
          type: 'confirm',
          name: 'isReact',
          message: 'Is this a react package?',
          default: false,
          when: () => generator === 'package',
        },
        {
          type: 'input',
          name: 'description',
          message: `The description of this ${generator}:`,
          when: () => generator !== 'component',
        },
        {
          type: 'list',
          name: 'type',
          message: `Select the type of ${generator}:`,
          default: defaultOutDirs[generator],
          choices: (answers) => {
            if (answers.isReact) {
              return types['react-package'];
            }
            return types[generator];
          },
          when: () => types[generator].length > 1,
          validate: (value) => {
            if (!value) {
              return `type is required`;
            }

            return true;
          },
        },
      ],
      actions(answers) {
        const actions = [];

        if (!answers) return actions;

        let rootDir = rootDirs[generator];

        if (answers.type) {
          rootDir = rootDirs[generator] + '/' + answers.type;

          if (generator === 'component') {
            rootDir = rootDirs[generator];
          }
        }

        const { description, isReact, type } = answers;

        const fullPackageName = answers[`${generator}Name`].split('/');

        const packageName = fullPackageName[fullPackageName.length - 1];
        const packageDestination = fullPackageName.slice(0, fullPackageName.length - 1).join('/');

        let destination = `${rootDir}/${packageDestination ? `${packageDestination}/` : ''}${dashCase(packageName)}`;

        if (generator === 'component') {
          destination = rootDir;
        }

        const parentPath = generateParentPath();

        const data = {
          description,
          rootDir,
          type,
          destination,
          parentPath,
          [`${generator}Destination`]: packageDestination,
          [`${generator}Name`]: packageName,
        };

        const templateDirName = isReact ? templateDirs['react-package'] : templateDirs[generator];

        if (generator === 'component') {
          const templates = ['__tests__', 'src', 'stories'];

          templates.forEach((template) => {
            actions.push({
              type: 'addMany',
              templateFiles: `plop/${templateDirName}/${template}/**`,
              destination: `{{destination}}/${template}/${packageDestination}`,
              base: `plop/${templateDirName}/${template}`,
              data,
              abortOnFail: true,
            });
          });
        } else {
          actions.push({
            type: 'addMany',
            templateFiles: `plop/${templateDirName}/**`,
            destination: `{{destination}}`,
            base: `plop/${templateDirName}`,
            data,
            abortOnFail: true,
          });
        }

        if (generator === 'component' || generator === 'hook') {
          let indexFile = `${rootDir}/src/index.ts`;

          if (generator === 'component') {
            indexFile = `${rootDir}/src/${type}/index.ts`;
          }

          if (fs.readFileSync(indexFile, 'utf-8') === '') {
            fs.writeFileSync(indexFile, `\n`);
          }

          actions.push({
            type: 'append',
            path: indexFile,
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
