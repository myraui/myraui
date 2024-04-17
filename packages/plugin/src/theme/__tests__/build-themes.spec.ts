import { applyBaseTheme, buildThemes, createBaseThemes } from '../build-themes';
import { getByColorMode, semanticTokens } from '@myraui/theme';
import { unwrapRE } from '@myraui/utils';

describe('theme/build-themes', () => {
  describe('applyBaseTheme', () => {
    it('should build the theme based on the color mode', () => {
      const result = applyBaseTheme('midnight', {}, 'light');

      expect(result).toEqual({ colorPalette: getByColorMode('light'), ...semanticTokens.light, spacingUnit: 4 });
    });

    it('should use the theme.extend value', () => {
      const result = applyBaseTheme('midnight', { extend: 'dark' }, 'light');

      expect(result).toEqual({ colorPalette: getByColorMode('dark'), ...semanticTokens.dark, spacingUnit: 4, extend: 'dark' });
    });

    it('should ignore the theme.extend and defaultExtendTheme for base themes', () => {
      const result = applyBaseTheme('light', { extend: 'dark' }, 'dark');

      expect(result).toEqual({ colorPalette: getByColorMode('light'), ...semanticTokens.light, spacingUnit: 4, extend: 'dark' });
    });
  });

  describe('createBaseThemes', () => {
    it('should create the base themes', () => {
      const result = createBaseThemes({ midnight: {}, dawn: {} });

      expect(result).toEqual({ dark: {}, light: {}, midnight: {}, dawn: {} });
    });

    it('should not overwrite the dark and light themes', () => {
      const result = createBaseThemes({ dark: { colors: { primary: 'blue' } }, light: { colors: { primary: 'blue' } } });

      expect(result).toEqual({ dark: { colors: { primary: 'blue' } }, light: { colors: { primary: 'blue' } } });
    });
  });

  describe('buildThemes', () => {
    it('should build the themes', () => {
      const result = unwrapRE(buildThemes({ midnight: { extend: 'dark' }, dawn: {} }), { defaultExtendTheme: 'light', prefix: 'prefix' });

      expect(result).toEqual({
        midnight: { colorPalette: getByColorMode('dark'), ...semanticTokens.dark, spacingUnit: 4, extend: 'dark' },
        dawn: { colorPalette: getByColorMode('light'), ...semanticTokens.light, spacingUnit: 4 },
        light: { colorPalette: getByColorMode('light'), ...semanticTokens.light, spacingUnit: 4 },
        dark: { colorPalette: getByColorMode('dark'), ...semanticTokens.dark, spacingUnit: 4 },
      });
    });
  });
});
