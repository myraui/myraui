import { unwrapRE } from '@myraui/utils';
import { resolveConfigTheme, resolveThemeToken } from '../resolve-config-theme';
import { FullConfigTheme, GeneratedConfigTheme, ThemeEnv } from '../../theme.types';
import { runPathResolver } from '../run-path-resolver';
import { myraColors } from '../../colors';

const env: ThemeEnv = { defaultExtendTheme: 'light', prefix: 'prefix' };

describe('build/resolve-config-theme', () => {
  describe('resolveThemeToken', () => {
    it('should resolve the theme token', () => {
      const theme = unwrapRE(
        runPathResolver({
          colors: { primary: { background: 'colors.red.1' }, secondary: 'colors.blue.1', red: myraColors.red.light, blue: myraColors.blue.light },
        } as any),
        env
      );

      const resolved = unwrapRE(resolveThemeToken('colors', theme.colors), env) as any;

      expect(resolved).toEqual(
        expect.objectContaining({
          primary: {
            background: expect.objectContaining({
              DEFAULT: {
                value: expect.any(Function),
                utilities: [
                  expect.objectContaining({ name: '--prefix-colors-primary-background', value: 'var(--prefix-colors-red-1)' }),
                  expect.objectContaining({ name: '--prefix-colors-primary-background-opacity', value: 'var(--prefix-colors-red-1-opacity)' }),
                ],
              },
            }),
          },
          secondary: expect.objectContaining({
            DEFAULT: {
              value: expect.any(Function),
              utilities: [
                expect.objectContaining({ name: '--prefix-colors-secondary', value: 'var(--prefix-colors-blue-1)' }),
                expect.objectContaining({ name: '--prefix-colors-secondary-opacity', value: 'var(--prefix-colors-blue-1-opacity)' }),
              ],
            },
          }),
        })
      );

      const primaryBackground = resolved.primary.background.DEFAULT.value;

      expect(primaryBackground({})).toBe('hsl(var(--prefix-colors-primary-background) / var(--prefix-colors-primary-background-opacity, 1))');
    });
  });

  describe('resolveConfigTheme', () => {
    it('should resolve the config theme', () => {
      const configTheme = {
        colors: { primary: { background: 'colors.red.1' }, secondary: 'colors.blue', red: myraColors.red.light, blue: 'blue' },
      };
      const resolved = unwrapRE(resolveConfigTheme(configTheme as unknown as GeneratedConfigTheme<FullConfigTheme<typeof configTheme>>), env);

      expect(resolved).toEqual(
        expect.objectContaining({
          colors: expect.objectContaining({
            primary: {
              background: expect.objectContaining({
                DEFAULT: {
                  value: expect.any(Function),
                  utilities: [
                    expect.objectContaining({ name: '--prefix-colors-primary-background', value: 'var(--prefix-colors-red-1)' }),
                    expect.objectContaining({ name: '--prefix-colors-primary-background-opacity', value: 'var(--prefix-colors-red-1-opacity)' }),
                  ],
                },
              }),
            },
            secondary: {
              value: expect.any(Function),
              utilities: [
                expect.objectContaining({ name: '--prefix-colors-secondary', value: 'var(--prefix-colors-blue)' }),
                expect.objectContaining({ name: '--prefix-colors-secondary-opacity', value: 'var(--prefix-colors-blue-opacity)' }),
              ],
            },
            red: expect.objectContaining({
              '1': {
                value: expect.any(Function),
                utilities: [
                  expect.objectContaining({ name: '--prefix-colors-red-1', value: '0 100% 99%' }),
                  expect.objectContaining({ name: '--prefix-colors-red-1-opacity', value: '' }),
                ],
              },
            }),
          }),
        })
      );

      const primaryBackground = (resolved.colors.primary.background as any)['DEFAULT'].value;

      expect(primaryBackground({})).toBe('hsl(var(--prefix-colors-primary-background) / var(--prefix-colors-primary-background-opacity, 1))');
    });
  });
});
