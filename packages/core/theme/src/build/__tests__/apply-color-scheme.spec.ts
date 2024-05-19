import { unwrapRE } from '@myraui/shared-utils';
import { applyColorScheme, applyColorSchemeUtilities, buildColorSchemeVariants, createColorSchemeSelector } from '../apply-color-scheme';
import { ThemeEnv } from '../../theme.types';

const env: ThemeEnv = { prefix: 'prefix', defaultExtendTheme: 'light' };

describe('build/apply-color-scheme', () => {
  describe('createColorSchemeSelector', () => {
    it('should return the correct value', () => {
      const selector = createColorSchemeSelector('test');

      expect(selector).toBe('color-scheme-test,[data-color-scheme="test"]');
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
        'color-scheme-test,[data-color-scheme="test"]': {
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
            test: 'red',
            primary: 'blue',
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
              'color-scheme-primary,[data-color-scheme="primary"]': expect.objectContaining({
                '--prefix-colors-color-scheme': 'var(--prefix-colors-primary)',
              }),
            },
          },
          {
            name: 'color-scheme-test',
            definition: ['&.color-scheme-test', '&[data-color-scheme="test"]'],
            utilities: {
              'color-scheme-test,[data-color-scheme="test"]': expect.objectContaining({
                '--prefix-colors-color-scheme': 'var(--prefix-colors-test)',
              }),
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
            test: 'red',
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
              'color-scheme-test,[data-color-scheme="test"]': expect.objectContaining({
                '--prefix-colors-color-scheme': 'var(--prefix-colors-test)',
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
