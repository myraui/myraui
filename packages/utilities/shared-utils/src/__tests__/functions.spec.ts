import { fromArray, mapKeys, mergeObjects, swapKeys, toValues } from '../functions';

describe('functions', () => {
  describe('swapKeys', () => {
    it('should not change an empty object', () => {
      const result = swapKeys({});
      expect(result).toEqual({});
    });

    it('should swap keys of a nested object', () => {
      expect(swapKeys({ primary: { dark: 'blue' } })).toEqual({ dark: { primary: 'blue' } });

      // more than one key
      expect(swapKeys({ primary: { dark: 'blue' }, secondary: { dark: 'red' } })).toEqual({
        dark: { primary: 'blue', secondary: 'red' },
      });
    });
  });

  describe('mapKeys', () => {
    it('should map keys of an object', () => {
      const result = mapKeys((key) => `${String(key)}Key`)({ primary: 'blue' });
      expect(result).toEqual({ primaryKey: 'blue' });
    });

    it('should not change an empty object', () => {
      const result = mapKeys((key) => `${String(key)}Key`)({});
      expect(result).toEqual({});
    });
  });

  describe('mergeObjects', () => {
    it('should merge the root keys of objects', () => {
      const result = mergeObjects([{ primary: 'blue' }, { secondary: 'red' }]);
      expect(result).toEqual({ primary: 'blue', secondary: 'red' });
    });

    it('should merge the root keys of objects with the same key', () => {
      const result = mergeObjects([{ primary: 'blue' }, { primary: 'red' }]);
      expect(result).toEqual({ primary: 'red' });
    });

    it('should merge the root keys of objects with the same key and different values', () => {
      const result = mergeObjects([{ primary: 'blue', secondary: { background: 'green' } }, { primary: 'red' }, { primary: 'green' }]);
      expect(result).toEqual({ primary: 'green', secondary: { background: 'green' } });
    });
  });

  describe('toValues', () => {
    it('should return the values of an object', () => {
      const result = toValues({ primary: 'blue', secondary: 'red' });
      expect(result).toEqual(['blue', 'red']);
    });

    it('should return an empty array for an empty object', () => {
      const result = toValues({});
      expect(result).toEqual([]);
    });
  });

  describe('fromArray', () => {
    it('should create an object from an array', () => {
      const result = fromArray((key) => `${String(key)}Value`)(['primary', 'secondary']);
      expect(result).toEqual({ primary: 'primaryValue', secondary: 'secondaryValue' });
    });

    it('should create an empty object from an empty array', () => {
      const result = fromArray((key) => `${String(key)}Value`)([]);
      expect(result).toEqual({});
    });
  });
});
