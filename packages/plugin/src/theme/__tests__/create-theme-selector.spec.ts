import { createThemeSelector } from '../create-theme-selector';

describe('theme/create-theme-selector', () => {
  describe('createThemeSelector', () => {
    it('should create the theme selector for the base theme', () => {
      const result = createThemeSelector('light');

      expect(result).toEqual('.light,[data-theme="light"]');
    });

    it('should create the theme selector for a custom theme', () => {
      const result = createThemeSelector('midnight');

      expect(result).toEqual(':root,.midnight,[data-theme="midnight"]');
    });
  });
});
