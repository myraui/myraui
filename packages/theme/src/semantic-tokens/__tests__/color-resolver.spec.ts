import { unwrapRE } from '@myraui/utils';
import { colorResolver, createColorValue, createShades } from '../color-resolver';

describe('semantic-tokens/color-resolver', () => {
  describe('createColorValue', () => {
    it('should create a color value when the value has a shade', () => {
      const result = unwrapRE(createColorValue('primary', 'blue.12'), { prefix: 'prefix' });

      expect(result).toEqual([
        { name: '--prefix-colors-primary', value: 'var(--prefix-colors-blue-12)', reference: expect.any(Function) },
        { name: '--prefix-colors-primary-opacity', value: 'var(--prefix-colors-blue-12-opacity)', reference: expect.any(Function) },
      ]);
    });

    it('should create a color value when the value has no shade', () => {
      const result = unwrapRE(createColorValue('primary', 'blue'), { prefix: 'prefix' });

      expect(result).toEqual([
        { name: '--prefix-colors-primary', value: 'var(--prefix-colors-blue-9)', reference: expect.any(Function) },
        { name: '--prefix-colors-primary-opacity', value: 'var(--prefix-colors-blue-9-opacity)', reference: expect.any(Function) },
      ]);
    });

    it('should use the shade provided instead of the one extracted from the value', () => {
      const result = unwrapRE(createColorValue('primary', 'blue', 12), { prefix: 'prefix' });

      expect(result).toEqual([
        { name: '--prefix-colors-primary-12', value: 'var(--prefix-colors-blue-12)', reference: expect.any(Function) },
        { name: '--prefix-colors-primary-12-opacity', value: 'var(--prefix-colors-blue-12-opacity)', reference: expect.any(Function) },
      ]);
    });
  });

  describe('createShades', () => {
    it('should create color values for all shades', () => {
      const result = unwrapRE(createShades('primary', 'blue'), { prefix: 'prefix' });

      expect(result.length).toEqual(26);
      expect(result).toEqual(
        expect.arrayContaining([
          { name: '--prefix-colors-primary', value: 'var(--prefix-colors-blue-9)', reference: expect.any(Function) },
          { name: '--prefix-colors-primary-opacity', value: 'var(--prefix-colors-blue-9-opacity)', reference: expect.any(Function) },
          { name: '--prefix-colors-primary-1', value: 'var(--prefix-colors-blue-1)', reference: expect.any(Function) },
          { name: '--prefix-colors-primary-1-opacity', value: 'var(--prefix-colors-blue-1-opacity)', reference: expect.any(Function) },
          { name: '--prefix-colors-primary-12', value: 'var(--prefix-colors-blue-12)', reference: expect.any(Function) },
          { name: '--prefix-colors-primary-12-opacity', value: 'var(--prefix-colors-blue-12-opacity)', reference: expect.any(Function) },
        ])
      );
    });
  });

  describe('colorResolver', () => {
    it('should resolve color values to css variables', () => {
      const result = unwrapRE(colorResolver({ primary: 'blue', secondary: 'green' }), { prefix: 'prefix' });

      expect(result.length).toEqual(52);
      expect(result).toEqual(
        expect.arrayContaining([
          { name: '--prefix-colors-primary', value: 'var(--prefix-colors-blue-9)', reference: expect.any(Function) },
          { name: '--prefix-colors-primary-opacity', value: 'var(--prefix-colors-blue-9-opacity)', reference: expect.any(Function) },
          { name: '--prefix-colors-secondary', value: 'var(--prefix-colors-green-9)', reference: expect.any(Function) },
          { name: '--prefix-colors-secondary-opacity', value: 'var(--prefix-colors-green-9-opacity)', reference: expect.any(Function) },
        ])
      );
    });
  });
});
