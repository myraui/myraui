import { createThemeTokens } from '../create-theme-tokens';

describe('utils/create-theme-tokens', () => {
  describe('createThemeTokens', () => {
    it('should create theme tokens from a non-value', () => {
      const result = createThemeTokens();
      expect(result).toEqual({
        colors: {},
        fontSize: {},
        lineHeight: {},
        width: {},
        height: {},
        radius: {},
        boxShadow: {},
        borderWidth: {},
        opacity: {},
        spacing: {},
        minWidth: {},
        minHeight: {},
      });
    });

    it('should create theme tokens from a value without colors', () => {
      const result = createThemeTokens({});
      expect(result).toEqual({
        colors: {},
        fontSize: {},
        lineHeight: {},
        width: {},
        height: {},
        radius: {},
        boxShadow: {},
        spacing: {},
        borderWidth: {},
        opacity: {},
        minWidth: {},
        minHeight: {},
      });
    });

    it('should create theme tokens from a value with colors', () => {
      const result = createThemeTokens({ colors: { background: 'blue' } });
      expect(result).toEqual({
        colors: { background: 'blue' },
        fontSize: {},
        lineHeight: {},
        width: {},
        height: {},
        radius: {},
        boxShadow: {},
        borderWidth: {},
        opacity: {},
        spacing: {},
        minWidth: {},
        minHeight: {},
      });
    });
  });
});
