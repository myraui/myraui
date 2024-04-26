import {
  buildCSSVariables,
  colorVariable,
  cssVariable,
  fontSizeVariable,
  isCSSVariable,
  opacityVariable,
  spacingUnitVariable,
  themeTokenVariable,
} from '../css-variables';
import { unwrapRE } from '@myraui/utils';
import { ThemeEnv } from '../../theme.types';

const env: ThemeEnv = { defaultExtendTheme: 'light', prefix: 'prefix' };

describe('utils/css-variables', () => {
  describe('cssVariable', () => {
    it('should return a css variable', () => {
      const result = unwrapRE(cssVariable('background'), env);

      expect(result).toEqual({ name: '--prefix-background', reference: expect.any(Function), value: '' });
      expect(result.reference()).toEqual('var(--prefix-background)');
    });

    it('should return a css variable with a value', () => {
      const result = unwrapRE(cssVariable('background', { value: 'value' }), env);

      expect(result).toEqual({ name: '--prefix-background', reference: expect.any(Function), value: 'value' });
    });

    it('should return a css variable with a variable value', () => {
      const value = unwrapRE(cssVariable('value'), env);
      const result = unwrapRE(cssVariable('background', { value }), env);

      expect(result).toEqual({ name: '--prefix-background', reference: expect.any(Function), value: 'var(--prefix-value)' });
    });

    it('should return a css variable with a fallback', () => {
      const result = unwrapRE(cssVariable('background', { fallback: 'fallback' }), env);

      expect(result.reference()).toEqual('var(--prefix-background, fallback)');
      expect(result.reference('updated-fallback')).toEqual('var(--prefix-background, updated-fallback)');
    });

    it('should return a css variable with a variable fallback', () => {
      const fallback = unwrapRE(cssVariable('fallback'), env);
      const result = unwrapRE(cssVariable('background', { fallback }), env);

      expect(result.reference()).toEqual('var(--prefix-background, var(--prefix-fallback))');

      const updatedFallback = unwrapRE(cssVariable('updated-fallback'), env);

      expect(result.reference(updatedFallback)).toEqual('var(--prefix-background, var(--prefix-updated-fallback))');
    });
  });

  describe('semanticTokenVariable', () => {
    it('should create a variable from semantic tokens', () => {
      const result = unwrapRE(themeTokenVariable('colors', 'background'), env);

      expect(result).toEqual({ name: '--prefix-colors-background', reference: expect.any(Function), value: '' });
    });
  });

  describe('colorVariable', () => {
    it('should create color with opacity variables', () => {
      const result = unwrapRE(colorVariable('background'), env);

      expect(result).toEqual([
        { name: '--prefix-colors-background', reference: expect.any(Function), value: '' },
        { name: '--prefix-colors-background-opacity', reference: expect.any(Function), value: '' },
      ]);
    });
  });

  describe('opacityVariable', () => {
    it('should create an opacity variable', () => {
      const result = unwrapRE(opacityVariable('background'), env);

      expect(result).toEqual({ name: '--prefix-colors-background-opacity', reference: expect.any(Function), value: '' });
    });
  });

  describe('isCSSVariable', () => {
    it('should return true for a css variable', () => {
      const variable = unwrapRE(cssVariable('background'), env);
      expect(isCSSVariable(variable)).toBeTruthy();
    });

    it('should return false for a non css variable', () => {
      expect(isCSSVariable('')).toBeFalsy();
    });
  });

  describe('buildCSSVariables', () => {
    it('should build css variables', () => {
      const variables = unwrapRE(colorVariable('background', { color: { value: 'red' } }), env);
      const result = buildCSSVariables(variables);

      expect(result).toEqual({ '--prefix-colors-background': 'red' });
    });
  });

  describe('spacingUnitVariable', () => {
    it('should create a spacing unit variable', () => {
      const result = unwrapRE(spacingUnitVariable(1, { value: '2px' }), env);

      expect(result).toEqual({ name: '--prefix-spacing-unit-1', reference: expect.any(Function), value: '2px' });
    });

    it('should create a base spacing unit', () => {
      const result = unwrapRE(spacingUnitVariable(), env);

      expect(result).toEqual({ name: '--prefix-spacing-unit', reference: expect.any(Function), value: '' });
    });
  });

  describe('fontSizeVariable', () => {
    it('should create a font size variable', () => {
      const result = unwrapRE(fontSizeVariable('medium'), env);

      expect(result).toEqual([
        { name: '--prefix-font-size-medium', reference: expect.any(Function), value: '' },
        { name: '--prefix-line-height-medium', reference: expect.any(Function), value: '' },
      ]);
    });

    it('should create a font size variable with options', () => {
      const result = unwrapRE(fontSizeVariable('medium', { fontSize: { value: '2rem' }, lineHeight: { value: '2' } }), env);

      expect(result).toEqual([
        { name: '--prefix-font-size-medium', reference: expect.any(Function), value: '2rem' },
        { name: '--prefix-line-height-medium', reference: expect.any(Function), value: '2' },
      ]);
    });
  });
});
