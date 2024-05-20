import { unwrapRE } from '@myraui/shared-utils';
import { buildConfigTheme, createBuiltConfigTheme } from '../build-config-theme';
import { ThemeEnv } from '../../theme.types';
import { buildCSSVariables, colorVariable } from '../../utils/css-variables';

const env: ThemeEnv = { defaultExtendTheme: 'light', prefix: 'prefix' };

describe('build/build-config-theme', () => {
  const primary = unwrapRE(colorVariable('primary', { color: { value: 'blue' } }), env);
  const secondary = unwrapRE(colorVariable('secondary', { color: { value: 'white' } }), env);

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
        variants: [],
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
        variants: [],
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
          '.color-scheme-white,[data-color-scheme="white"]': expect.objectContaining({
            '--prefix-color-scheme': 'var(--prefix-colors-white)',
          }),
        }),
        colorMode: 'light',
      });
    });
  });
});
