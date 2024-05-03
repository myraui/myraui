import { dataAttr } from '../assertion';

describe('assertion', () => {
  describe('dataAttr', () => {
    it('should return true if the condition is true', () => {
      const result = dataAttr(true);
      expect(result).toEqual('true');
    });

    it('should return undefined if the condition is false', () => {
      const result = dataAttr(false);
      expect(result).toEqual(undefined);
    });

    it('should return undefined if the condition is undefined', () => {
      const result = dataAttr(undefined);
      expect(result).toBeUndefined();
    });
  });
});
