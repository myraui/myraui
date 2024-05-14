import { buildComponentColorScheme, createComponentColorScheme } from '../component-theme';
import { unwrapRE } from '@myraui/shared-utils';

describe('utils/component-theme', () => {
  describe('createComponentColorScheme', () => {
    it('should create a color scheme from a component color scheme', () => {
      const result = createComponentColorScheme({ colorScheme: { dark: 'blue', light: 'green' }, textColorScheme: 'blue' });

      expect(result).toEqual({
        dark: { background: 'blue' },
        light: { background: 'green', text: 'blue' },
      });
    });
  });

  describe('buildComponentTheme', () => {
    it('should generate CSS Variables from a component color scheme', () => {
      const result = unwrapRE(buildComponentColorScheme({ colorScheme: 'blue', textColorScheme: 'white' }), {
        prefix: 'prefix',
        defaultExtendTheme: 'light',
      });

      expect(result).toMatchObject({
        '--prefix-colors-color-scheme-1': 'var(--prefix-colors-blue-1)',
        '--prefix-colors-color-scheme-1-opacity': 'var(--prefix-colors-blue-1-opacity)',
        '--prefix-colors-color-scheme': 'var(--prefix-colors-blue)',
        '--prefix-colors-color-scheme-opacity': 'var(--prefix-colors-blue-opacity)',
        '--prefix-colors-color-scheme-text-1': 'var(--prefix-colors-white-1)',
        '--prefix-colors-color-scheme-text-1-opacity': 'var(--prefix-colors-white-1-opacity)',
      });
    });

    it('should resolve a themed color scheme', () => {
      const result = unwrapRE(buildComponentColorScheme({ colorScheme: { dark: 'green', light: 'blue.8' } }), {
        prefix: 'prefix',
        defaultExtendTheme: 'light',
      });

      expect(result).toMatchObject({
        '--prefix-colors-color-scheme-1': 'var(--prefix-colors-blue-1)',
        '--prefix-colors-color-scheme-1-opacity': 'var(--prefix-colors-blue-1-opacity)',
        '--prefix-colors-color-scheme': 'var(--prefix-colors-blue-8)',
        '--prefix-colors-color-scheme-opacity': 'var(--prefix-colors-blue-8-opacity)',
        '.dark &,[data-theme="dark"] &': expect.objectContaining({
          '--prefix-colors-color-scheme-1': 'var(--prefix-colors-green-1)',
          '--prefix-colors-color-scheme-1-opacity': 'var(--prefix-colors-green-1-opacity)',
          '--prefix-colors-color-scheme': 'var(--prefix-colors-green)',
          '--prefix-colors-color-scheme-opacity': 'var(--prefix-colors-green-opacity)',
        }),
      });
    });
  });
});
