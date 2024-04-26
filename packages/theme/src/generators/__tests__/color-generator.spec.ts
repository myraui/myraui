import { createColorValueOptions, generateColorVariables, parseColor } from '../color-generator';
import { ThemeEnv } from '../../theme.types';
import { unwrapRE } from '@myraui/utils';

const env: ThemeEnv = { defaultExtendTheme: 'light', prefix: 'prefix' };

describe('generators/color-palette-generator', () => {
  describe('parseColor', () => {
    it('should return the parsed color', () => {
      expect(parseColor('red')).toEqual([0, 100, 50]);
    });

    it('should return black if the color is invalid', () => {
      expect(parseColor('invalid')).toEqual([0, 0, 0, 1]);
    });
  });

  describe('createColorValueOptions', () => {
    it('should resolve the hsl value of a color', () => {
      expect(createColorValueOptions('hsl(0, 100%, 50%)')).toEqual({ color: { value: '0 100% 50%' }, opacity: { value: undefined } });
    });

    it('should resolve the hsla value of a color', () => {
      expect(createColorValueOptions('hsla(0, 100%, 50%, 0.5)')).toEqual({ color: { value: '0 100% 50%' }, opacity: { value: '0.50' } });
    });
  });

  describe('generateColorVariables', () => {
    it('should generate color variables', () => {
      const result = unwrapRE(generateColorVariables('blue', '#0000ff'), env);

      expect(result).toEqual([
        {
          name: '--prefix-colors-blue',
          value: '240 100% 50%',
          reference: expect.any(Function),
        },
        {
          name: '--prefix-colors-blue-opacity',
          value: '',
          reference: expect.any(Function),
        },
      ]);
    });
  });
});
