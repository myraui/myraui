import { releaseChangelog, releasePublish, releaseVersion } from 'nx/release';
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

  // execute in dry-run mode to determine the version and changelog content
  const { workspaceVersion, projectsVersionData } = await releaseVersion({
    specifier: options.version,
    dryRun: true,
    verbose: false,
  });

  if (workspaceVersion == null) {
    console.log('⏭️ No changes detected across any package, skipping publish step altogether');
    process.exit(0);
  }

  if (!options.dryRun) {
    /* Update package version */
    console.log('📦 Updating package versions');
    for (const [key, value] of Object.entries(projectsVersionData)) {
      const packageJson = JSON.parse(readFileSync(`${projects[key].data.root}/package.json`, 'utf-8'));
      packageJson.version = value.newVersion;
      writeFileSync(`${projects[key].data.root}/package.json`, JSON.stringify(packageJson, null, 2));
      /* Stage changes */
      execaSync('git', ['add', `${projects[key].data.root}/package.json`]);
    }
  }

  await releaseChangelog({
    versionData: projectsVersionData,
    version: workspaceVersion,
    dryRun: options.dryRun,
    verbose: options.verbose,
  });

  await releaseVersion({
    specifier: options.version,
    dryRun: options.dryRun,
    verbose: false,
    gitCommit: false,
    stageChanges: false,
  });

  // The returned number value from releasePublish will be zero if all projects are published successfully, non-zero if not
  const publishProjectsResult = await releasePublish({
    dryRun: true,
    verbose: options.verbose,
  });

  process.exit(
    // If any of the individual project publish tasks returned a non-zero exit code, exit with code 1
    Object.values(publishProjectsResult).some(({ code }) => code !== 0) ? 1 : 0
  );
})();
