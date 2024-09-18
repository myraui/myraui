import { flattenObject } from '../objects';

describe('objects', () => {
  describe('flattenObject', () => {
    it('should flatten an object', () => {
      const result = flattenObject({ primary: { dark: 'blue' } });
      expect(result).toEqual({ 'primary-dark': 'blue' });
    });

    it('should flatten an object with a prefix', () => {
      const result = flattenObject({ dark: 'blue' }, { prefix: 'primary' });
      expect(result).toEqual({ 'primary-dark': 'blue' });
    });

    it('should flatten an object with a custom delimiter', () => {
      const result = flattenObject({ primary: { dark: 'blue' } }, { delimiter: '.' });
      expect(result).toEqual({ 'primary.dark': 'blue' });
    });

    it('should flatten an object with a custom delimiter and prefix', () => {
      const result = flattenObject({ dark: 'blue' }, { delimiter: '.', prefix: 'primary' });
      expect(result).toEqual({ 'primary.dark': 'blue' });
    });
  });
});
