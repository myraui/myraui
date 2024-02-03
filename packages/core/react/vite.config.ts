/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/packages/core/react',

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
    outDir: '../../../dist/packages/core/react',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      entry: 'src/index.ts',
      name: '@myra-ui/react',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', /@myra-ui\/.*/],
    },
  },
});
