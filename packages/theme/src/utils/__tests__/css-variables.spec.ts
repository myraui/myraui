import { buildCSSVariables, colorVariable, cssVariable, isCSSVariable, opacityVariable, semanticTokenVariable } from '../css-variables';
import { unwrapRE } from '@myraui/utils';

describe('utils/css-variables', () => {
  describe('cssVariable', () => {
    it('should return a css variable', () => {
      const result = unwrapRE(cssVariable('background'), { prefix: 'prefix' });

      expect(result).toEqual({ name: '--prefix-background', reference: expect.any(Function), value: '' });
      expect(result.reference()).toEqual('var(--prefix-background)');
    });

    it('should return a css variable with a value', () => {
      const result = unwrapRE(cssVariable('background', { value: 'value' }), { prefix: 'prefix' });

      expect(result).toEqual({ name: '--prefix-background', reference: expect.any(Function), value: 'value' });
    });

    it('should return a css variable with a variable value', () => {
      const value = unwrapRE(cssVariable('value'), { prefix: 'prefix' });
      const result = unwrapRE(cssVariable('background', { value }), { prefix: 'prefix' });

      expect(result).toEqual({ name: '--prefix-background', reference: expect.any(Function), value: 'var(--prefix-value)' });
    });

    it('should return a css variable with a fallback', () => {
      const result = unwrapRE(cssVariable('background', { fallback: 'fallback' }), { prefix: 'prefix' });

      expect(result.reference()).toEqual('var(--prefix-background, fallback)');
      expect(result.reference('updated-fallback')).toEqual('var(--prefix-background, updated-fallback)');
    });

    it('should return a css variable with a variable fallback', () => {
      const fallback = unwrapRE(cssVariable('fallback'), { prefix: 'prefix' });
      const result = unwrapRE(cssVariable('background', { fallback }), { prefix: 'prefix' });

      expect(result.reference()).toEqual('var(--prefix-background, var(--prefix-fallback))');

      const updatedFallback = unwrapRE(cssVariable('updated-fallback'), { prefix: 'prefix' });

      expect(result.reference(updatedFallback)).toEqual('var(--prefix-background, var(--prefix-updated-fallback))');
    });
  });

  describe('semanticTokenVariable', () => {
    it('should create a variable from semantic tokens', () => {
      const result = unwrapRE(semanticTokenVariable('colors', 'background'), { prefix: 'prefix' });

      expect(result).toEqual({ name: '--prefix-colors-background', reference: expect.any(Function), value: '' });
    });
  });

  describe('colorVariable', () => {
    it('should create color with opacity variables', () => {
      const result = unwrapRE(colorVariable('background'), { prefix: 'prefix' });

      expect(result).toEqual([
        { name: '--prefix-colors-background', reference: expect.any(Function), value: '' },
        { name: '--prefix-colors-background-opacity', reference: expect.any(Function), value: '' },
      ]);
    });
  });

  describe('opacityVariable', () => {
    it('should create an opacity variable', () => {
      const result = unwrapRE(opacityVariable('background'), { prefix: 'prefix' });

      expect(result).toEqual({ name: '--prefix-colors-background-opacity', reference: expect.any(Function), value: '' });
    });
  });

  describe('isCSSVariable', () => {
    it('should return true for a css variable', () => {
      expect(isCSSVariable('--bg-primary')).toBeTruthy();
    });

    it('should return false for a non css variable', () => {
      expect(isCSSVariable('')).toBeFalsy();
    });
  });

  describe('buildCSSVariables', () => {
    it('should build css variables', () => {
      const variables = unwrapRE(colorVariable('background', { color: { value: 'red' } }), { prefix: 'prefix' });
      const result = buildCSSVariables(variables);

      expect(result).toEqual({ '--prefix-colors-background': 'red' });
    });
  });
});
