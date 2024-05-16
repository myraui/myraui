import { computeForegroundColor } from '../compute-foreground-color';

describe('colors/utils/compute-foreground-color', () => {
  describe('computeForegroundColor', () => {
    const scale = {
      1: '#FF0000',
      2: '#00FF00',
      3: '#0000FF',
      4: '#FFFFFF',
      5: '#000000',
      DEFAULT: 2,
    } as any;

    it('should return the correct color', () => {
      expect(computeForegroundColor(scale, 1)).toBe('5');
      expect(computeForegroundColor(scale, 2)).toBe('5');
      expect(computeForegroundColor(scale, 3)).toBe('4');
      expect(computeForegroundColor(scale, 4)).toBe('5');
      expect(computeForegroundColor(scale, 5)).toBe('4');
      expect(computeForegroundColor(scale, 'DEFAULT')).toBe('4');
    });
  });
});
