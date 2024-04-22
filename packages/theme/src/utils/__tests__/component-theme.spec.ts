import { buildComponentTheme, buildThemedThemeToken, normalizeThemeToken, resolveComponentTheme } from '../component-theme';
import { unwrapRE } from '@myraui/utils';

describe('utils/component-theme', () => {
  describe('normalizeThemeToken', () => {
    it('should transform a themeless value', () => {
      const result = normalizeThemeToken<string>({ primary: 'blue' });

      expect(result).toEqual({ primary: { _light: 'blue' } });
    });

    it('should transform a themed value', () => {
      const result = normalizeThemeToken<string>({ primary: { _light: 'blue' } });

      expect(result).toEqual({ primary: { _light: 'blue' } });
    });

    it('should transform a nested themed value', () => {
      const result = normalizeThemeToken<string>({ backgrounds: { neutral: { _light: 'white', _dark: 'black' } } });

      expect(result).toEqual({ backgrounds: { neutral: { _light: 'white', _dark: 'black' } } });
    });

    it('should transform a nested themed value with a themeless value', () => {
      const result = normalizeThemeToken<string>({
        backgrounds: {
          neutral: { _light: 'white', _dark: 'black' },
          primary: 'blue',
        },
      });

      expect(result).toEqual({
        backgrounds: {
          neutral: { _light: 'white', _dark: 'black' },
          primary: { _light: 'blue' },
        },
      });
    });
  });

  describe('buildThemedThemeToken', () => {
    it('should transform a themed value', () => {
      const result = buildThemedThemeToken<string>({ primary: { _light: 'blue' } });

      expect(result).toEqual({ light: { primary: 'blue' } });
    });

    it('should transform a nested themed value', () => {
      const result = buildThemedThemeToken<string>({ backgrounds: { neutral: { _light: 'white', _dark: 'black' } } });

      expect(result).toEqual({ light: { backgrounds: { neutral: 'white' } }, dark: { backgrounds: { neutral: 'black' } } });
    });

    it('should transform a nested themed value with a themeless value', () => {
      const result = buildThemedThemeToken<string>({
        backgrounds: {
          neutral: { _light: 'white', _dark: 'black' },
        },
        primary: { _light: 'blue' },
      });

      expect(result).toEqual({
        light: { backgrounds: { neutral: 'white' }, primary: 'blue' },
        dark: { backgrounds: { neutral: 'black' } },
      });
    });
  });

  describe('resolveComponentTheme', () => {
    it('should build themed tokens from a component theme', () => {
      const result = resolveComponentTheme({
        colors: {
          primary: {
            background: { _light: 'blue', _dark: 'white' },
          },
          accent: { _light: 'red', _dark: 'green' },
          secondary: 'green',
        },
      });

      expect(result).toEqual({
        light: {
          colors: {
            primary: {
              background: 'blue',
            },
            secondary: 'green',
            accent: 'red',
          },
        },
        dark: {
          colors: {
            primary: {
              background: 'white',
            },
            accent: 'green',
          },
        },
      });
    });
  });

  describe('buildComponentTheme', () => {
    it('should generate CSS Variables from a component theme', () => {
      const result = unwrapRE(
        buildComponentTheme({
          colors: {
            primary: { background: { _light: 'blue', _dark: 'white' } },
            secondary: 'green',
          },
        }),
        { prefix: 'prefix', defaultExtendTheme: 'light' }
      );

      expect(result).toMatchObject({
        '--prefix-colors-primary-background': 'var(--prefix-colors-blue-9)',
        '--prefix-colors-primary-background-opacity': 'var(--prefix-colors-blue-9-opacity)',
        '--prefix-colors-secondary': 'var(--prefix-colors-green-9)',
        '.dark &,[data-theme="dark"] &': {
          '--prefix-colors-primary-background': 'var(--prefix-colors-white-9)',
          '--prefix-colors-primary-background-opacity': 'var(--prefix-colors-white-9-opacity)',
        },
      });
    });
  });
});
