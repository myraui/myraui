import { unwrapRE } from '@myraui/shared-utils';
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
          colorScheme: {
            background: 'primary',
            text: 'gray',
          },
        } as unknown as FullConfigTheme),
        env
      );

      expect(theme).toEqual(
        expect.objectContaining({
          colorScheme: expect.objectContaining({
            DEFAULT: {
              value: [expect.any(Function), expect.any(Function)],
              utilities: {
                '--prefix-colors-color-scheme': 'var(--prefix-colors-primary)',
                '--prefix-colors-color-scheme-opacity': 'var(--prefix-colors-primary-opacity)',
                '--prefix-colors-color-scheme-text': 'var(--prefix-colors-gray)',
                '--prefix-colors-color-scheme-text-opacity': 'var(--prefix-colors-gray-opacity)',
              },
            },
          }),
          colors: expect.objectContaining({
            primary: 'gray.1',
            gray: expect.objectContaining({
              1: {
                value: expect.any(Function),
                utilities: {
                  '--prefix-colors-gray-1': '0 0% 99%',
                },
              },
              DEFAULT: {
                value: expect.any(Function),
                utilities: {
                  '--prefix-colors-gray': 'var(--prefix-colors-gray-9)',
                  '--prefix-colors-gray-opacity': 'var(--prefix-colors-gray-9-opacity)',
                },
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
              utilities: {},
            },
          }),
          minHeight: expect.objectContaining({
            'unit-1': {
              value: 'var(--prefix-spacing-unit-1)',
              utilities: {},
            },
          }),
        })
      );
    });
  });
});
