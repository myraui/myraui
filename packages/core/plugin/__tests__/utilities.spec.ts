import { colorSchemeBgMatcher, colorSchemeMatchers, colorSchemeTextMatcher, extractColorSchemeColors } from '../src/utilities';

describe('utilities', () => {
  const bgColor = () => 'var(--bg-color)';
  const textColor = () => 'var(--text-color)';

  describe('extractColorSchemeColors', () => {
    it('should create the colors from an array', () => {
      const result = extractColorSchemeColors([bgColor, textColor]);

      expect(result).toEqual({
        background: {
          '--tw-bg-opacity': '1',
          'background-color': 'var(--bg-color)',
        },
        text: {
          '--tw-text-opacity': '1',
          color: 'var(--text-color)',
        },
      });
    });

    it('should create the colors from a single function', () => {
      const result = extractColorSchemeColors(bgColor);

      expect(result).toEqual({
        background: {
          '--tw-bg-opacity': '1',
          'background-color': 'var(--bg-color)',
        },
        text: undefined,
      });
    });

    it('should reverse the colors', () => {
      const result = extractColorSchemeColors([bgColor, textColor], true);

      expect(result).toEqual({
        background: {
          '--tw-bg-opacity': '1',
          'background-color': 'var(--text-color)',
        },
        text: {
          '--tw-text-opacity': '1',
          color: 'var(--bg-color)',
        },
      });
    });
  });

  describe('colorSchemeBgMatcher', () => {
    it('should create the background color', () => {
      const result = colorSchemeBgMatcher([bgColor, textColor]);

      expect(result).toEqual({
        '--tw-bg-opacity': '1',
        'background-color': 'var(--bg-color)',
        '--tw-text-opacity': '1',
        color: 'var(--text-color)',
      });
    });

    it('should create the background color with inverted colors', () => {
      const result = colorSchemeBgMatcher([bgColor, textColor], true);

      expect(result).toEqual({
        '--tw-bg-opacity': '1',
        'background-color': 'var(--text-color)',
        '--tw-text-opacity': '1',
        color: 'var(--bg-color)',
      });
    });
  });

  describe('colorSchemeTextMatcher', () => {
    it('should create the text color', () => {
      const result = colorSchemeTextMatcher([bgColor, textColor]);

      expect(result).toEqual({
        '--tw-text-opacity': '1',
        color: 'var(--text-color)',
      });
    });

    it('should create the text color with inverted colors', () => {
      const result = colorSchemeTextMatcher([bgColor, textColor], true);

      expect(result).toEqual({
        '--tw-text-opacity': '1',
        color: 'var(--bg-color)',
      });
    });

    it('should return an empty object if no text color is provided', () => {
      const result = colorSchemeTextMatcher(bgColor);

      expect(result).toEqual({});
    });
  });

  describe('colorSchemeMatchers', () => {
    it('should create the matchers', () => {
      const {
        'bg-color-scheme': bgColorScheme,
        'text-color-scheme': colorSchemeText,
        'bg-inverted-color-scheme': invertedBgColorScheme,
        'text-inverted-color-scheme': invertedColorSchemeText,
      } = colorSchemeMatchers() as any;

      const value = [bgColor, textColor] as any;

      expect(bgColorScheme(value)).toEqual(colorSchemeBgMatcher(value));
      expect(colorSchemeText(value)).toEqual(colorSchemeTextMatcher(value));
      expect(invertedBgColorScheme(value)).toEqual(colorSchemeBgMatcher(value, true));
      expect(invertedColorSchemeText(value)).toEqual(colorSchemeTextMatcher(value, true));
    });
  });
});
