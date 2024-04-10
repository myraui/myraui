import { generateColorResolver } from '../generate-color-resolver';
import { unwrapRE } from '@myraui/utils';

describe('generate-color-resolver', () => {
  const resolver = unwrapRE(generateColorResolver('primary'), { prefix: 'prefix', defaultExtendTheme: 'light' });

  it('should use the provided value if the opacity is set with a slash', () => {
    expect(resolver({ opacityVariable: '', opacityValue: '90' })).toBe('hsl(var(--prefix-colors-primary) / 90)');
  });

  it('should use the myrauiOpacityVariable if no opacityValue was provided', () => {
    expect(resolver({ opacityVariable: '--tw-bg-opacity', opacityValue: '' })).toBe(
      'hsl(var(--prefix-colors-primary) / var(--prefix-colors-primary-opacity, var(--tw-bg-opacity)))'
    );
  });

  it('should use 1 if the opacityValue was not provided', () => {
    expect(resolver({ opacityVariable: '', opacityValue: '' })).toBe('hsl(var(--prefix-colors-primary) / var(--prefix-colors-primary-opacity, 1))');
  });
});
