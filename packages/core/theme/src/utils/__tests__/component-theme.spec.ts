import { buildComponentColorScheme } from '../component-theme';
import { ThemeEnv } from '../../theme.types';
import { unwrapRE } from '@myraui/shared-utils';

const env: ThemeEnv = { prefix: 'prefix', defaultExtendTheme: 'light' };

describe('utils/component-theme', () => {
  describe('buildColorSchemeClasses', () => {
    it('should generate classes from a component color scheme', () => {
      const result = unwrapRE(buildComponentColorScheme('green.2/blue'), env);

      expect(result).toEqual(
        expect.objectContaining({
          '--prefix-color-scheme': 'var(--prefix-colors-green-2)',
          '--prefix-color-scheme-opacity': 'var(--prefix-colors-green-2-opacity)',
          '--prefix-color-scheme-foreground': 'var(--prefix-colors-blue)',
          '--prefix-color-scheme-foreground-opacity': 'var(--prefix-colors-blue-opacity)',
        })
      );
    });

    it('should resolve a themed color scheme', () => {
      const result = unwrapRE(buildComponentColorScheme({ dark: 'green/green', light: 'blue.8/blue' }), env);

      expect(result).toEqual(
        expect.objectContaining({
          '--prefix-color-scheme': 'var(--prefix-colors-blue-8)',
          '--prefix-color-scheme-opacity': 'var(--prefix-colors-blue-8-opacity)',
          '--prefix-color-scheme-foreground': 'var(--prefix-colors-blue)',
          '--prefix-color-scheme-foreground-opacity': 'var(--prefix-colors-blue-opacity)',
          '.dark &,[data-theme="dark"] &': expect.objectContaining({
            '--prefix-color-scheme': 'var(--prefix-colors-green)',
            '--prefix-color-scheme-opacity': 'var(--prefix-colors-green-opacity)',
            '--prefix-color-scheme-foreground': 'var(--prefix-colors-green)',
            '--prefix-color-scheme-foreground-opacity': 'var(--prefix-colors-green-opacity)',
          }),
        })
      );
    });

    it('should resolve a missing background', () => {
      expect(unwrapRE(buildComponentColorScheme({ dark: '/blue', light: '/white' }), env)).toEqual(
        expect.objectContaining({
          '--prefix-color-scheme-foreground': 'var(--prefix-colors-white)',
          '--prefix-color-scheme-foreground-opacity': 'var(--prefix-colors-white-opacity)',
          '.dark &,[data-theme="dark"] &': expect.objectContaining({
            '--prefix-color-scheme-foreground': 'var(--prefix-colors-blue)',
            '--prefix-color-scheme-foreground-opacity': 'var(--prefix-colors-blue-opacity)',
          }),
        })
      );
      expect(unwrapRE(buildComponentColorScheme({ dark: '/blue', light: 'green/white' }), env)).toEqual(
        expect.objectContaining({
          '--prefix-color-scheme': 'var(--prefix-colors-green)',
          '--prefix-color-scheme-opacity': 'var(--prefix-colors-green-opacity)',
          '--prefix-color-scheme-foreground': 'var(--prefix-colors-white)',
          '--prefix-color-scheme-foreground-opacity': 'var(--prefix-colors-white-opacity)',
          '.dark &,[data-theme="dark"] &': expect.objectContaining({
            '--prefix-color-scheme-foreground': 'var(--prefix-colors-blue)',
            '--prefix-color-scheme-foreground-opacity': 'var(--prefix-colors-blue-opacity)',
          }),
        })
      );
    });
    it('should be empty when no color scheme is provided', () => {
      const result = unwrapRE(buildComponentColorScheme(), env);

      expect(result).toEqual({});
    });

    it('should resolve a text only color scheme', () => {
      const result = unwrapRE(buildComponentColorScheme('green.2', true), env);

      expect(result).toEqual(
        expect.objectContaining({
          '--prefix-color-scheme-foreground': 'var(--prefix-colors-green-2)',
          '--prefix-color-scheme-foreground-opacity': 'var(--prefix-colors-green-2-opacity)',
        })
      );
    });

    it('should resolve a text only color scheme with both colors', () => {
      const result = unwrapRE(buildComponentColorScheme({ dark: 'green/green', light: 'blue.8/blue' }, true), env);

      expect(result).toEqual(
        expect.objectContaining({
          '--prefix-color-scheme-foreground': 'var(--prefix-colors-blue)',
          '--prefix-color-scheme-foreground-opacity': 'var(--prefix-colors-blue-opacity)',
          '.dark &,[data-theme="dark"] &': expect.objectContaining({
            '--prefix-color-scheme-foreground': 'var(--prefix-colors-green)',
            '--prefix-color-scheme-foreground-opacity': 'var(--prefix-colors-green-opacity)',
          }),
        })
      );
    });
  });
});
