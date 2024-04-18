import { unwrapRE } from '@myraui/utils';
import { generateThemeColorPalette } from '../generate-theme-color-palette';
import { myraColors } from '@myraui/theme';

describe('colors/generate-theme-color-palette', () => {
  describe('generateThemeColors', () => {
    it('should generate the variables and resolvers for the theme colors', () => {
      const result = unwrapRE(generateThemeColorPalette({ red: myraColors.red.light, blue: myraColors.blue.light }), {
        prefix: 'prefix',
        defaultExtendTheme: 'light',
      });

      expect(result).toEqual(
        expect.objectContaining({
          'blue-1': {
            value: expect.any(Function),
            utilities: [
              { name: '--prefix-colors-blue-1', value: '210 100% 99%', reference: expect.any(Function) },
              { name: '--prefix-colors-blue-1-opacity', value: '', reference: expect.any(Function) },
            ],
          },
          'red-1': {
            value: expect.any(Function),
            utilities: [
              { name: '--prefix-colors-red-1', value: '0 100% 99%', reference: expect.any(Function) },
              { name: '--prefix-colors-red-1-opacity', value: '', reference: expect.any(Function) },
            ],
          },
        })
      );
    });
  });
});
