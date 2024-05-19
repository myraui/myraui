import { buildCSSVariables, colorVariable } from '../../utils/css-variables';
import { unwrapRE } from '@myraui/shared-utils';
import { extractResolvedTokens, extractResolvedValue, extractUtilities } from '../utils';
import { ThemeEnv } from '../../theme.types';

const env: ThemeEnv = { defaultExtendTheme: 'light', prefix: 'prefix' };

describe('build/utils', () => {
  const primary = unwrapRE(colorVariable('primary', { color: { value: 'blue' } }), env);
  const secondary = unwrapRE(colorVariable('secondary', { color: { value: 'white' } }), env);

  describe('extractUtilities', () => {
    it('should build all the CSS variables from a simple resolved value', () => {
      const utilities = unwrapRE(extractUtilities({ primary: { value: 'value', utilities: buildCSSVariables(primary) } }), env);

      expect(utilities).toEqual(buildCSSVariables(primary));
    });

    it('should build all the CSS variables from a nested resolved value', () => {
      const utilities = unwrapRE(
        extractUtilities({
          primary: { background: { value: 'value', utilities: buildCSSVariables(primary) } },
          secondary: { value: 'value', utilities: buildCSSVariables(secondary) },
        }),
        env
      );

      expect(utilities).toEqual(buildCSSVariables([...primary, ...secondary]));
    });
  });

  describe('extractResolvedValue', () => {
    it('should extract the resolved value from a simple resolved value', () => {
      const result = unwrapRE(extractResolvedValue({ primary: { value: 'primary', utilities: buildCSSVariables(primary) } }), env);
      expect(result).toEqual({ primary: 'primary' });
    });

    it('should extract the resolved value from a nested resolved value', () => {
      const result = unwrapRE(
        extractResolvedValue({
          primary: { background: { value: 'primary', utilities: buildCSSVariables(primary) } },
          secondary: { value: 'secondary', utilities: buildCSSVariables(secondary) },
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
            secondary: {
              main: {
                value: 'secondary',
                utilities: buildCSSVariables(secondary),
              },
            },
          },
        } as any),
        env
      );
      expect(result).toEqual({ colors: { primary: 'primary', secondary: { main: 'secondary' } } });
    });
  });
});
