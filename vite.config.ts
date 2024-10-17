import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import * as glob from 'glob';
import fs from 'fs';

const readJson = (path: string) => JSON.parse(fs.readFileSync(path, 'utf-8'));

const createEntries = (rootDir: string) => {
  const tsConfig = readJson(path.resolve(rootDir, 'tsconfig.lib.json'));
  return glob
    .sync(
      tsConfig.include.map((dir: string) => path.resolve(rootDir, dir)),
      { ignore: tsConfig.exclude }
    )
    .reduce((acc, file) => {
      const outputName = path.relative(path.resolve(rootDir, 'src'), file).replace(/\.([tj])sx?$/, '');
      return { ...acc, [outputName]: file };
    }, {});
};

export function createViteConfig(rootDir: string) {
  const packageJson = readJson(path.resolve(rootDir, 'package.json'));

  const entries = createEntries(rootDir);

  return defineConfig({
    root: rootDir,
    plugins: [
      react(),
      nxViteTsPaths(),
      dts({
        entryRoot: 'src',
        tsconfigPath: path.join(rootDir, './tsconfig.lib.json'),
      }),
    ],
    build: {
      outDir: './dist',
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      lib: {
        entry: entries,
        name: packageJson.name,
        formats: ['es', 'cjs'],
      },
      rollupOptions: {
        external: [
          ...Object.keys(packageJson.dependencies || {}),
          ...Object.keys(packageJson.peerDependencies || {}),
          ...Object.keys(packageJson.devDependencies || {}),
          'react/jsx-runtime',
        ],
        output: {
          banner: `'use client';`,
        },
      },
    },
  });
}
