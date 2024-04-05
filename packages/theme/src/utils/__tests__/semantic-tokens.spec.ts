import { pipe } from 'fp-ts/function';
import * as RE from 'fp-ts/ReaderEither';
import {
  buildComponentTheme,
  buildSemanticRecord,
  buildSemanticTokens,
  createSemanticTokens,
  resolveSemanticTokens,
  walkComponentThemeRecord,
} from '../semantic-tokens';

describe('semantic-tokens', () => {
  describe('walkComponentThemeRecord', () => {
    it('should transform a themeless value', () => {
      const result = walkComponentThemeRecord<string>({ primary: 'blue' });

      expect(result).toEqual({ light: { primary: 'blue' } });
    });

    it('should transform a themed value', () => {
      const result = walkComponentThemeRecord<string>({ primary: { _light: 'blue' } });

      expect(result).toEqual({ light: { primary: 'blue' } });
    });

    it('should transform a nested themed value', () => {
      const result = walkComponentThemeRecord<string>({ backgrounds: { neutral: { _light: 'white', _dark: 'black' } } });

      expect(result).toEqual({ light: { backgrounds: { neutral: 'white' } }, dark: { backgrounds: { neutral: 'black' } } });
    });

    it('should transform a nested themed value with a themeless value', () => {
      const result = walkComponentThemeRecord<string>({
        backgrounds: {
          neutral: { _light: 'white', _dark: 'black' },
          primary: 'blue',
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

  describe('buildSemanticRecord', () => {
    it('should generate CSS Variables from a semantic record', () => {
      const record = { background: { primary: 'blue' } };

      const result = buildSemanticRecord(record, 'prefix', 'colors');

      expect(result).toMatchObject({
        'background-primary': '--prefix-colors-blue-9',
        'background-primary-1': '--prefix-colors-blue-1',
        'background-primary-9-opacity': '--prefix-colors-blue-9-opacity',
        'background-primary-opacity': '--prefix-colors-blue-9-opacity',
      });
    });

    it('should resolve for non-nested tokens', () => {
      const result = buildSemanticRecord({ background: 'blue' }, 'prefix', 'colors');

      expect(result).toMatchObject({
        background: '--prefix-colors-blue-9',
        'background-opacity': '--prefix-colors-blue-9-opacity',
        'background-12': '--prefix-colors-blue-12',
        'background-12-opacity': '--prefix-colors-blue-12-opacity',
      });
    });
  });

  describe('resolveSemanticTokens', () => {
    it('should resolve semantic tokens', () => {
      const result = pipe(
        resolveSemanticTokens({ colors: { background: { primary: 'blue' } } }),
        RE.getOrElse(() => {
          throw new Error('Failed to resolve semantic tokens');
        })
      )({ prefix: 'prefix' });

      expect(result).toMatchObject({
        colors: {
          'background-primary': '--prefix-colors-blue-9',
          'background-primary-opacity': '--prefix-colors-blue-9-opacity',
          'background-primary-12': '--prefix-colors-blue-12',
          'background-primary-12-opacity': '--prefix-colors-blue-12-opacity',
        },
      });
    });
  });

  describe('buildSemanticTokens', () => {
    it('should generate CSS Variables from semantic tokens', () => {
      const result = pipe(
        buildSemanticTokens({ colors: { primary: 'blue' } }),
        RE.getOrElse(() => {
          throw new Error('Failed to generate CSS Variables');
        })
      )({ prefix: 'prefix' });

      expect(result).toMatchObject({
        '--prefix-colors-primary': '--prefix-colors-blue-9',
        '--prefix-colors-primary-opacity': '--prefix-colors-blue-9-opacity',
        '--prefix-colors-primary-12': '--prefix-colors-blue-12',
        '--prefix-colors-primary-12-opacity': '--prefix-colors-blue-12-opacity',
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
