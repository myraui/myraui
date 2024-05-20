import { unwrapRE } from '@myraui/shared-utils';
import { colorSchemeGenerator } from '../color-scheme-generator';
import { ThemeEnv } from '../../theme.types';

const env: ThemeEnv = { prefix: 'prefix', defaultExtendTheme: 'light' };

describe('generators/color-scheme-generator', () => {
  describe('colorSchemeGenerator', () => {
    it('should generate the default color scheme', () => {
      const result = unwrapRE(colorSchemeGenerator('primary'), env) as any;

      expect(result).toEqual({
        colorScheme: expect.objectContaining({
          DEFAULT: {
            value: [expect.any(Function), expect.any(Function)],
            utilities: {
              '--prefix-colors-color-scheme-1': 'var(--prefix-colors-primary-1)',
              '--prefix-colors-color-scheme-1-opacity': 'var(--prefix-colors-primary-1-opacity)',
            },
          },
        }),
      });
    });
  });
});
