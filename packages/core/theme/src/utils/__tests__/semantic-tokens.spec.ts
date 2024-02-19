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
        'background-primary': '--prefix-colors-blue-7',
        'background-primary-1': '--prefix-colors-blue-1',
        'background-primary-9-opacity': '--prefix-colors-blue-9-opacity',
        'background-primary-opacity': '--prefix-colors-blue-7-opacity',
      });
    });

    it('should resolve for non-nested tokens', () => {
      const result = buildSemanticRecord({ background: 'blue' }, 'prefix', 'colors');

      expect(result).toMatchObject({
        background: '--prefix-colors-blue-7',
        'background-opacity': '--prefix-colors-blue-7-opacity',
        'background-12': '--prefix-colors-blue-12',
        'background-12-opacity': '--prefix-colors-blue-12-opacity',
      });
    });
  });

  describe('resolveSemanticTokens', () => {
    it('should resolve semantic tokens', () => {
      const result = resolveSemanticTokens('prefix', { colors: { background: { primary: 'blue' } } });

      expect(result).toMatchObject({
        colors: {
          'background-primary': '--prefix-colors-blue-7',
          'background-primary-opacity': '--prefix-colors-blue-7-opacity',
          'background-primary-12': '--prefix-colors-blue-12',
          'background-primary-12-opacity': '--prefix-colors-blue-12-opacity',
        },
      });
    });
  });

  describe('buildSemanticTokens', () => {
    it('should generate CSS Variables from semantic tokens', () => {
      const result = buildSemanticTokens('prefix', { colors: { primary: 'blue' } });

      expect(result).toMatchObject({
        '--prefix-colors-primary': '--prefix-colors-blue-7',
        '--prefix-colors-primary-opacity': '--prefix-colors-blue-7-opacity',
        '--prefix-colors-primary-12': '--prefix-colors-blue-12',
        '--prefix-colors-primary-12-opacity': '--prefix-colors-blue-12-opacity',
      });
    });
  });

  describe('buildComponentTheme', () => {
    it('should generate CSS Variables from a component theme', () => {
      const result = buildComponentTheme('prefix', {
        colors: {
          primary: { _light: 'blue', _dark: 'white' },
          secondary: 'green',
        },
      });

      expect(result).toMatchObject({
        '--prefix-colors-primary': '--prefix-colors-blue-7',
        '--prefix-colors-secondary': '--prefix-colors-green-7',
        '.dark &,[data-theme="dark"] &': {
          '--prefix-colors-primary': '--prefix-colors-white-7',
        },
      });
    });
  });
});
