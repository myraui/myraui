import { mapPropsVariants } from '../props';

describe('utils', () => {
  describe('mapPropsVariants', () => {
    it('should return the props and variants', () => {
      const props = { a: 1, b: 2, c: 3 };

      const result = mapPropsVariants(props, ['a', 'b']);

      expect(result).toEqual({ props: { c: 3 }, variantProps: { a: 1, b: 2 } });
    });

    it('should return the props and variants with common keys', () => {
      const props = { a: 1, b: 2, c: 3 };

      const result = mapPropsVariants(props, ['a', 'b'], false);

      expect(result).toEqual({
        props: { a: 1, b: 2, c: 3 },
        variantProps: { a: 1, b: 2 },
      });
    });
  });
});
