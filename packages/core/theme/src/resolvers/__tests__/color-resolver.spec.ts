import { unwrapRE } from '@myraui/shared-utils';
import { colorResolver, createColorValue, generateColorValueFn } from '../color-resolver';
import * as RE from 'fp-ts/ReaderEither';
import { pipe } from 'fp-ts/lib/function';
import { colorVariable, opacityVariable } from '../../utils/css-variables';
import { ThemeEnv } from '../../theme.types';

const env: ThemeEnv = { prefix: 'prefix', defaultExtendTheme: 'light' };

describe('resolvers/color-resolver', () => {
  describe('generateColorValueFn', () => {
    const resolver = unwrapRE(
      pipe(
        colorVariable('primary'),
        RE.map((variables) => generateColorValueFn(...variables))
      ),
      { prefix: 'prefix', defaultExtendTheme: 'light' }
    );

    it('should use the provided value if the opacity is set with a slash', () => {
      expect(resolver({ opacityVariable: '', opacityValue: '90' })).toBe('hsl(var(--prefix-colors-primary) / 90)');
    });

    it('should use the myrauiOpacityVariable if no opacityValue was provided', () => {
      expect(resolver({ opacityVariable: '--tw-bg-opacity', opacityValue: '' })).toBe(
        'hsl(var(--prefix-colors-primary) / var(--prefix-colors-primary-opacity, var(--tw-bg-opacity)))'
      );
    });

    it('should use 1 if the opacityValue was not provided', () => {
      expect(resolver({ opacityVariable: '', opacityValue: '' })).toBe('hsl(var(--prefix-colors-primary) / var(--prefix-colors-primary-opacity, 1))');
    });

    it('should use the color value string', () => {
      const variable = unwrapRE(opacityVariable('primary'), env);

      expect(generateColorValueFn('12 12% 12%', variable)({ opacityVariable: '', opacityValue: '' })).toEqual(
        'hsl(12 12% 12% / var(--prefix-colors-primary-opacity, 1))'
      );
    });
  });
  describe('createColorValue', () => {
    it('should create a color value when the value has a shade', () => {
      const result = unwrapRE(createColorValue('primary', 'blue.12'), env) as any;

      expect(result).toEqual({
        DEFAULT: {
          value: expect.any(Function),
          utilities: [
            { name: '--prefix-colors-primary', value: 'var(--prefix-colors-blue-12)', reference: expect.any(Function) },
            { name: '--prefix-colors-primary-opacity', value: 'var(--prefix-colors-blue-12-opacity)', reference: expect.any(Function) },
          ],
        },
      });

      const valueFunction = result.DEFAULT.value;

      expect(valueFunction({ opacityVariable: '', opacityValue: '90' })).toBe('hsl(var(--prefix-colors-primary) / 90)');
    });

    it('should create a color value when the value has no shade', () => {
      const result = unwrapRE(createColorValue('primary', 'blue'), env);

      expect(result).toEqual({
        DEFAULT: {
          value: expect.any(Function),
          utilities: [
            { name: '--prefix-colors-primary', value: 'var(--prefix-colors-blue-9)', reference: expect.any(Function) },
            { name: '--prefix-colors-primary-opacity', value: 'var(--prefix-colors-blue-9-opacity)', reference: expect.any(Function) },
          ],
        },
      });
    });

    it('should use the shade provided instead of the one extracted from the value', () => {
      const result = unwrapRE(createColorValue('primary', 'blue', 12), env);

      expect(result).toEqual({
        12: {
          value: expect.any(Function),
          utilities: [
            { name: '--prefix-colors-primary-12', value: 'var(--prefix-colors-blue-12)', reference: expect.any(Function) },
            { name: '--prefix-colors-primary-12-opacity', value: 'var(--prefix-colors-blue-12-opacity)', reference: expect.any(Function) },
          ],
        },
      });
    });
  });

  describe('colorResolver', () => {
    it('should resolve color values to css variables', () => {
      const result = unwrapRE(colorResolver('primary', 'blue'), env);

      expect(Object.keys(result).length).toEqual(13);
      expect(result).toEqual(
        expect.objectContaining({
          DEFAULT: {
            value: expect.any(Function),
            utilities: expect.arrayContaining([
              { name: '--prefix-colors-primary', value: 'var(--prefix-colors-blue-9)', reference: expect.any(Function) },
              { name: '--prefix-colors-primary-opacity', value: 'var(--prefix-colors-blue-9-opacity)', reference: expect.any(Function) },
            ]),
          },
          1: {
            value: expect.any(Function),
            utilities: expect.arrayContaining([
              { name: '--prefix-colors-primary-1', value: 'var(--prefix-colors-blue-1)', reference: expect.any(Function) },
              { name: '--prefix-colors-primary-1-opacity', value: 'var(--prefix-colors-blue-1-opacity)', reference: expect.any(Function) },
            ]),
          },
          12: {
            value: expect.any(Function),
            utilities: expect.arrayContaining([
              { name: '--prefix-colors-primary-12', value: 'var(--prefix-colors-blue-12)', reference: expect.any(Function) },
              { name: '--prefix-colors-primary-12-opacity', value: 'var(--prefix-colors-blue-12-opacity)', reference: expect.any(Function) },
            ]),
          },
        })
      );
    });
  });
});
