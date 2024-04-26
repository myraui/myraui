import { unwrapRE } from '@myraui/utils';
import { myraColors } from '../../colors';
import { generateConfigTheme } from '../generate-config-theme';
import { FullConfigTheme, ThemeEnv } from '../../theme.types';

const env: ThemeEnv = { defaultExtendTheme: 'light', prefix: 'prefix' };

describe('build/generate-config-theme', () => {
  describe('generateConfigTheme', () => {
    it('should generate the config theme based on the generators', () => {
      const theme = unwrapRE(
        generateConfigTheme({
          spacingUnit: 4,
          colors: { gray: myraColors.gray.light, primary: 'gray.1' },
          spacing: {},
        } as unknown as FullConfigTheme),
        env
      );

      expect(theme).toEqual(
        expect.objectContaining({
          colors: expect.objectContaining({
            primary: 'gray.1',
            'gray-1': {
              value: expect.any(Function),
              utilities: [
                expect.objectContaining({ name: '--prefix-colors-gray-1', value: '0 0% 99%' }),
                expect.objectContaining({ name: '--prefix-colors-gray-1-opacity', value: '' }),
              ],
            },
          }),
          spacing: expect.objectContaining({
            unit: 4,
            'unit-1': '0.25rem',
          }),
        })
      );
    });
  });
});
