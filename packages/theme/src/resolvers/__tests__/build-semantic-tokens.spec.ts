import { buildSemanticRecord, buildSemanticTokens, createSemanticTokens, resolveSemanticTokens } from '../build-semantic-tokens';
import { unwrapRE } from '@myraui/utils';
import { fontSize } from '../../theme/fontSize';

describe('resolvers/build-resolvers', () => {
  describe('createSemanticTokens', () => {
    it('should create semantic tokens from a non-value', () => {
      const result = createSemanticTokens();
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
        minWidth: {},
        minHeight: {},
      });
    });

    it('should create semantic tokens from a value without colors', () => {
      const result = createSemanticTokens({});
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
        minWidth: {},
        minHeight: {},
      });
    });

    it('should create semantic tokens from a value with colors', () => {
      const result = createSemanticTokens({ colors: { background: { primary: 'blue' } } });
      expect(result).toEqual({
        colors: { background: { primary: 'blue' } },
        fontSize: {},
        lineHeight: {},
        width: {},
        height: {},
        radius: {},
        boxShadow: {},
        borderWidth: {},
        opacity: {},
        minWidth: {},
        minHeight: {},
      });
    });
  });

  describe('buildSemanticRecord', () => {
    it('should build the variables for a semantic record', () => {
      const result = unwrapRE(buildSemanticRecord('colors', { background: { primary: 'blue' } }), { prefix: 'prefix' });

      expect(result).toEqual(
        expect.objectContaining({
          'background-primary': expect.objectContaining({
            'background-primary-12': {
              value: expect.any(Function),
              utilities: [
                {
                  name: '--prefix-colors-background-primary-12',
                  value: 'var(--prefix-colors-blue-12)',
                  reference: expect.any(Function),
                },
                {
                  name: '--prefix-colors-background-primary-12-opacity',
                  value: 'var(--prefix-colors-blue-12-opacity)',
                  reference: expect.any(Function),
                },
              ],
            },
            'background-primary': {
              value: expect.any(Function),
              utilities: [
                {
                  name: '--prefix-colors-background-primary',
                  value: 'var(--prefix-colors-blue-9)',
                  reference: expect.any(Function),
                },
                {
                  name: '--prefix-colors-background-primary-opacity',
                  value: 'var(--prefix-colors-blue-9-opacity)',
                  reference: expect.any(Function),
                },
              ],
            },
          }),
        })
      );
    });
  });

  describe('resolveSemanticTokens', () => {
    it('should generate the resolved semantic tokens as variables', () => {
      const result = unwrapRE(resolveSemanticTokens({ colors: { background: { primary: 'blue' } } } as any), { prefix: 'prefix' });

      expect(result).toEqual(
        expect.objectContaining({
          colors: {
            'background-primary': expect.objectContaining({
              'background-primary-12': {
                value: expect.any(Function),
                utilities: [
                  {
                    name: '--prefix-colors-background-primary-12',
                    value: 'var(--prefix-colors-blue-12)',
                    reference: expect.any(Function),
                  },
                  {
                    name: '--prefix-colors-background-primary-12-opacity',
                    value: 'var(--prefix-colors-blue-12-opacity)',
                    reference: expect.any(Function),
                  },
                ],
              },
              'background-primary': {
                value: expect.any(Function),
                utilities: [
                  {
                    name: '--prefix-colors-background-primary',
                    value: 'var(--prefix-colors-blue-9)',
                    reference: expect.any(Function),
                  },
                  {
                    name: '--prefix-colors-background-primary-opacity',
                    value: 'var(--prefix-colors-blue-9-opacity)',
                    reference: expect.any(Function),
                  },
                ],
              },
            }),
          },
        })
      );
    });
  });

  describe('buildSemanticTokens', () => {
    it('should generate CSS Variables from semantic tokens', () => {
      const result = unwrapRE(buildSemanticTokens({ colors: { background: { primary: 'blue' } } } as any), { prefix: 'prefix' });

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
