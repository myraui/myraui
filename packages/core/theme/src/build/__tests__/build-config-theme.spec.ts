import { unwrapRE } from '@myraui/shared-utils';
import { buildConfigTheme, createBuiltConfigTheme, extractResolvedTokens, extractResolvedValue, extractUtilities } from '../build-config-theme';
import { ThemeEnv } from '../../theme.types';
import { buildCSSVariables, colorVariable } from '../../utils/css-variables';

const env: ThemeEnv = { defaultExtendTheme: 'light', prefix: 'prefix' };

describe('build/build-config-theme', () => {
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

  describe('createBuiltConfigTheme', () => {
    it('should build the config theme with the resolved tokens and utilities', () => {
      const result = unwrapRE(
        createBuiltConfigTheme('light')({
          colors: {
            primary: { value: 'primary', utilities: buildCSSVariables(primary) },
            secondary: { value: 'secondary', utilities: buildCSSVariables(secondary) },
          },
        } as any),
        env
      );
      expect(result).toEqual({
        tokens: { colors: { primary: 'primary', secondary: 'secondary' } },
        utilities: buildCSSVariables([...primary, ...secondary]),
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
        tokens: expect.objectContaining({
          colors: expect.objectContaining({
            primary: expect.objectContaining({
              DEFAULT: expect.any(Function),
            }),
            'color-scheme': expect.objectContaining({
              DEFAULT: expect.any(Function),
            }),
          }),
          spacing: expect.objectContaining({ unit: `var(--prefix-spacing-unit)` }),
          borderWidth: expect.objectContaining({
            DEFAULT: 'var(--prefix-border-width-small)',
          }),
        }),
        utilities: expect.objectContaining({
          '--prefix-colors-primary': 'var(--prefix-colors-blue-2)',
          '--prefix-colors-primary-opacity': 'var(--prefix-colors-blue-2-opacity)',
          '--prefix-border-width-medium': '3px',
        }),
        colorMode: 'light',
      });
    });
  });
});
