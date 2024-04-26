import { unwrapRE } from '@myraui/utils';
import { resolveConfigTheme, resolveDefault, resolveThemeToken } from '../resolve-config-theme';
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
          'primary-background': {
            value: expect.any(Function),
            utilities: [
              expect.objectContaining({ name: '--prefix-colors-primary-background', value: 'var(--prefix-colors-red-1)' }),
              expect.objectContaining({ name: '--prefix-colors-primary-background-opacity', value: 'var(--prefix-colors-red-1-opacity)' }),
            ],
          },
          secondary: {
            value: expect.any(Function),
            utilities: [
              expect.objectContaining({ name: '--prefix-colors-secondary', value: 'var(--prefix-colors-blue-1)' }),
              expect.objectContaining({ name: '--prefix-colors-secondary-opacity', value: 'var(--prefix-colors-blue-1-opacity)' }),
            ],
          },
        })
      );

      const primaryBackground = resolved['primary-background'].value;

      expect(primaryBackground({})).toBe('hsl(var(--prefix-colors-primary-background) / var(--prefix-colors-primary-background-opacity, 1))');
    });

    it('should resolve a theme token with DEFAULT', () => {
      const generated = unwrapRE(generateConfigTheme({ radius: defaultThemes.light.radius } as any), env);

      const resolved = unwrapRE(resolveThemeToken('radius', generated.radius), env) as any;

      expect(resolved).toEqual(
        expect.objectContaining({
          DEFAULT: {
            value: 'var(--prefix-radius)',
            utilities: [expect.objectContaining({ name: '--prefix-radius', value: 'var(--prefix-radius-medium)' })],
          },
          medium: {
            value: 'var(--prefix-radius-medium)',
            utilities: [expect.objectContaining({ name: '--prefix-radius-medium', value: '12px' })],
          },
        })
      );
    });

    it('should resolve a theme token with DEFAULT that is nested', () => {
      const generated = unwrapRE(generateConfigTheme({ radius: { test: defaultThemes.light.radius } } as any), env);

      const resolved = unwrapRE(resolveThemeToken('radius', generated.radius), env) as any;

      expect(resolved).toEqual(
        expect.objectContaining({
          test: {
            value: 'var(--prefix-radius-test)',
            utilities: [expect.objectContaining({ name: '--prefix-radius-test', value: 'var(--prefix-radius-test-medium)' })],
          },
          'test-medium': {
            value: 'var(--prefix-radius-test-medium)',
            utilities: [expect.objectContaining({ name: '--prefix-radius-test-medium', value: '12px' })],
          },
        })
      );
    });
  });

  describe('resolveDefault', () => {
    it('should generate the default token', () => {
      const resolved = unwrapRE(resolveDefault('colors', 'red', ''), env);

      expect(resolved).toEqual({
        DEFAULT: {
          value: 'var(--prefix-colors)',
          utilities: [expect.objectContaining({ name: '--prefix-colors', value: 'var(--prefix-colors-red)' })],
        },
      });
    });

    it('should generate the default token for a nested token', () => {
      const resolved = unwrapRE(resolveDefault('colors', 'red', 'primary-'), env);

      expect(resolved).toEqual({
        primary: {
          value: 'var(--prefix-colors-primary)',
          utilities: [expect.objectContaining({ name: '--prefix-colors-primary', value: 'var(--prefix-colors-primary-red)' })],
        },
      });
    });
  });

  describe('resolveConfigTheme', () => {
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
            'primary-background': {
              value: expect.any(Function),
              utilities: [
                expect.objectContaining({ name: '--prefix-colors-primary-background', value: 'var(--prefix-colors-red-1)' }),
                expect.objectContaining({ name: '--prefix-colors-primary-background-opacity', value: 'var(--prefix-colors-red-1-opacity)' }),
              ],
            },
            secondary: {
              value: expect.any(Function),
              utilities: [
                expect.objectContaining({ name: '--prefix-colors-secondary', value: 'var(--prefix-colors-blue-9)' }),
                expect.objectContaining({ name: '--prefix-colors-secondary-opacity', value: 'var(--prefix-colors-blue-9-opacity)' }),
              ],
            },
            'red-1': {
              value: expect.any(Function),
              utilities: [
                expect.objectContaining({ name: '--prefix-colors-red-1', value: '0 100% 99%' }),
                expect.objectContaining({ name: '--prefix-colors-red-1-opacity', value: '' }),
              ],
            },
          }),
        })
      );

      const primaryBackground = (resolved.colors['primary-background'] as any).value;

      expect(primaryBackground({})).toBe('hsl(var(--prefix-colors-primary-background) / var(--prefix-colors-primary-background-opacity, 1))');
    });
  });
});
