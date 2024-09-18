import { capitalize, dashCase } from '../strings';

describe('strings', () => {
  describe('dashCase', () => {
    it('should convert camelCase to dash-case', () => {
      expect(dashCase('camelCase')).toBe('camel-case');
    });

    it('should convert PascalCase to dash-case', () => {
      expect(dashCase('PascalCase')).toBe('pascal-case');
    });
  });

  describe('capitalize', () => {
    it('should capitalize the first letter of a string', () => {
      expect(capitalize('string')).toBe('String');
    });
  });
});
