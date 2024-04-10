import {
  buildThemedCSSVariables,
  flattenColorPalette,
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
      expect(resolveColorValue({}, 'invalid')).toEqual(myraColors.blackAlpha.light);
      expect(resolveColorValue({ invalid: 'invalid' }, 'invalid')).toEqual(myraColors.blackAlpha.light); // self reference
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

  describe('flattenColorPalette', () => {
    it('should return a flat color palette', () => {
      const result = flattenColorPalette({ red: myraColors.red.light });

      expect(result).toEqual({
        'red-1': myraColors.red.light['1'],
        'red-2': myraColors.red.light['2'],
        'red-3': myraColors.red.light['3'],
        'red-4': myraColors.red.light['4'],
        'red-5': myraColors.red.light['5'],
        'red-6': myraColors.red.light['6'],
        'red-7': myraColors.red.light['7'],
        'red-8': myraColors.red.light['8'],
        'red-9': myraColors.red.light['9'],
        'red-10': myraColors.red.light['10'],
        'red-11': myraColors.red.light['11'],
        'red-12': myraColors.red.light['12'],
      });
    });
  });

  describe('buildThemedCSSVariables', () => {
    it('should build themed css variables', () => {
      const lightVariables = unwrapRE(colorVariable('background', { color: { value: 'blue' }, opacity: { value: 'green' } }), { prefix: 'prefix' });
      const darkVariables = unwrapRE(colorVariable('background', { color: { value: 'red' }, opacity: { value: 'pink' } }), { prefix: 'prefix' });

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
