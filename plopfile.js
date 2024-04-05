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

  plop.setGenerator('package', {
    description: `Generates a package`,
    prompts: [
      {
        type: 'input',
        name: `packageName`,
        message: `Enter package name:`,

        validate: (value) => {
          if (!value) {
            return `Package name is required`;
          }

          // check is case is correct
          if (value !== value.toLowerCase()) {
            return `Package name must be in lowercase`;
          }

          // cannot have spaces
          if (value.includes(' ')) {
            return `Package name cannot have spaces`;
          }

          return true;
        },
      },
      {
        type: 'input',
        name: 'description',
        message: `The description of this package:`,
      },
      {
        type: 'confirm',
        name: 'isReact',
        message: `Is this a React package?`,
        default: true,
      },
    ],
    actions(answers) {
      const actions = [];

      if (!answers) return actions;

      const { description, outDir, packageName, isReact } = answers;

      const destination = `packages/${dashCase(packageName)}`;

      const data = {
        packageName,
        description,
        outDir,
        destination,
        tags: isReact ? 'scope:client' : 'scope:common',
      };

      actions.push({
        type: 'addMany',
        templateFiles: `plop/${isReact ? 'react-package' : 'package'}/**`,
        destination: `{{destination}}`,
        base: `plop/${isReact ? 'react-package' : 'package'}`,
        data,
        abortOnFail: true,
      });

      actions.push({
        type: 'modify',
        template: `$1\n\t  "@myraui/${packageName}": ["${destination}/src/index.ts"],`,
        path: './tsconfig.json',
        pattern: /("paths": {)/,
      });

      fs.readdirSync('./packages').forEach((file) => {
        if (!fs.existsSync(`./packages/${file}/tsconfig.json`)) return;

        actions.push({
          type: 'modify',
          template: `$1\n\t  "@myraui/${packageName}": ["${destination}/src/index.ts"],`,
          path: `./packages/${file}/tsconfig.json`,
          pattern: /("paths": {)/,
        });
      });

      return actions;
    },
  });
};
