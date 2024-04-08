import { pipe } from 'fp-ts/function';
import * as RE from 'fp-ts/ReaderEither';
import { buildComponentTheme, createSemanticTokens, normalizeSemanticRecord, resolveSemanticRecord } from '../semantic-tokens';

describe('theme', () => {
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

      console.log(JSON.stringify(resolveSemanticRecord(result), null, 2));

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

  describe('createSemanticTokens', () => {
    it('should build semantic tokens from a component theme', () => {
      const result = createSemanticTokens({
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
      const result = pipe(
        buildComponentTheme({
          colors: {
            primary: { _light: 'blue', _dark: 'white' },
            secondary: 'green',
          },
        }),
        RE.getOrElse(() => {
          throw new Error('Failed to generate CSS Variables');
        })
      )({ prefix: 'prefix' });

      expect(result).toMatchObject({
        '--prefix-colors-primary': '--prefix-colors-blue-9',
        '--prefix-colors-secondary': '--prefix-colors-green-9',
        '.dark &,[data-theme="dark"] &': {
          '--prefix-colors-primary': '--prefix-colors-white-9',
        },
      });
    });
  });
});
