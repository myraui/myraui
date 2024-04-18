import { unwrapRE } from '@myraui/utils';
import { colorResolver, createColorValue, generateColorValueFn } from '../color-resolver';
import * as RE from 'fp-ts/ReaderEither';
import { pipe } from 'fp-ts/lib/function';
import { colorVariable, opacityVariable } from '../../utils';

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
      const variable = unwrapRE(opacityVariable('primary'), { prefix: 'prefix' });

      expect(generateColorValueFn('12 12% 12%', variable)({ opacityVariable: '', opacityValue: '' })).toEqual(
        'hsl(12 12% 12% / var(--prefix-colors-primary-opacity, 1))'
      );
    });
  });
  describe('createColorValue', () => {
    it('should create a color value when the value has a shade', () => {
      const result = unwrapRE(createColorValue('primary', 'blue.12'), { prefix: 'prefix' });

      expect(result).toEqual({
        primary: {
          value: expect.any(Function),
          utilities: [
            { name: '--prefix-colors-primary', value: 'var(--prefix-colors-blue-12)', reference: expect.any(Function) },
            { name: '--prefix-colors-primary-opacity', value: 'var(--prefix-colors-blue-12-opacity)', reference: expect.any(Function) },
          ],
        },
      });

      const valueFuction = result.primary.value;

      expect(valueFuction({ opacityVariable: '', opacityValue: '90' })).toBe('hsl(var(--prefix-colors-primary) / 90)');
    });

    it('should create a color value when the value has no shade', () => {
      const result = unwrapRE(createColorValue('primary', 'blue'), { prefix: 'prefix' });

      expect(result).toEqual({
        primary: {
          value: expect.any(Function),
          utilities: [
            { name: '--prefix-colors-primary', value: 'var(--prefix-colors-blue-9)', reference: expect.any(Function) },
            { name: '--prefix-colors-primary-opacity', value: 'var(--prefix-colors-blue-9-opacity)', reference: expect.any(Function) },
          ],
        },
      });
    });

    it('should use the shade provided instead of the one extracted from the value', () => {
      const result = unwrapRE(createColorValue('primary', 'blue', 12), { prefix: 'prefix' });

      expect(result).toEqual({
        'primary-12': {
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
      const result = unwrapRE(colorResolver('primary', 'blue'), { prefix: 'prefix' });

      expect(Object.keys(result).length).toEqual(13);
      expect(result).toEqual(
        expect.objectContaining({
          primary: {
            value: expect.any(Function),
            utilities: expect.arrayContaining([
              { name: '--prefix-colors-primary', value: 'var(--prefix-colors-blue-9)', reference: expect.any(Function) },
              { name: '--prefix-colors-primary-opacity', value: 'var(--prefix-colors-blue-9-opacity)', reference: expect.any(Function) },
            ]),
          },
          'primary-1': {
            value: expect.any(Function),
            utilities: expect.arrayContaining([
              { name: '--prefix-colors-primary-1', value: 'var(--prefix-colors-blue-1)', reference: expect.any(Function) },
              { name: '--prefix-colors-primary-1-opacity', value: 'var(--prefix-colors-blue-1-opacity)', reference: expect.any(Function) },
            ]),
          },
          'primary-12': {
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
