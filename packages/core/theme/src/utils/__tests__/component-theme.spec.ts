import { buildColorSchemeClasses } from '../component-theme';

describe('utils/component-theme', () => {
  describe('buildColorSchemeClasses', () => {
    it('should generate classes from a component color scheme', () => {
      const result = buildColorSchemeClasses('green.2');

      expect(result).toEqual('color-scheme-green-2');
    });

    it('should resolve a themed color scheme', () => {
      const result = buildColorSchemeClasses({ dark: 'green', light: 'blue.8' });

      expect(result).toEqual('dark:color-scheme-green color-scheme-blue-8');
    });
  });
});
