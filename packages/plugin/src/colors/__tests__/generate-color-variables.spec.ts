import { expect } from '@storybook/jest';
import { createColorValueOptions, generateColorVariables } from '../generate-color-variables';
import { unwrapRE } from '@myraui/utils';

describe('colors/generate-color-variables', () => {
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
      const result = unwrapRE(generateColorVariables('blue', '#0000ff'), { prefix: 'prefix', defaultExtendTheme: 'light' });

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
