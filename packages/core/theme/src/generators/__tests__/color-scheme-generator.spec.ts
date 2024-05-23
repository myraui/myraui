import { unwrapRE } from '@myraui/shared-utils';
import { colorSchemeGenerator } from '../color-scheme-generator';
import { ThemeEnv } from '../../theme.types';

const env: ThemeEnv = { prefix: 'prefix', defaultExtendTheme: 'light' };

describe('generators/color-scheme-generator', () => {
  describe('colorSchemeGenerator', () => {
    it('should generate the default color scheme', () => {
      const result = unwrapRE(colorSchemeGenerator('color-scheme')('primary'), env) as any;

      expect(result).toEqual({
        colors: {
          'color-scheme': expect.objectContaining({
            1: {
              value: expect.any(Function),
              utilities: {
                '--prefix-color-scheme-1': 'var(--prefix-colors-primary-1)',
                '--prefix-color-scheme-1-opacity': 'var(--prefix-colors-primary-1-opacity)',
              },
            },
          }),
        },
      });
    });
  });
});
