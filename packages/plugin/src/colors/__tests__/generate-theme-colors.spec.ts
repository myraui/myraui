import { unwrapRE } from '@myraui/utils';
import { generateSemanticTokenColor, generateThemeColor } from '../generate-theme-colors';
import { colorVariable } from '@myraui/theme';

describe('colors/generate-theme-colors', () => {
  describe('generateThemeColor', () => {
    it('should generate the variables and resolver for the color', () => {
      const result = unwrapRE(generateThemeColor('blue', '#0000ff'), { prefix: 'prefix', defaultExtendTheme: 'light' });

      expect(result).toEqual({
        variables: [
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
        ],
        resolver: expect.any(Function),
        colorName: 'blue',
      });
    });
  });

  describe('generateSemanticTokenColor', () => {
    it('should generate the variables and resolver for the semantic token color', () => {
      const variables = unwrapRE(colorVariable('blue'), { prefix: 'prefix' });
      const result = unwrapRE(generateSemanticTokenColor('primary', variables), { prefix: 'prefix', defaultExtendTheme: 'light' });

      expect(result).toEqual({
        variables: [
          {
            name: '--prefix-colors-background-blue',
            value: '240 100% 50%',
            reference: expect.any(Function),
          },
          {
            name: '--prefix-colors-background-blue-opacity',
            value: '',
            reference: expect.any(Function),
          },
        ],
        resolver: expect.any(Function),
        colorName: 'primary',
      });
    });
  });
});
