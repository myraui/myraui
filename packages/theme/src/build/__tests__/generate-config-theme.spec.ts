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
            gray: expect.objectContaining({
              1: {
                value: expect.any(Function),
                utilities: [
                  expect.objectContaining({ name: '--prefix-colors-gray-1', value: '0 0% 99%' }),
                  expect.objectContaining({ name: '--prefix-colors-gray-1-opacity', value: '' }),
                ],
              },
              DEFAULT: {
                value: expect.any(Function),
                utilities: [
                  expect.objectContaining({ name: '--prefix-colors-gray', value: 'var(--prefix-colors-gray-9)' }),
                  expect.objectContaining({ name: '--prefix-colors-gray-opacity', value: 'var(--prefix-colors-gray-9-opacity)' }),
                ],
              },
            }),
          }),
          spacing: expect.objectContaining({
            unit: 4,
            'unit-1': '0.25rem',
          }),
          minWidth: expect.objectContaining({
            'unit-1': {
              value: 'var(--prefix-spacing-unit-1)',
              utilities: [],
            },
          }),
          minHeight: expect.objectContaining({
            'unit-1': {
              value: 'var(--prefix-spacing-unit-1)',
              utilities: [],
            },
          }),
        })
      );
    });
  });
});
