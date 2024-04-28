import { getByColorMode } from '../get-by-color-mode';
import { bronze } from '../../colors/bronze';

describe('colors/utils/get-by-color-mode', () => {
  describe('getByColorMode', () => {
    it('should return the color scale for a given color mode', () => {
      expect(getByColorMode('light')).toEqual(expect.objectContaining({ bronze: bronze.light }));

      expect(getByColorMode('dark')).toEqual(expect.objectContaining({ bronze: bronze.dark }));
    });
  });
});
