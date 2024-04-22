import { unwrapRE } from '@myraui/utils';
import { buildConfigTheme, createBuiltConfigTheme, extractResolvedTokens, extractResolvedValue, extractUtilities } from '../build-config-theme';
import { ThemeEnv } from '../../theme.types';
import { colorVariable } from '../../utils';

const env: ThemeEnv = { defaultExtendTheme: 'light', prefix: 'prefix' };

describe('build/build-config-theme', () => {
  const primary = unwrapRE(colorVariable('primary'), env);
  const secondary = unwrapRE(colorVariable('secondary'), env);

  describe('extractUtilities', () => {
    it('should build all the CSS variables from a simple resolved value', () => {
      const utilities = unwrapRE(extractUtilities({ primary: { value: 'value', utilities: primary } }), env);

      expect(utilities).toEqual(primary);
    });

    it('should build all the CSS variables from a nested resolved value', () => {
      const utilities = unwrapRE(
        extractUtilities({ primary: { background: { value: 'value', utilities: primary } }, secondary: { value: 'value', utilities: secondary } }),
        env
      );

      expect(utilities).toEqual([...primary, ...secondary]);
    });
  });

  describe('extractResolvedValue', () => {
    it('should extract the resolved value from a simple resolved value', () => {
      const result = unwrapRE(extractResolvedValue({ primary: { value: 'primary', utilities: primary } }), env);
      expect(result).toEqual({ primary: 'primary' });
    });

    it('should extract the resolved value from a nested resolved value', () => {
      const result = unwrapRE(
        extractResolvedValue({
          primary: { background: { value: 'primary', utilities: primary } },
          secondary: { value: 'secondary', utilities: secondary },
        }),
        env
      );
      expect(result).toEqual({ primary: { background: 'primary' }, secondary: 'secondary' });
    });
  });

  describe('extractResolvedTokens', () => {
    it('should extract the resolved values from a resolved config theme', () => {
      const result = unwrapRE(
        extractResolvedTokens({
          colors: {
            primary: { value: 'primary', utilities: primary },
            secondary: { value: 'secondary', utilities: secondary },
          },
        } as any),
        env
      );
      expect(result).toEqual({ colors: { primary: 'primary', secondary: 'secondary' } });
    });
  });

  describe('createBuiltConfigTheme', () => {
    it('should build the config theme with the resolved tokens and utilities', () => {
      const result = unwrapRE(
        createBuiltConfigTheme('light')({
          colors: {
            primary: { value: 'primary', utilities: primary },
            secondary: { value: 'secondary', utilities: secondary },
          },
        } as any),
        env
      );
      expect(result).toEqual({
        tokens: { colors: { primary: 'primary', secondary: 'secondary' } },
        utilities: [...primary, ...secondary],
        colorMode: 'light',
      });
    });
  });

  describe('buildConfigTheme', () => {
    it('should build the config theme', () => {
      const result = unwrapRE(
        buildConfigTheme('midnight', {
          colors: {
            primary: 'blue.2',
          },
        }),
        env
      );
      expect(result).toEqual({
        tokens: expect.objectContaining({ colors: { primary: 'blue.2' } }),
        utilities: expect.arrayContaining([]),
        colorMode: 'light',
      });
    });
  });
});
