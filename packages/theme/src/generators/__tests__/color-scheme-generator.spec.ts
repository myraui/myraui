import { unwrapRE } from '@myraui/utils';
import { colorSchemeGenerator } from '../color-scheme-generator';
import { ThemeEnv } from '../../theme.types';

const env: ThemeEnv = { prefix: 'prefix', defaultExtendTheme: 'light' };

describe('generators/color-scheme-generator', () => {
  describe('colorSchemeGenerator', () => {
    it('should generate the default color scheme', () => {
      const result = unwrapRE(colorSchemeGenerator('primary'), env) as any;

      expect(result).toEqual({
        colors: {
          'color-scheme': expect.objectContaining({
            1: {
              value: expect.any(Function),
              utilities: [
                { name: '--prefix-colors-color-scheme-1', value: 'var(--prefix-colors-primary-1)', reference: expect.any(Function) },
                { name: '--prefix-colors-color-scheme-1-opacity', value: 'var(--prefix-colors-primary-1-opacity)', reference: expect.any(Function) },
              ],
            },
          }),
        },
      });
    });
  });
});
