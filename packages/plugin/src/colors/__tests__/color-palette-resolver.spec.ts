import { unwrapRE } from '@myraui/utils';
import { colorPaletteResolver } from '../color-palette-resolver';

describe('colors/color-palette-resolver', () => {
  describe('colorPaletteResolver', () => {
    it('should resolve a valid color value', () => {
      const result = unwrapRE(colorPaletteResolver('red', '#ff0000cc'), { prefix: 'prefix' });

      expect(result).toEqual({
        red: {
          value: expect.any(Function),
          utilities: [
            { name: '--prefix-colors-red', value: '0 100% 50%', reference: expect.any(Function) },
            { name: '--prefix-colors-red-opacity', value: '0.80', reference: expect.any(Function) },
          ],
        },
      });

      const valueFunction = result.red.value;

      expect(valueFunction({ opacityVariable: '', opacityValue: '' })).toBe('hsl(0 100% 50% / var(--prefix-colors-red-opacity, 1))');
    });
  });
});
