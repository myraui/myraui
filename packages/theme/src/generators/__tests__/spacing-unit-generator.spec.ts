import { unwrapRE } from '@myraui/utils';
import { createSpacingUnitKey, spacingUnitGenerator } from '../spacing-unit-generator';

describe('generators/spacing-unit-generator', () => {
  describe('createSpacingUnitKey', () => {
    it('should return evaluate values with dot', () => {
      expect(createSpacingUnitKey(3.5)).toEqual('unit-3_5');
    });

    it('should return evaluate values without dot', () => {
      expect(createSpacingUnitKey(3)).toEqual('unit-3');
    });
  });

  describe('spacingGenerator', () => {
    it('should generate the spacing scale', () => {
      const scale = unwrapRE(spacingUnitGenerator(4), { prefix: 'prefix' });

      expect(scale).toEqual(
        expect.objectContaining({
          unit: 4,
          'unit-1': '0.25rem',
          'unit-48': '12rem',
          'unit-96': '24rem',
        })
      );
    });
  });
});
