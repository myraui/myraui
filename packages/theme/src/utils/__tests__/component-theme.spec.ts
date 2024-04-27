import { buildComponentColorScheme } from '../component-theme';
import { unwrapRE } from '@myraui/utils';

describe('utils/component-theme', () => {
  describe('buildComponentTheme', () => {
    it('should generate CSS Variables from a component color scheme', () => {
      const result = unwrapRE(buildComponentColorScheme('blue'), { prefix: 'prefix', defaultExtendTheme: 'light' });

      expect(result).toMatchObject({
        '--prefix-colors-color-scheme-1': 'var(--prefix-colors-blue-1)',
        '--prefix-colors-color-scheme-1-opacity': 'var(--prefix-colors-blue-1-opacity)',
        '--prefix-colors-color-scheme': 'var(--prefix-colors-blue-9)',
        '--prefix-colors-color-scheme-opacity': 'var(--prefix-colors-blue-9-opacity)',
      });
    });

    it('should resolve a themed color scheme', () => {
      const result = unwrapRE(buildComponentColorScheme({ _dark: 'green', _light: 'blue' }), { prefix: 'prefix', defaultExtendTheme: 'light' });

      expect(result).toMatchObject({
        '--prefix-colors-color-scheme-1': 'var(--prefix-colors-blue-1)',
        '--prefix-colors-color-scheme-1-opacity': 'var(--prefix-colors-blue-1-opacity)',
        '--prefix-colors-color-scheme': 'var(--prefix-colors-blue-9)',
        '--prefix-colors-color-scheme-opacity': 'var(--prefix-colors-blue-9-opacity)',
        '.dark &,[data-theme="dark"] &': expect.objectContaining({
          '--prefix-colors-color-scheme-1': 'var(--prefix-colors-green-1)',
          '--prefix-colors-color-scheme-1-opacity': 'var(--prefix-colors-green-1-opacity)',
          '--prefix-colors-color-scheme': 'var(--prefix-colors-green-9)',
          '--prefix-colors-color-scheme-opacity': 'var(--prefix-colors-green-9-opacity)',
        }),
      });
    });
  });
});
