import { unwrapRE } from '@myraui/utils';
import { ThemeEnv } from '../../theme.types';
import { generatePaths, resolvePath, resolvePaths, runPathResolver } from '../run-path-resolver';
import { expect } from '@storybook/jest';

const env: ThemeEnv = { prefix: 'prefix', defaultExtendTheme: 'light' };

describe('build/run-path-resolver', () => {
  describe('generatePaths', () => {
    it('should generate the path keys', () => {
      const pathKeys = generatePaths('colors.red.1', { colors: { red: { 1: '#ff0000' } } } as any);

      expect(pathKeys).toEqual([
        ['colors', { red: { 1: '#ff0000' } }],
        ['colors.red', { 1: '#ff0000' }],
        ['colors.red.1', '#ff0000'],
      ]);
    });

    it('should not resolve string values as paths', () => {
      const pathKeys = generatePaths('colors.red.1', { colors: { red: '#ff0000' } } as any);

      expect(pathKeys).toEqual([
        ['colors', { red: '#ff0000' }],
        ['colors.red', '#ff0000'],
        ['colors.red.1', undefined],
      ]);
    });
  });
  describe('resolvePath', () => {
    it('should return resolve a string value from a path', () => {
      const resolved = unwrapRE(resolvePath('colors.red', { colors: { red: 'red' } } as any), env);

      expect(resolved).toEqual(expect.objectContaining({ name: '--prefix-colors-red' }));
    });

    it('should return resolve a value with DEFAULT', () => {
      const resolved = unwrapRE(resolvePath('colors.red', { colors: { red: { DEFAULT: 1, 1: 'red-1' } } } as any), env);

      expect(resolved).toEqual({
        DEFAULT: 1,
        1: expect.objectContaining({ name: '--prefix-colors-red-1' }),
      });
    });

    it('should return resolve a string value from a path with a default value', () => {
      const resolved = unwrapRE(resolvePath('colors.red.1', { colors: { red: { DEFAULT: 2, 1: 'red-1', 2: 'red-2' } } } as any), env);

      expect(resolved).toEqual({
        DEFAULT: '1',
        1: expect.objectContaining({ name: '--prefix-colors-red-1' }),
        2: expect.objectContaining({ name: '--prefix-colors-red-2' }),
      });
    });

    it('should return undefined if the path does not exist', () => {
      const resolved = unwrapRE(resolvePath('colors.blue.1', { colors: { blue: 'blue' } } as any), env);

      expect(resolved).toBeUndefined();
    });

    it('should resolve other references', () => {
      const resolved = unwrapRE(
        resolvePath('colors.primary', { colors: { red: { DEFAULT: 2, 1: 'red-1', 2: 'red-2' }, primary: 'colors.red.2' } } as any),
        env
      );

      expect(resolved).toEqual({
        DEFAULT: '2',
        2: expect.objectContaining({ name: '--prefix-colors-red-2' }),
        1: expect.objectContaining({ name: '--prefix-colors-red-1' }),
      });
    });

    it('should detect circular references', () => {
      expect(() => {
        unwrapRE(resolvePath('colors.red', { colors: { red: 'colors.blue', blue: 'colors.red' } } as any), env);
      }).toThrow(new Error('Circular dependency detected colors.red -> colors.blue -> colors.red'));
    });
  });

  describe('resolvePaths', () => {
    it('should resolve paths for a generated theme token', () => {
      const theme = {
        spacing: {
          card: {
            small: '1px',
            medium: '2px',
            large: '3px',
            DEFAULT: 'medium',
          },
        },
        width: {
          largeCard: 'spacing.card.large',
        },
      } as any;

      const resolved = unwrapRE(resolvePaths(theme)(theme.width), env);

      expect(resolved).toEqual({
        largeCard: {
          small: expect.objectContaining({
            name: '--prefix-spacing-card-small',
          }),
          medium: expect.objectContaining({
            name: '--prefix-spacing-card-medium',
          }),
          large: expect.objectContaining({
            name: '--prefix-spacing-card-large',
          }),
          DEFAULT: 'large',
        },
      });
    });

    it('should resolve dependent paths', () => {
      const theme = {
        spacing: {
          card: {
            small: '1px',
            medium: '2px',
            large: 'width.large',
            DEFAULT: 'medium',
          },
        },
        width: {
          largeCard: 'spacing.card.large',
          large: '3px',
        },
      } as any;

      const resolved = unwrapRE(resolvePaths(theme)(theme.width), env);

      expect(resolved).toEqual({
        largeCard: {
          small: expect.objectContaining({
            name: '--prefix-spacing-card-small',
          }),
          medium: expect.objectContaining({
            name: '--prefix-spacing-card-medium',
          }),
          large: expect.objectContaining({
            name: '--prefix-spacing-card-large',
          }),
          DEFAULT: 'large',
        },
        large: '3px',
      });
    });
  });

  describe('runPathResolver', () => {
    it('should resolve all paths', () => {
      const theme = {
        spacing: {
          card: {
            small: '1px',
            medium: '2px',
            large: 'width.large',
            DEFAULT: 'medium',
          },
        },
        width: {
          largeCard: 'spacing.card.large',
          large: '3px',
        },
      } as any;

      const resolved = unwrapRE(runPathResolver(theme), env);

      expect(resolved).toEqual({
        spacing: {
          card: {
            small: '1px',
            medium: '2px',
            large: expect.objectContaining({
              name: '--prefix-width-large',
            }),
            DEFAULT: 'medium',
          },
        },
        width: {
          largeCard: {
            small: expect.objectContaining({
              name: '--prefix-spacing-card-small',
            }),
            medium: expect.objectContaining({
              name: '--prefix-spacing-card-medium',
            }),
            large: expect.objectContaining({
              name: '--prefix-spacing-card-large',
            }),
            DEFAULT: 'large',
          },
          large: '3px',
        },
      });
    });
  });
});
