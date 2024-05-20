import { buildColorSchemeClasses, createComponentColorScheme } from '../component-theme';
import { unwrapRE } from '@myraui/shared-utils';

describe('utils/component-theme', () => {
  describe('createComponentColorScheme', () => {
    it('should create a color scheme from a component color scheme', () => {
      expect(createComponentColorScheme({ background: { dark: 'blue', light: 'green' }, foreground: 'blue' })).toEqual({
        dark: { background: 'blue' },
        light: { background: 'green', foreground: 'blue' },
      });

      expect(createComponentColorScheme({ background: 'blue', foreground: 'green' })).toEqual({
        light: { background: 'blue', foreground: 'green' },
      });

      expect(createComponentColorScheme('blue')).toEqual({
        light: { background: 'blue' },
      });
    });
  });

  describe('buildComponentTheme', () => {
    it('should generate CSS Variables from a component color scheme', () => {
      const result = unwrapRE(buildColorSchemeClasses({ background: 'blue', foreground: 'white' }), {
        prefix: 'prefix',
        defaultExtendTheme: 'light',
      });

      expect(result).toMatchObject({
        '--prefix-colors-color-scheme-1': 'var(--prefix-colors-blue-1)',
        '--prefix-colors-color-scheme-1-opacity': 'var(--prefix-colors-blue-1-opacity)',
        '--prefix-colors-color-scheme': 'var(--prefix-colors-blue)',
        '--prefix-colors-color-scheme-opacity': 'var(--prefix-colors-blue-opacity)',
        '--prefix-colors-color-scheme-foreground-1': 'var(--prefix-colors-white-1)',
        '--prefix-colors-color-scheme-foreground-1-opacity': 'var(--prefix-colors-white-1-opacity)',
      });
    });

    it('should resolve a themed color scheme', () => {
      const result = unwrapRE(buildColorSchemeClasses({ dark: 'green', light: 'blue.8' }), {
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
