import { buildColorSchemeClasses } from '../component-theme';

describe('utils/component-theme', () => {
  describe('buildColorSchemeClasses', () => {
    it('should generate classes from a component color scheme', () => {
      const result = buildColorSchemeClasses('green.2', 'blue');

      expect(result).toEqual('color-scheme-green-2/blue');
    });

    it('should resolve a themed color scheme', () => {
      const result = buildColorSchemeClasses({ dark: 'green', light: 'blue.8' }, { dark: 'green', light: 'blue' });

      expect(result).toEqual('dark:color-scheme-green/green color-scheme-blue-8/blue');
    });

    it('should resolve a missing background', () => {
      expect(buildColorSchemeClasses(undefined, { dark: 'blue', light: 'white' })).toEqual('color-scheme/white dark:color-scheme/blue');
      expect(buildColorSchemeClasses({ light: 'green' }, { dark: 'blue', light: 'white' })).toEqual(
        'color-scheme-green/white dark:color-scheme/blue'
      );
    });
    it('should be empty when no color scheme is provided', () => {
      const result = buildColorSchemeClasses();

      expect(result).toEqual('');
    });
  });
});
