import { unwrapRE } from '@myraui/utils';
import { resolveConfigTheme, resolveThemeToken } from '../resolve-config-theme';
import { FullConfigTheme, GeneratedConfigTheme, ThemeEnv } from '../../theme.types';

const env: ThemeEnv = { defaultExtendTheme: 'light', prefix: 'prefix' };

describe('build/resolve-config-theme', () => {
  describe('resolveThemeToken', () => {
    it('should resolve the theme token', () => {
      const resolved = unwrapRE(resolveThemeToken('colors', { primary: { background: 'red.1' }, secondary: 'blue.1' }), env);

      expect(resolved).toEqual({
        primary: {
          background: {
            value: expect.any(Function),
            utilities: [
              expect.objectContaining({ name: '--prefix-colors-primary-background', value: 'var(--prefix-colors-red-1)' }),
              expect.objectContaining({ name: '--prefix-colors-primary-background-opacity', value: 'var(--prefix-colors-red-1-opacity)' }),
            ],
          },
        },
        secondary: {
          value: expect.any(Function),
          utilities: [
            expect.objectContaining({ name: '--prefix-colors-secondary', value: 'var(--prefix-colors-blue-1)' }),
            expect.objectContaining({ name: '--prefix-colors-secondary-opacity', value: 'var(--prefix-colors-blue-1-opacity)' }),
          ],
        },
      });

      const primaryBackground = resolved.primary.background.value;

      expect(primaryBackground({})).toBe('hsl(var(--prefix-colors-primary-background) / var(--prefix-colors-primary-background-opacity, 1))');
    });
  });

  describe('resolveConfigTheme', () => {
    it('should resolve the config theme', () => {
      const configTheme = { colors: { primary: { background: 'red.1' }, secondary: 'blue.1' } };
      const resolved = unwrapRE(resolveConfigTheme(configTheme as GeneratedConfigTheme<FullConfigTheme<typeof configTheme>>), env);

      expect(resolved).toEqual({
        colors: {
          primary: {
            background: {
              value: expect.any(Function),
              utilities: [
                expect.objectContaining({ name: '--prefix-colors-primary-background', value: 'var(--prefix-colors-red-1)' }),
                expect.objectContaining({ name: '--prefix-colors-primary-background-opacity', value: 'var(--prefix-colors-red-1-opacity)' }),
              ],
            },
          },
          secondary: {
            value: expect.any(Function),
            utilities: [
              expect.objectContaining({ name: '--prefix-colors-secondary', value: 'var(--prefix-colors-blue-1)' }),
              expect.objectContaining({ name: '--prefix-colors-secondary-opacity', value: 'var(--prefix-colors-blue-1-opacity)' }),
            ],
          },
        },
      });

      const primaryBackground = resolved.colors.primary.background.value;

      expect(primaryBackground({})).toBe('hsl(var(--prefix-colors-primary-background) / var(--prefix-colors-primary-background-opacity, 1))');
    });
  });
});
