import myrauiPlugin, { combineBuiltThemes, createThemeSelector, resolveThemes } from './plugin';
import { getBaseStyles, MYRA_UI_PREFIX, myraColors } from '@myraui/theme';
import { expect } from '@storybook/jest';
import { unwrapRE } from '@myraui/utils';

jest.mock('tailwindcss/plugin.js', () => jest.fn((handler, config) => ({ handler, config })));

describe('plugin', () => {
  describe('combineBuiltThemes', () => {
    it('should combine the resolved themes into a utility object for tailwind', () => {
      const functionMock = jest.fn();
      const result = combineBuiltThemes({
        midnight: {
          colorMode: 'dark',
          tokens: { colors: { primary: functionMock, 'red-1': functionMock } } as any,
          utilities: [
            {
              name: '--prefix-colors-red-1',
              value: '0 19% 8%',
              reference: functionMock,
            },
            {
              name: '--prefix-colors-primary',
              value: 'var(--prefix-colors-red-9)',
              reference: functionMock,
            },
            {
              name: '--prefix-colors-primary-1',
              value: 'var(--prefix-colors-red-1)',
              reference: functionMock,
            },
          ],
        },
        dawn: {
          colorMode: 'light',
          tokens: { colors: { primary: functionMock, 'red-1': functionMock } } as any,
          utilities: [
            {
              name: '--prefix-colors-red-1',
              value: '0 19% 99%',
              reference: functionMock,
            },
            {
              name: '--prefix-colors-primary',
              value: 'var(--prefix-colors-red-9)',
              reference: functionMock,
            },
            {
              name: '--prefix-colors-primary-1',
              value: 'var(--prefix-colors-red-1)',
              reference: functionMock,
            },
          ],
        },
      })({ '--base-colors-primary': 'red' });

      console.log(result);

      expect(result).toEqual({
        baseStyles: {
          '--base-colors-primary': 'red',
        },
        tokens: {
          colors: { primary: functionMock, 'red-1': functionMock },
        },
        utilities: {
          ':root,.dawn,[data-theme="dawn"]': {
            '--prefix-colors-primary': 'var(--prefix-colors-red-9)',
            '--prefix-colors-primary-1': 'var(--prefix-colors-red-1)',
            '--prefix-colors-red-1': '0 19% 99%',
            'color-scheme': 'light',
          },
          ':root,.midnight,[data-theme="midnight"]': {
            '--prefix-colors-primary': 'var(--prefix-colors-red-9)',
            '--prefix-colors-primary-1': 'var(--prefix-colors-red-1)',
            '--prefix-colors-red-1': '0 19% 8%',
            'color-scheme': 'dark',
          },
        },
        variants: [
          {
            definition: ['&.dawn', '&[data-theme="dawn"]'],
            name: 'dawn',
          },
          {
            definition: ['&.midnight', '&[data-theme="midnight"]'],
            name: 'midnight',
          },
        ],
      });
    });
  });

  describe('resolveThemes', () => {
    it('should resolve the themes into a utility object for tailwind', () => {
      const result = unwrapRE(
        resolveThemes({
          midnight: { extend: 'dark', colors: { primary: 'red', red: myraColors.red.dark } },
          dawn: { colors: { red: myraColors.red.light, primary: 'red' } },
        }),
        { defaultExtendTheme: 'light', prefix: 'prefix' }
      );

      expect(result).toEqual({
        baseStyles: getBaseStyles('prefix'),
        tokens: expect.objectContaining({
          colors: expect.objectContaining({
            primary: expect.any(Function),
            'red-1': expect.any(Function),
            'primary-1': expect.any(Function),
          }),
        }),
        utilities: {
          ':root,.dawn,[data-theme="dawn"]': expect.objectContaining({
            '--prefix-colors-primary': 'var(--prefix-colors-red-9)',
            '--prefix-colors-primary-1': 'var(--prefix-colors-red-1)',
            '--prefix-colors-primary-1-opacity': 'var(--prefix-colors-red-1-opacity)',
            '--prefix-colors-primary-10': 'var(--prefix-colors-red-10)',
            '--prefix-colors-primary-opacity': 'var(--prefix-colors-red-9-opacity)',
            '--prefix-colors-red-1': '0 100% 99%',
            '--prefix-colors-red-10': '358 69% 55%',
            '--prefix-colors-red-11': '358 65% 49%',
            '--prefix-colors-red-12': '351 63% 24%',
            'color-scheme': 'light',
          }),
          ':root,.midnight,[data-theme="midnight"]': expect.objectContaining({
            '--prefix-colors-primary': 'var(--prefix-colors-red-9)',
            '--prefix-colors-primary-1': 'var(--prefix-colors-red-1)',
            '--prefix-colors-primary-1-opacity': 'var(--prefix-colors-red-1-opacity)',
            '--prefix-colors-primary-10': 'var(--prefix-colors-red-10)',
            '--prefix-colors-primary-10-opacity': 'var(--prefix-colors-red-10-opacity)',
            '--prefix-colors-primary-11': 'var(--prefix-colors-red-11)',
            '--prefix-colors-primary-11-opacity': 'var(--prefix-colors-red-11-opacity)',
            '--prefix-colors-primary-12': 'var(--prefix-colors-red-12)',
            '--prefix-colors-primary-12-opacity': 'var(--prefix-colors-red-12-opacity)',
            '--prefix-colors-primary-opacity': 'var(--prefix-colors-red-9-opacity)',
            '--prefix-colors-red-1': '0 19% 8%',
            '--prefix-colors-red-10': '0 79% 65%',
            '--prefix-colors-red-11': '2 100% 79%',
            '--prefix-colors-red-12': '350 100% 91%',
            '--prefix-colors-red-9': '358 75% 59%',
            'color-scheme': 'dark',
          }),
        },
        variants: [
          {
            definition: ['&.dawn', '&[data-theme="dawn"]'],
            name: 'dawn',
          },
          {
            definition: ['&.midnight', '&[data-theme="midnight"]'],
            name: 'midnight',
          },
        ],
      });
    });
  });

  describe('createThemeSelector', () => {
    it('should create the theme selector for the base theme', () => {
      const result = createThemeSelector('light');

      expect(result).toEqual('.light,[data-theme="light"]');
    });

    it('should create the theme selector for a custom theme', () => {
      const result = createThemeSelector('midnight');

      expect(result).toEqual(':root,.midnight,[data-theme="midnight"]');
    });
  });

  describe('myrauiPlugin', () => {
    let plugin: any;

    beforeEach(() => {
      plugin = myrauiPlugin({
        themes: {
          midnight: {
            extend: 'dark',
          },
        },
      });
    });

    it('should add styles', () => {
      const addBase = jest.fn();
      const addUtilities = jest.fn();
      const addVariant = jest.fn();

      plugin.handler({ addBase, addUtilities, addVariant });

      expect(addBase).toHaveBeenCalledWith({ ':root, [data-theme]': getBaseStyles(MYRA_UI_PREFIX) });

      expect(addUtilities).toHaveBeenCalledWith(
        expect.objectContaining({
          ':root,.midnight,[data-theme="midnight"]': expect.objectContaining({ '--myraui-colors-ruby-6': expect.any(String) }),
        })
      );

      expect(addVariant).toHaveBeenCalledWith('dark', ['&.dark', '&[data-theme="dark"]']);
      expect(addVariant).toHaveBeenCalledWith('light', ['&.light', '&[data-theme="light"]']);
      expect(addVariant).toHaveBeenCalledWith('midnight', ['&.midnight', '&[data-theme="midnight"]']);

      expect(plugin.config).toEqual({
        theme: {
          extend: expect.objectContaining({
            colors: expect.objectContaining({ 'red-1': expect.any(Function) }),
            spacing: expect.objectContaining({ unit: 4 }),
          }),
        },
      });
    });
  });
});
