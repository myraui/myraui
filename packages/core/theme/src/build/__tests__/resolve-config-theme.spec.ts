import { unwrapRE } from '@myraui/shared-utils';
import { resolveConfigTheme, resolveThemeToken } from '../resolve-config-theme';
import { ThemeEnv } from '../../theme.types';
import { myraColors } from '../../colors';
import { generateConfigTheme } from '../generate-config-theme';
import { defaultThemes } from '../../theme';

const env: ThemeEnv = { defaultExtendTheme: 'light', prefix: 'prefix' };

describe('build/resolve-config-theme', () => {
  describe('resolveThemeToken', () => {
    it('should resolve the theme token', () => {
      const generated = unwrapRE(
        generateConfigTheme({
          colors: {
            'primary-background': 'red.1',
            secondary: 'blue.1',
            red: myraColors.red.light,
            blue: myraColors.blue.light,
          },
        } as any),
        env
      );

      const resolved = unwrapRE(resolveThemeToken('colors', generated.colors), env) as any;

      expect(resolved).toEqual(
        expect.objectContaining({
          'primary-background': expect.objectContaining({
            DEFAULT: {
              value: expect.any(Function),
              utilities: {
                '--prefix-colors-primary-background': 'var(--prefix-colors-red-1)',
                '--prefix-colors-primary-background-opacity': 'var(--prefix-colors-red-1-opacity)',
              },
            },
          }),
          secondary: expect.objectContaining({
            DEFAULT: {
              value: expect.any(Function),
              utilities: {
                '--prefix-colors-secondary': 'var(--prefix-colors-blue-1)',
                '--prefix-colors-secondary-opacity': 'var(--prefix-colors-blue-1-opacity)',
              },
            },
          }),
        })
      );

      const primaryBackground = resolved['primary-background'].DEFAULT.value;

      expect(primaryBackground({})).toBe('hsl(var(--prefix-colors-primary-background) / var(--prefix-colors-primary-background-opacity, 1))');
    });

    it('should resolve a theme token with DEFAULT', () => {
      const generated = unwrapRE(generateConfigTheme({ borderRadius: defaultThemes.light.borderRadius } as any), env);

      const resolved = unwrapRE(resolveThemeToken('borderRadius', generated.borderRadius), env) as any;

      expect(resolved).toEqual(
        expect.objectContaining({
          DEFAULT: {
            value: 'var(--prefix-border-radius-medium)',
            utilities: {
              '--prefix-border-radius-medium': expect.any(String),
            },
          },
          medium: {
            value: 'var(--prefix-border-radius-medium)',
            utilities: {
              '--prefix-border-radius-medium': expect.any(String),
            },
          },
        })
      );
    });

    it('should resolve a theme token with DEFAULT that is nested', () => {
      const generated = unwrapRE(generateConfigTheme({ borderRadius: { test: defaultThemes.light.borderRadius } } as any), env);

      const resolved = unwrapRE(resolveThemeToken('borderRadius', generated.borderRadius), env) as any;

      expect(resolved).toEqual(
        expect.objectContaining({
          test: expect.objectContaining({
            DEFAULT: {
              value: 'var(--prefix-border-radius-test-medium)',
              utilities: {
                '--prefix-border-radius-test-medium': expect.any(String),
              },
            },
            medium: {
              value: 'var(--prefix-border-radius-test-medium)',
              utilities: {
                '--prefix-border-radius-test-medium': expect.any(String),
              },
            },
          }),
        })
      );
    });
  });

  describe('resolveConfigTheme', () => {
    it('should resolve the font sizes', () => {
      const configTheme = unwrapRE(
        generateConfigTheme({
          fontSize: defaultThemes.light.fontSize,
        } as any),
        env
      );
      const resolved = unwrapRE(resolveConfigTheme(configTheme), env);

      expect(resolved).toEqual({
        fontSize: expect.objectContaining({
          DEFAULT: expect.objectContaining({
            value: ['var(--prefix-font-size-medium)', 'var(--prefix-line-height-medium)'],
            utilities: {
              '--prefix-font-size-medium': '1rem',
            },
          }),
          medium: expect.objectContaining({
            value: ['var(--prefix-font-size-medium)', 'var(--prefix-line-height-medium)'],
            utilities: {
              '--prefix-font-size-medium': '1rem',
            },
          }),
        }),
      });
    });

    it('should resolve the config theme', () => {
      const configTheme = unwrapRE(
        generateConfigTheme({
          colors: { 'primary-background': 'red.1', secondary: 'blue', red: myraColors.red.light, blue: myraColors.blue.light },
        } as any),
        env
      );
      const resolved = unwrapRE(resolveConfigTheme(configTheme), env);

      expect(resolved).toEqual(
        expect.objectContaining({
          colors: expect.objectContaining({
            'primary-background': expect.objectContaining({
              DEFAULT: {
                value: expect.any(Function),
                utilities: {
                  '--prefix-colors-primary-background': 'var(--prefix-colors-red-1)',
                  '--prefix-colors-primary-background-opacity': 'var(--prefix-colors-red-1-opacity)',
                },
              },
            }),
            secondary: expect.objectContaining({
              DEFAULT: {
                value: expect.any(Function),
                utilities: {
                  '--prefix-colors-secondary': 'var(--prefix-colors-blue)',
                  '--prefix-colors-secondary-opacity': 'var(--prefix-colors-blue-opacity)',
                },
              },
            }),
            red: expect.objectContaining({
              1: {
                value: expect.any(Function),
                utilities: {
                  '--prefix-colors-red-1': '0 100% 99%',
                },
              },
            }),
          }),
        })
      );

      const primaryBackground = (resolved.colors['primary-background'] as any).DEFAULT.value;

      expect(primaryBackground({})).toBe('hsl(var(--prefix-colors-primary-background) / var(--prefix-colors-primary-background-opacity, 1))');
    });
  });
});
