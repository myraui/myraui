import { unwrapRE } from '@myraui/utils';
import { createMinSizes, spacingUnitGenerator } from '../spacing-unit-generator';
import { ThemeEnv } from '../../theme.types';

const env: ThemeEnv = { defaultExtendTheme: 'light', prefix: 'prefix' };

describe('generators/spacing-unit-generator', () => {
  describe('createMinSizes', () => {
    it('should create min sizes', () => {
      const minSizes = unwrapRE(createMinSizes(), env);

      expect(minSizes).toEqual(
        expect.objectContaining({
          'unit-1': {
            value: 'var(--prefix-spacing-unit-1)',
            utilities: [],
          },
        })
      );
    });
  });

  describe('spacingUnitGenerator', () => {
    it('should generate the spacing scale', () => {
      const scale = unwrapRE(spacingUnitGenerator(4), { prefix: 'prefix', defaultExtendTheme: 'light' });

      expect(scale).toEqual({
        spacing: expect.objectContaining({
          unit: 4,
          'unit-0.5': '0.125rem',
          'unit-1': '0.25rem',
          'unit-48': '12rem',
          'unit-96': '24rem',
          'unit-sm': '0.75rem',
          'unit-9xl': '40rem',
        }),
        minWidth: expect.objectContaining({
          'unit-1': expect.objectContaining({
            value: 'var(--prefix-spacing-unit-1)',
            utilities: [],
          }),
        }),
        minHeight: expect.objectContaining({
          'unit-1': expect.objectContaining({
            value: 'var(--prefix-spacing-unit-1)',
            utilities: [],
          }),
        }),
      });
    });
  });
});
