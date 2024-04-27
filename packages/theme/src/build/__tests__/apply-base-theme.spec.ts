import { unwrapRE } from '@myraui/utils';
import { defaultThemes } from '../../theme';
import { applyBaseTheme } from '../apply-base-theme';
import { ThemeEnv } from '../../theme.types';

const env: ThemeEnv = { defaultExtendTheme: 'light', prefix: 'prefix' };

describe('build/apply-base-theme', () => {
  describe('applyBaseTheme', () => {
    it('should build the theme based on the color mode', () => {
      const result = unwrapRE(applyBaseTheme('midnight', {}), env);

      expect(result).toEqual({ ...defaultThemes.light, spacingUnit: 4, extend: 'light', colorScheme: 'primary' });
    });

    it('should use the theme.extend value', () => {
      const result = unwrapRE(applyBaseTheme('midnight', { extend: 'dark' }), env);

      expect(result).toEqual({ ...defaultThemes.dark, spacingUnit: 4, extend: 'dark', colorScheme: 'primary' });
    });

    it('should ignore the theme.extend and defaultExtendTheme for base themes', () => {
      const result = unwrapRE(applyBaseTheme('light', { extend: 'dark' }), { ...env, defaultExtendTheme: 'dark' });

      expect(result).toEqual({ ...defaultThemes.light, spacingUnit: 4, extend: 'light', colorScheme: 'primary' });
    });
  });
});
