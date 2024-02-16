import { walkComponentThemeRecord } from './builder';

describe('builder', () => {
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
});
