import { swapKeys } from '../objects';

describe('fp/objects', () => {
  describe('swapKeys', () => {
    it('should not change an empty object', () => {
      const result = swapKeys({});
      expect(result).toEqual({});
    });

    it('should swap keys of a nested object', () => {
      expect(swapKeys({ primary: { dark: 'blue' } })).toEqual({ dark: { primary: 'blue' } });

      // more than one key
      expect(swapKeys({ primary: { dark: 'blue' }, secondary: { dark: 'red' } })).toEqual({ dark: { primary: 'blue', secondary: 'red' } });
    });
  });
});
