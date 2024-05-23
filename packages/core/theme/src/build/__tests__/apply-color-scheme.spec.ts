import { unwrapRE } from '@myraui/shared-utils';
import { applyColorSchemeUtilities, buildForegroundValues, colorSchemeMatcher, colorSchemeMatcherValues } from '../apply-color-scheme';
import { ThemeEnv } from '../../theme.types';

const env: ThemeEnv = { prefix: 'prefix', defaultExtendTheme: 'light' };

describe('build/apply-color-scheme', () => {
  describe('applyColorSchemeUtilities', () => {
    it('should return the correct value for default shade', () => {
      const result = unwrapRE(applyColorSchemeUtilities('color-scheme', 'test'), env);

      expect(result).toEqual(
        expect.objectContaining({
          '--prefix-color-scheme': 'var(--prefix-colors-test)',
          '--prefix-color-scheme-opacity': 'var(--prefix-colors-test-opacity)',
          '--prefix-color-scheme-1': 'var(--prefix-colors-test-1)',
          '--prefix-color-scheme-1-opacity': 'var(--prefix-colors-test-1-opacity)',
        })
      );
    });

    it('should return the correct value for other shades', () => {
      const result = unwrapRE(applyColorSchemeUtilities('color-scheme', 'test-1'), env);

      expect(result).toEqual(
        expect.objectContaining({
          '--prefix-color-scheme': 'var(--prefix-colors-test-1)',
          '--prefix-color-scheme-opacity': 'var(--prefix-colors-test-1-opacity)',
        })
      );
    });
  });

  describe('buildForegroundValues', () => {
    it('should return the correct values', () => {
      const colors = {
        primary: 'primary',
        secondary: 'secondary',
      };

      const result = buildForegroundValues(colors);

      expect(result).toEqual({
        '/primary': '/primary',
        '/secondary': '/secondary',
        'primary/primary': 'primary/primary',
        'primary/secondary': 'primary/secondary',
        'secondary/primary': 'secondary/primary',
        'secondary/secondary': 'secondary/secondary',
      });
    });
  });

  describe('colorSchemeMatcherValues', () => {
    it('should build both background and foreground values', () => {
      const colors = {
        primary: {
          DEFAULT: 'primary',
          1: 'primary-1',
        },
        secondary: {
          DEFAULT: 'secondary',
          1: 'secondary-1',
        },
      };

      const result = colorSchemeMatcherValues(colors);

      expect(result).toEqual({
        '/primary': '/primary',
        '/primary-1': '/primary-1',
        '/secondary': '/secondary',
        '/secondary-1': '/secondary-1',
        primary: 'primary',
        'primary-1': 'primary-1',
        secondary: 'secondary',
        'secondary-1': 'secondary-1',
        'primary/primary-1': 'primary/primary-1',
        'primary/primary': 'primary/primary',
        'primary/secondary-1': 'primary/secondary-1',
        'primary/secondary': 'primary/secondary',
        'primary-1/primary-1': 'primary-1/primary-1',
        'primary-1/primary': 'primary-1/primary',
        'primary-1/secondary-1': 'primary-1/secondary-1',
        'primary-1/secondary': 'primary-1/secondary',
        'secondary/primary-1': 'secondary/primary-1',
        'secondary/primary': 'secondary/primary',
        'secondary/secondary-1': 'secondary/secondary-1',
        'secondary/secondary': 'secondary/secondary',
        'secondary-1/primary-1': 'secondary-1/primary-1',
        'secondary-1/primary': 'secondary-1/primary',
        'secondary-1/secondary-1': 'secondary-1/secondary-1',
        'secondary-1/secondary': 'secondary-1/secondary',
      });
    });
  });

  describe('colorSchemeMatcher', () => {
    it('should return the correct values', () => {
      const result = colorSchemeMatcher(env)('primary/secondary');
      expect(result).toEqual(
        expect.objectContaining({
          '--prefix-color-scheme': 'var(--prefix-colors-primary)',
          '--prefix-color-scheme-opacity': 'var(--prefix-colors-primary-opacity)',
          '--prefix-color-scheme-1': 'var(--prefix-colors-primary-1)',
          '--prefix-color-scheme-1-opacity': 'var(--prefix-colors-primary-1-opacity)',
          '--prefix-color-scheme-foreground': 'var(--prefix-colors-secondary)',
          '--prefix-color-scheme-foreground-opacity': 'var(--prefix-colors-secondary-opacity)',
          '--prefix-color-scheme-foreground-1': 'var(--prefix-colors-secondary-1)',
          '--prefix-color-scheme-foreground-1-opacity': 'var(--prefix-colors-secondary-1-opacity)',
        })
      );
    });
  });
});
