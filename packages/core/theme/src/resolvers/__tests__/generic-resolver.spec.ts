import { unwrapRE } from '@myraui/shared-utils';
import { genericResolver } from '../generic-resolver';
import { ThemeEnv } from '../../theme.types';

const env: ThemeEnv = { defaultExtendTheme: 'light', prefix: 'prefix' };

describe('resolvers/generic-resolver', () => {
  describe('genericResolver', () => {
    it('should return the resolved value ', () => {
      const result = unwrapRE(genericResolver('colors')('key', 'value'), env);

      expect(result).toEqual({
        value: 'var(--prefix-colors-key)',
        utilities: [expect.objectContaining({})],
      });
    });

    it('should return validate the key', () => {
      const resolver = genericResolver('colors');
      const result = unwrapRE(resolver('2.5', 'value'), env);

      expect(result).toEqual({
        value: 'var(--prefix-colors-2_5)',
        utilities: [expect.objectContaining({ value: 'value', name: '--prefix-colors-2_5' })],
      });
    });
  });
});
