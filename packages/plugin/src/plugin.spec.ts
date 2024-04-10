import myrauiPlugin from './plugin';
import { getBaseStyles, MYRA_UI_PREFIX } from '@myraui/theme';
import { expect } from '@storybook/jest';

jest.mock('tailwindcss/plugin.js', () => jest.fn((handler, config) => ({ handler, config })));

describe('plugin', () => {
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
        extend: {
          colors: expect.objectContaining({ 'red-1': expect.any(Function) }),
        },
      },
    });
  });
});
