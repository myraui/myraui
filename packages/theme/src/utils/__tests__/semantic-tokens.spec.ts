import { buildComponentTheme, normalizeSemanticRecord, resolveComponentTheme, resolveSemanticRecord } from '../semantic-tokens';
import { unwrapRE } from '@myraui/utils';

describe('utils/semantic-tokens', () => {
  describe('normalizeSemanticRecord', () => {
    it('should transform a themeless value', () => {
      const result = normalizeSemanticRecord<string>({ primary: 'blue' });

      expect(result).toEqual({ primary: { _light: 'blue' } });
    });

    it('should transform a themed value', () => {
      const result = normalizeSemanticRecord<string>({ primary: { _light: 'blue' } });

      expect(result).toEqual({ primary: { _light: 'blue' } });
    });

    it('should transform a nested themed value', () => {
      const result = normalizeSemanticRecord<string>({ backgrounds: { neutral: { _light: 'white', _dark: 'black' } } });

      expect(result).toEqual({ backgrounds: { neutral: { _light: 'white', _dark: 'black' } } });
    });

    it('should transform a nested themed value with a themeless value', () => {
      const result = normalizeSemanticRecord<string>({
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

  describe('resolveSemanticRecord', () => {
    it('should transform a themed value', () => {
      const result = resolveSemanticRecord<string>({ primary: { _light: 'blue' } });

      expect(result).toEqual({ light: { primary: 'blue' } });
    });

    it('should transform a nested themed value', () => {
      const result = resolveSemanticRecord<string>({ backgrounds: { neutral: { _light: 'white', _dark: 'black' } } });

      expect(result).toEqual({ light: { backgrounds: { neutral: 'white' } }, dark: { backgrounds: { neutral: 'black' } } });
    });

    it('should transform a nested themed value with a themeless value', () => {
      const result = resolveSemanticRecord<string>({
        backgrounds: {
          neutral: { _light: 'white', _dark: 'black' },
          primary: { _light: 'blue' },
        },
      });

      expect(result).toEqual({
        light: { backgrounds: { neutral: 'white', primary: 'blue' } },
        dark: { backgrounds: { neutral: 'black' } },
      });
    });
  });

  describe('resolveComponentTheme', () => {
    it('should build semantic tokens from a component theme', () => {
      const result = resolveComponentTheme({
        colors: {
          primary: { _light: 'blue', _dark: 'white' },
          secondary: 'green',
        },
      });

      expect(result).toEqual({
        light: {
          colors: {
            primary: 'blue',
            secondary: 'green',
          },
        },
        dark: {
          colors: {
            primary: 'white',
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
            primary: { _light: 'blue', _dark: 'white' },
            secondary: 'green',
          },
        }),
        { prefix: 'prefix' }
      );

      expect(result).toMatchObject({
        '--prefix-colors-primary': 'var(--prefix-colors-blue-9)',
        '--prefix-colors-secondary': 'var(--prefix-colors-green-9)',
        '.dark &,[data-theme="dark"] &': {
          '--prefix-colors-primary': 'var(--prefix-colors-white-9)',
        },
      });
    });
  });
});
