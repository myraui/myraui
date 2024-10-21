import { releaseChangelog, releaseVersion } from 'nx/release';
import { execaSync } from 'execa';
import { readFileSync, writeFileSync } from 'fs';
import { readCachedProjectGraph } from '@nx/devkit';
import yargs from 'yargs';

const projects = readCachedProjectGraph().nodes;

(async () => {
  const options = await yargs(process.argv.slice(2))
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

  console.log(workspaceVersion);

  if (workspaceVersion == null) {
    console.log('⏭️ No changes detected across any package, skipping publish step altogether');
    process.exit(0);
  }

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
  // const publishProjectsResult = await releasePublish({
  //   dryRun: options.dryRun,
  //   verbose: options.verbose,
  // });
  // process.exit(
  //   // If any of the individual project publish tasks returned a non-zero exit code, exit with code 1
  //   Object.values(publishProjectsResult).some(({ code }) => code !== 0) ? 1 : 0,
  // );
  process.exit();
})();
