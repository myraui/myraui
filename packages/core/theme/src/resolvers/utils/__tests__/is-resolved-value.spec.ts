import { isResolvedValue } from '../is-resolved-value';

describe('resolvers/utils', () => {
  describe('isResolvedValue', () => {
    it('should return true if the value is a ResolvedValue', () => {
      const value = {
        value: 'value',
        utilities: [],
      };
      const result = isResolvedValue(value);
      expect(result).toBeTruthy();
    });
    it('should return false if the value is not a ResolvedValue', () => {
      const value = {};
      const result = isResolvedValue(value);
      expect(result).toBeFalsy();
    });
  });
});
