import {
  colorGenerator,
  createColorValueOptions,
  generateColorScale,
  generateColorVariables,
  generateDefaultColor,
  parseColor,
} from '../color-generator';
import { ThemeEnv } from '../../theme.types';
import { unwrapRE } from '@myraui/utils';
import { myraColors } from '../../colors';

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

  describe('generateDefaultColor', () => {
    it('should generate the variables for the DEFAULT color', () => {
      const variables = unwrapRE(generateDefaultColor('blue', '9'), env);

      expect(variables).toEqual([
        {
          name: '--prefix-colors-blue',
          value: 'var(--prefix-colors-blue-9)',
          reference: expect.any(Function),
        },
        {
          name: '--prefix-colors-blue-opacity',
          value: 'var(--prefix-colors-blue-9-opacity)',
          reference: expect.any(Function),
        },
      ]);
    });
  });

  describe('generateColorScale', () => {
    it('should return the value if it is not a color scale', () => {
      const value = unwrapRE(generateColorScale('blue', '#0000ff'), env);

      expect(value).toEqual('#0000ff');
    });

    it('should generate the color scale variables', () => {
      const value = unwrapRE(generateColorScale('blue', myraColors.blue.light), env) as any;

      expect(value).toEqual(
        expect.objectContaining({
          DEFAULT: {
            value: expect.any(Function),
            utilities: [
              {
                name: '--prefix-colors-blue',
                value: 'var(--prefix-colors-blue-9)',
                reference: expect.any(Function),
              },
              {
                name: '--prefix-colors-blue-opacity',
                value: 'var(--prefix-colors-blue-9-opacity)',
                reference: expect.any(Function),
              },
            ],
          },
          '9': {
            value: expect.any(Function),
            utilities: [
              {
                name: '--prefix-colors-blue-9',
                value: '206 100% 50%',
                reference: expect.any(Function),
              },
              {
                name: '--prefix-colors-blue-9-opacity',
                value: '',
                reference: expect.any(Function),
              },
            ],
          },
        })
      );
    });
  });

  describe('colorGenerator', () => {
    it('should build all the colors with a scale', () => {
      const colors = unwrapRE(colorGenerator({ blue: myraColors.blue.light, primary: 'blue' }), env);

      expect(colors).toEqual({
        colors: expect.objectContaining({
          blue: expect.objectContaining({
            value: expect.any(Function),
            utilities: expect.arrayContaining([
              {
                name: '--prefix-colors-blue',
                value: 'var(--prefix-colors-blue-9)',
                reference: expect.any(Function),
              },
              {
                name: '--prefix-colors-blue-opacity',
                value: 'var(--prefix-colors-blue-9-opacity)',
                reference: expect.any(Function),
              },
            ]),
          }),
          primary: 'blue',
        }),
      });
    });
  });
});
