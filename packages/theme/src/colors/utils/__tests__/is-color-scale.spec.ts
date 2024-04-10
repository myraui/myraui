import { isColorScale } from '../is-color-scale';

describe('colors/utils/is-color-scale', () => {
  describe('isColorScale', () => {
    it('should return false if the value is falsy', () => {
      expect(isColorScale(undefined)).toBe(false);
    });

    it('should return false if the value is not an object', () => {
      expect(isColorScale('')).toBe(false);
    });

    it('should return false if the value is not a color scale', () => {
      expect(isColorScale({})).toBe(false);
    });

    it('should return false if the value is an incomplete color scale', () => {
      expect(isColorScale({ 100: 'blue' })).toBe(false);
    });

    it('should return false if the value is not a valid a color scale', () => {
      expect(
        isColorScale({
          1: 'blue',
          2: 'red',
          3: 'green',
          4: 'yellow',
          5: 'purple',
          6: 'orange',
          7: 'pink',
          8: 'cyan',
          9: 'magenta',
          10: 'teal',
          11: 'white',
          12: 'black',
          13: 'gray',
        })
      ).toBe(false);
    });

    it('should return true if the value is a color scale', () => {
      expect(
        isColorScale({
          1: 'blue',
          2: 'red',
          3: 'green',
          4: 'yellow',
          5: 'purple',
          6: 'orange',
          7: 'pink',
          8: 'cyan',
          9: 'magenta',
          10: 'teal',
          11: 'white',
          12: 'black',
        })
      ).toBe(true);
    });
  });
});
