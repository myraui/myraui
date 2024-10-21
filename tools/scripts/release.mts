import { releaseChangelog, releasePublish, releaseVersion } from 'nx/release';
import yargs from 'yargs';
import { execaSync } from 'execa';
import { readFileSync, writeFileSync } from 'fs';
import { readCachedProjectGraph } from '@nx/devkit';

const projects = readCachedProjectGraph().nodes;

(async () => {
  const options = await yargs
    .version(false) // don't use the default meaning of version in yargs
    .option('version', {
      description: 'Explicit version specifier to use, if overriding conventional commits',
      type: 'string',
    })
    .option('dryRun', {
      alias: 'd',
      description: 'Whether or not to perform a dry-run of the release process, defaults to true',
      type: 'boolean',
      default: true,
    })
    .option('verbose', {
      description: 'Whether or not to enable verbose logging, defaults to false',
      type: 'boolean',
      default: false,
    })
    .parseAsync();

  const { workspaceVersion, projectsVersionData } = await releaseVersion({
    specifier: options.version,
    dryRun: options.dryRun,
    verbose: options.verbose,
    stageChanges: false,
  });

  if (!options.dryRun) {
    execaSync('git', ['stash']);

    for (const { type, data } of Object.values(projects)) {
      if (type === 'lib') {
        const packageJson = JSON.parse(readFileSync(`${data.root}/package.json`, 'utf-8'));
        packageJson.version = workspaceVersion;
        writeFileSync(`${data.root}/package.json`, JSON.stringify(packageJson, null, 2));
      }
    }

    execaSync('git', ['add', '.']);
  }

  await releaseChangelog({
    versionData: projectsVersionData,
    version: workspaceVersion,
    dryRun: options.dryRun,
    verbose: options.verbose,
  });

  if (!options.dryRun) {
    execaSync('git', ['stash', 'pop']);
  }

  // The returned number value from releasePublish will be zero if all projects are published successfully, non-zero if not
  // const publishStatus = await releasePublish({
  //   dryRun: options.dryRun,
  //   verbose: options.verbose,
  // });
  process.exit(publishStatus);
})();
