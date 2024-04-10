import { unwrapRE } from '@myraui/utils';
import { generateSemanticTokenColor, generateSemanticTokenColors, generateThemeColor, generateThemeColors } from '../generate-theme-colors';
import { colorVariable, myraColors } from '@myraui/theme';

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
            name: '--prefix-colors-blue',
            value: '',
            reference: expect.any(Function),
          },
          {
            name: '--prefix-colors-blue-opacity',
            value: '',
            reference: expect.any(Function),
          },
        ],
        resolver: expect.any(Function),
        colorName: 'primary',
      });
    });
  });

  describe('generateThemeColors', () => {
    it('should generate the variables and resolvers for the theme colors', () => {
      const result = unwrapRE(generateThemeColors({ primary: 'blue', blue: myraColors.blue.light }), {
        prefix: 'prefix',
        defaultExtendTheme: 'light',
      });

      expect(result).toEqual(
        expect.objectContaining({
          variables: expect.arrayContaining([
            {
              name: '--prefix-colors-primary-1',
              value: '210 100% 99%',
              reference: expect.any(Function),
            },
            {
              name: '--prefix-colors-primary-1-opacity',
              value: '',
              reference: expect.any(Function),
            },
          ]),
          colors: expect.objectContaining({
            'primary-1': expect.any(Function),
            'primary-12': expect.any(Function),
          }),
        })
      );
    });
  });

  describe('generateSemanticTokenColors', () => {
    it('should generate the variables and resolvers for the semantic token colors', () => {
      const variables = unwrapRE(colorVariable('blue'), { prefix: 'prefix' });
      const result = unwrapRE(generateSemanticTokenColors({ primary: { primary: variables } }), {
        prefix: 'prefix',
        defaultExtendTheme: 'light',
      });

      expect(result).toEqual({
        variables: expect.arrayContaining([
          {
            name: '--prefix-colors-blue',
            value: '',
            reference: expect.any(Function),
          },
          {
            name: '--prefix-colors-blue-opacity',
            value: '',
            reference: expect.any(Function),
          },
        ]),
        colors: {
          primary: expect.any(Function),
        },
      });
    });
  });
});
