import { unwrapRE } from '@myraui/utils';
import { createSpacingScale, createSpacingUnits } from '../create-spacing-scale';
import { SPACING_SCALE } from '../spacing-scale';

describe('layout/create-spacing-scale', () => {
  describe('createSpacingScale', () => {
    it('should generate the spacing scale based on the base font size', () => {
      const scale = createSpacingScale(4);

      expect(scale).toEqual(
        expect.objectContaining({
          '1': '0.25rem',
          '4': '1rem',
          '10': '2.5rem',
          '96': '24rem',
        })
      );

      expect(Object.keys(scale)).toHaveLength(SPACING_SCALE.length);
    });
  });

  describe('createSpacingUnits', () => {
    it('should generate the spacing unit keys', () => {
      const scale = unwrapRE(createSpacingUnits(), { prefix: 'prefix' });

      expect(scale).toEqual(
        expect.objectContaining({
          unit: expect.objectContaining({ name: '--prefix-spacing-unit', value: '' }),
          'unit-1': expect.objectContaining({ name: '--prefix-spacing-unit-1', value: '' }),
          'unit-96': expect.objectContaining({ name: '--prefix-spacing-unit-96', value: '' }),
        })
      );

      expect(Object.keys(scale)).toHaveLength(SPACING_SCALE.length);
    });
  });
});
