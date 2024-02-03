/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/packages/core/theme',

  plugins: [
    react(),
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsConfigFilePath: path.join(__dirname, './tsconfig.lib.json'),
      skipDiagnostics: true,
    }),
  ],
  build: {
    outDir: '../../../dist/packages/core/theme',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      entry: ['src/index.ts', 'src/plugin.ts'],
      name: '@myra-ui/theme',
      fileName: (format, entryName) => `${entryName}.${format}`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', /@myra-ui\/.*/],
    },
  },
});
