import { unwrapRE } from '@myraui/shared-utils';
import { ThemeEnv } from '../../theme.types';
import { rawValueResolver } from '../raw-value-resolver';

const env: ThemeEnv = { prefix: 'prefix', defaultExtendTheme: 'light' };

describe('resolvers/raw-value-resolver', () => {
  describe('rawValueResolver', () => {
    it('should return the raw value', () => {
      const result = unwrapRE(rawValueResolver('keyframe', 'value'), env);

      expect(result).toEqual({ value: 'value', utilities: {} });
    });
  });
});
