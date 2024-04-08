import { buildSemanticTokens, resolveSemanticTokens } from '../build-semantic-tokens';
import { unwrapRE } from '@myraui/utils';

describe('semantic-tokens/build-semantic-tokens', () => {
  describe('resolveSemanticTokens', () => {
    it('should resolve semantic tokens', () => {
      const result = unwrapRE(resolveSemanticTokens({ colors: { background: { primary: 'blue' } } }), { prefix: 'prefix' });

      expect(result.colors.map((variable) => ({ name: variable.name, value: variable.value }))).toEqual(
        expect.arrayContaining([
          {
            name: '--prefix-colors-background-primary',
            value: 'var(--prefix-colors-blue-9)',
          },
          {
            name: '--prefix-colors-background-primary-opacity',
            value: 'var(--prefix-colors-blue-9-opacity)',
          },
          {
            name: '--prefix-colors-background-primary-12',
            value: 'var(--prefix-colors-blue-12)',
          },
          {
            name: '--prefix-colors-background-primary-12-opacity',
            value: 'var(--prefix-colors-blue-12-opacity)',
          },
        ])
      );
    });
  });

  describe('buildSemanticTokens', () => {
    it('should generate CSS Variables from semantic tokens', () => {
      const result = unwrapRE(buildSemanticTokens({ colors: { background: { primary: 'blue' } } }), { prefix: 'prefix' });

      expect(result.map((variable) => ({ name: variable.name, value: variable.value }))).toEqual(
        expect.arrayContaining([
          {
            name: '--prefix-colors-background-primary',
            value: 'var(--prefix-colors-blue-9)',
          },
          {
            name: '--prefix-colors-background-primary-opacity',
            value: 'var(--prefix-colors-blue-9-opacity)',
          },
          {
            name: '--prefix-colors-background-primary-12',
            value: 'var(--prefix-colors-blue-12)',
          },
          {
            name: '--prefix-colors-background-primary-12-opacity',
            value: 'var(--prefix-colors-blue-12-opacity)',
          },
        ])
      );
    });
  });
});
