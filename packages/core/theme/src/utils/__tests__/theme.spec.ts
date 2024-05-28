import {
  buildThemedUtilities,
  hasShade,
  isColorMode,
  isColorModeRecord,
  normalizeColorModeValue,
  resolveColorValue,
  resolveThemeColors,
  updateShadeSeparator,
} from '../theme';
import { myraColors } from '../../colors';
import { unwrapRE } from '@myraui/shared-utils';
import { buildCSSVariables, colorVariable } from '../css-variables';
import { ThemeEnv } from '../../theme.types';

const env: ThemeEnv = { defaultExtendTheme: 'light', prefix: 'prefix' };

describe('utils/theme', () => {
  describe('isColorMode', () => {
    it('should return true if the property is a color mode', () => {
      const result = isColorMode('light');
      expect(result).toBe(true);
    });

    it('should return false if the property is not a color mode', () => {
      const result = isColorMode('background');
      expect(result).toBe(false);
    });
  });

  describe('resolveColorValue', () => {
    const colorScale = myraColors.red.light;

    it('should return the color scale if the value is a color scale', () => {
      const result = resolveColorValue({}, colorScale);

      expect(result).toEqual(colorScale);
    });

    it('should return black if the value is not valid', () => {
      expect(resolveColorValue({}, 'invalid')).toEqual(myraColors.black.light);
      expect(resolveColorValue({ invalid: 'invalid' }, 'invalid')).toEqual(myraColors.black.light); // self reference
    });

    it('should resolve a valid color value', () => {
      expect(resolveColorValue({ red: myraColors.red.light, blue: myraColors.blue.light, primary: 'red' }, 'primary')).toEqual(myraColors.red.light);
    });
  });

  describe('resolveThemeColors', () => {
    it('should generate a valid color palette', () => {
      const result = resolveThemeColors({ red: myraColors.red.light, blue: myraColors.blue.light, primary: 'red' });

      expect(result).toEqual({
        red: myraColors.red.light,
        blue: myraColors.blue.light,
        primary: myraColors.red.light,
      });
    });
  });

  describe('buildThemedUtilities', () => {
    it('should build themed css variables', () => {
      const lightVariables = unwrapRE(colorVariable('background', { color: { value: 'blue' }, opacity: { value: 'green' } }), env);
      const darkVariables = unwrapRE(colorVariable('background', { color: { value: 'red' }, opacity: { value: 'pink' } }), env);

      const result = buildThemedUtilities({ light: buildCSSVariables(lightVariables), dark: buildCSSVariables(darkVariables) });

      expect(result).toEqual({
        '--prefix-colors-background': 'blue',
        '--prefix-colors-background-opacity': 'green',
        '.dark &,[data-theme="dark"] &': {
          '--prefix-colors-background': 'red',
          '--prefix-colors-background-opacity': 'pink',
        },
      });
    });
  });

  describe('normalizeThemedValue', () => {
    it('should keep a themed record as is', () => {
      expect(normalizeColorModeValue({ light: 'white', dark: 'black' })).toEqual({ light: 'white', dark: 'black' });
    });

    it('should normalize a themed value', () => {
      expect(normalizeColorModeValue('white')).toEqual({ light: 'white' });
    });
  });

  describe('isColorModeRecord', () => {
    it('should return true if the value is a color mode record', () => {
      expect(isColorModeRecord({ light: {}, dark: {} })).toBeTruthy();
    });

    it('should return false if the value is an empty record', () => {
      expect(isColorModeRecord({})).toBeFalsy();
    });

    it('should return true if it has the base theme only', () => {
      expect(isColorModeRecord({ light: {} })).toBeTruthy();
    });
  });

  describe('hasShade', () => {
    it('should return true if the color has a shade', () => {
      expect(hasShade('blue')).toBeFalsy();
      expect(hasShade('blue-100')).toBeTruthy();
      expect(hasShade('blue-DEFAULT')).toBeFalsy();
      expect(hasShade('color-scheme-1-blue')).toBeFalsy();
      expect(hasShade('color-scheme-1-blue-100')).toBeTruthy();
    });
  });

  describe('updateShadeSeparator', () => {
    it('should update the shade separator', () => {
      expect(updateShadeSeparator('blue')).toBe('blue');
      expect(updateShadeSeparator('blue-100')).toBe('blue.100');
      expect(updateShadeSeparator('blue-DEFAULT')).toBe('blue-DEFAULT');
      expect(updateShadeSeparator('color-scheme-1-blue')).toBe('color-scheme-1-blue');
      expect(updateShadeSeparator('color-scheme-1-blue-100')).toBe('color-scheme-1-blue.100');
    });
  });
});
