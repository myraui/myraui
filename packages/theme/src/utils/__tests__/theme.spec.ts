import {
  buildThemedCSSVariables,
  isColorMode,
  isThemeRecord,
  normalizeThemedValue,
  resolveColorValue,
  resolveThemeColors,
  resolveThemeRecord,
} from '../theme';
import { myraColors } from '../../colors';
import { unwrapRE } from '@myraui/utils';
import { colorVariable } from '../css-variables';
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

  describe('buildThemedCSSVariables', () => {
    it('should build themed css variables', () => {
      const lightVariables = unwrapRE(colorVariable('background', { color: { value: 'blue' }, opacity: { value: 'green' } }), env);
      const darkVariables = unwrapRE(colorVariable('background', { color: { value: 'red' }, opacity: { value: 'pink' } }), env);

      const result = buildThemedCSSVariables({ light: lightVariables, dark: darkVariables });

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

  describe('resolveThemeRecord', () => {
    it('should extract the resolve the theme record keys', () => {
      expect(resolveThemeRecord({ _light: 'white', _dark: 'blue', _midnight: 'green' })).toEqual({
        light: 'white',
        dark: 'blue',
        midnight: 'green',
      });
    });
  });

  describe('isThemeRecord', () => {
    it('should return true if the value is a theme record', () => {
      expect(isThemeRecord({ _light: 'white', _dark: 'blue', _midnight: 'green' })).toBeTruthy();
    });

    it('should return false if the value is an empty record', () => {
      expect(isThemeRecord({})).toBeFalsy();
    });

    it('should return false if the value does not have the base theme', () => {
      expect(isThemeRecord({ _dark: 'green' })).toBeFalsy();
    });
  });

  describe('normalizeThemedValue', () => {
    it('should keep a themed record as is', () => {
      expect(normalizeThemedValue({ _light: 'white', _dark: 'black' })).toEqual({ _light: 'white', _dark: 'black' });
    });

    it('should normalize a themed value', () => {
      expect(normalizeThemedValue('white')).toEqual({ _light: 'white' });
    });
  });
});
