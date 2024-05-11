import { unwrapRE } from '@myraui/shared-utils';
import { colorSchemeGenerator, createColorScheme, isColorScheme } from '../color-scheme-generator';
import { ThemeEnv } from '../../theme.types';

const env: ThemeEnv = { prefix: 'prefix', defaultExtendTheme: 'light' };

describe('generators/color-scheme-generator', () => {
  describe('isColorScheme', () => {
    it('should return true if the value is a color scheme', () => {
      expect(isColorScheme({ background: 'red', text: 'blue' })).toBeTruthy();
    });

    it('should return false if the value is not a color scheme', () => {
      expect(isColorScheme({ background: 'red' })).toBeFalsy();
      expect(isColorScheme({ text: 'blue' })).toBeFalsy();
      expect(isColorScheme({})).toBeFalsy();
      expect(isColorScheme('red')).toBeFalsy();
    });
  });

  describe('createColorScheme', () => {
    it('should return the color scheme if it is a color scheme', () => {
      expect(isColorScheme(createColorScheme({ background: 'red', text: 'blue' }))).toBeTruthy();
    });

    it('should create a color scheme', () => {
      expect(createColorScheme('red')).toEqual({ background: 'red', text: 'red' });
    });
  });
  describe('colorSchemeGenerator', () => {
    it('should generate the default color scheme', () => {
      const result = unwrapRE(colorSchemeGenerator('primary'), env) as any;

      console.log(result['colors']['color-scheme'].DEFAULT);

      expect(result).toEqual({
        colors: {
          'color-scheme': expect.objectContaining({
            1: {
              value: expect.any(Function),
              variables: [
                { name: '--prefix-colors-color-scheme-1', value: 'var(--prefix-colors-primary-1)', reference: expect.any(Function) },
                { name: '--prefix-colors-color-scheme-1-opacity', value: 'var(--prefix-colors-primary-1-opacity)', reference: expect.any(Function) },
              ],
            },
          }),
        },
      });
    });
  });
});
