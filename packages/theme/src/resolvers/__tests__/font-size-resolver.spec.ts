import { unwrapRE } from '@myraui/utils';
import { fontSizeResolver } from '../font-size-resolver';
import { ThemeEnv } from '../../theme.types';

const env: ThemeEnv = { defaultExtendTheme: 'light', prefix: 'prefix' };

describe('resolvers/font-size-resolver', () => {
  describe('fontSizeResolver', () => {
    it('should create a font size variable', () => {
      const result = unwrapRE(fontSizeResolver('medium', '2px'), env);

      expect(result).toEqual({
        value: ['var(--prefix-font-size-medium)', 'var(--prefix-line-height-medium)'],
        utilities: [expect.objectContaining({ value: '2px', name: '--prefix-font-size-medium' })],
      });
    });
  });
});
