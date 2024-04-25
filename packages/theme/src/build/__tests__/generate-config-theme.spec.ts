import { unwrapRE } from '@myraui/utils';
import { myraColors } from '../../colors';
import { generateConfigTheme } from '../generate-config-theme';
import { FullConfigTheme, ThemeEnv } from '../../theme.types';

const env: ThemeEnv = { defaultExtendTheme: 'light', prefix: 'prefix' };

describe('build/generate-config-theme', () => {
  describe('generateConfigTheme', () => {
    it('should generate the config theme based on the generators', () => {
      const theme = unwrapRE(
        generateConfigTheme({ colors: { background: 'colors.gray.1', gray: myraColors.gray.light }, spacingUnit: 4 } as FullConfigTheme),
        env
      );

      expect(theme).toEqual(
        expect.objectContaining({
          colors: {
            gray: myraColors.gray.light,
            background: expect.objectContaining({
              1: expect.objectContaining({
                name: '--prefix-colors-gray-1',
              }),
              2: expect.objectContaining({
                name: '--prefix-colors-gray-2',
              }),
              6: expect.objectContaining({
                name: '--prefix-colors-gray-6',
              }),
              12: expect.objectContaining({
                name: '--prefix-colors-gray-12',
              }),
              DEFAULT: '1',
            }),
          },
          spacing: expect.objectContaining({
            unit: 4,
            'unit-1': '0.25rem',
          }),
        })
      );
    });
  });
});
