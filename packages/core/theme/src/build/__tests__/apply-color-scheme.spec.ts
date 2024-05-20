import { unwrapRE } from '@myraui/shared-utils';
import {
  applyColorScheme,
  applyColorSchemeUtilities,
  buildColorScheme,
  buildColorSchemeVariants,
  createColorSchemeSelector,
} from '../apply-color-scheme';
import { ThemeEnv } from '../../theme.types';

const env: ThemeEnv = { prefix: 'prefix', defaultExtendTheme: 'light' };

describe('build/apply-color-scheme', () => {
  describe('createColorSchemeSelector', () => {
    it('should return the correct value', () => {
      const selector = createColorSchemeSelector('test');

      expect(selector).toBe('.color-scheme-test,[data-color-scheme="test"]');
    });
  });

  describe('buildColorScheme', () => {
    it('should build the correct selector and utilities', () => {
      const result = unwrapRE(
        buildColorScheme({
          tokens: {
            colors: {
              test: {
                1: 'red',
                2: 'blue',
                DEFAULT: 'green',
              },
            },
          },
        } as any) as any,
        env
      );

      expect(result).toEqual({
        test: {
          '.color-scheme-test,[data-color-scheme="test"]': expect.objectContaining({
            '--prefix-color-scheme': 'var(--prefix-colors-test)',
            '--prefix-color-scheme-opacity': 'var(--prefix-colors-test-opacity)',
          }),
        },
        'test-1': {
          '.color-scheme-test-1,[data-color-scheme="test-1"]': {
            '--prefix-color-scheme': 'var(--prefix-colors-test-1)',
            '--prefix-color-scheme-opacity': 'var(--prefix-colors-test-1-opacity)',
          },
        },
        'test-2': {
          '.color-scheme-test-2,[data-color-scheme="test-2"]': {
            '--prefix-color-scheme': 'var(--prefix-colors-test-2)',
            '--prefix-color-scheme-opacity': 'var(--prefix-colors-test-2-opacity)',
          },
        },
      });
    });
  });

  describe('applyColorSchemeUtilities', () => {
    it('should return the correct value', () => {
      const resolved = {
        test: {
          utilities: {
            color: 'red',
          },
        },
      } as any;

      const result = applyColorSchemeUtilities('test')(resolved);

      expect(result).toEqual({
        '.color-scheme-test,[data-color-scheme="test"]': {
          color: 'red',
        },
      });
    });
  });

  describe('buildColorSchemeVariants', () => {
    it('should create the correct variants', () => {
      const configTheme = {
        tokens: {
          colors: {
            test: {
              DEFAULT: 'red',
              1: 'green',
              12: 'blue',
            },
            primary: {
              DEFAULT: 'blue',
              1: 'blue-1',
              12: 'blue-12',
            },
          },
        },
      } as any;

      const result = unwrapRE(buildColorSchemeVariants(configTheme), env);

      expect(result).toEqual(
        expect.arrayContaining([
          {
            name: 'color-scheme-primary',
            definition: ['&.color-scheme-primary', '&[data-color-scheme="primary"]'],
            utilities: {
              '.color-scheme-primary,[data-color-scheme="primary"]': expect.objectContaining({
                '--prefix-color-scheme': 'var(--prefix-colors-primary)',
              }),
            },
          },
          {
            name: 'color-scheme-primary-1',
            definition: ['&.color-scheme-primary-1', '&[data-color-scheme="primary-1"]'],
            utilities: {
              '.color-scheme-primary-1,[data-color-scheme="primary-1"]': {
                '--prefix-color-scheme': 'var(--prefix-colors-primary-1)',
                '--prefix-color-scheme-opacity': 'var(--prefix-colors-primary-1-opacity)',
              },
            },
          },
          {
            name: 'color-scheme-primary-12',
            definition: ['&.color-scheme-primary-12', '&[data-color-scheme="primary-12"]'],
            utilities: {
              '.color-scheme-primary-12,[data-color-scheme="primary-12"]': {
                '--prefix-color-scheme': 'var(--prefix-colors-primary-12)',
                '--prefix-color-scheme-opacity': 'var(--prefix-colors-primary-12-opacity)',
              },
            },
          },
          {
            name: 'color-scheme-test',
            definition: ['&.color-scheme-test', '&[data-color-scheme="test"]'],
            utilities: {
              '.color-scheme-test,[data-color-scheme="test"]': expect.objectContaining({
                '--prefix-color-scheme': 'var(--prefix-colors-test)',
                '--prefix-color-scheme-opacity': 'var(--prefix-colors-test-opacity)',
              }),
            },
          },
          {
            name: 'color-scheme-test-1',
            definition: ['&.color-scheme-test-1', '&[data-color-scheme="test-1"]'],
            utilities: {
              '.color-scheme-test-1,[data-color-scheme="test-1"]': {
                '--prefix-color-scheme': 'var(--prefix-colors-test-1)',
                '--prefix-color-scheme-opacity': 'var(--prefix-colors-test-1-opacity)',
              },
            },
          },
          {
            name: 'color-scheme-test-12',
            definition: ['&.color-scheme-test-12', '&[data-color-scheme="test-12"]'],
            utilities: {
              '.color-scheme-test-12,[data-color-scheme="test-12"]': {
                '--prefix-color-scheme': 'var(--prefix-colors-test-12)',
                '--prefix-color-scheme-opacity': 'var(--prefix-colors-test-12-opacity)',
              },
            },
          },
        ])
      );
    });
  });

  describe('applyColorScheme', () => {
    it('should apply the color scheme', () => {
      const configTheme = {
        tokens: {
          colors: {
            test: {
              DEFAULT: 'red',
            },
          },
        },
        variants: [
          {
            name: 'test',
            definition: ['&.test', '&[data-test="test"]'],
          },
        ],
      } as any;

      const result = unwrapRE(applyColorScheme(configTheme), env);

      expect(result).toEqual({
        ...configTheme,
        variants: [
          {
            name: 'color-scheme-test',
            definition: ['&.color-scheme-test', '&[data-color-scheme="test"]'],
            utilities: {
              '.color-scheme-test,[data-color-scheme="test"]': expect.objectContaining({
                '--prefix-color-scheme': 'var(--prefix-colors-test)',
                '--prefix-color-scheme-opacity': 'var(--prefix-colors-test-opacity)',
                '--prefix-color-scheme-1': 'var(--prefix-colors-test-1)',
                '--prefix-color-scheme-1-opacity': 'var(--prefix-colors-test-1-opacity)',
              }),
            },
          },
          {
            name: 'test',
            definition: ['&.test', '&[data-test="test"]'],
          },
        ],
      });
    });
  });
});
