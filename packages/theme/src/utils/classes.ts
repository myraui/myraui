import { Dict } from '@myraui/utilities';

export function getBaseStyles(prefix: string): Dict {
  return {
    color: `hsl(var(--${prefix}-colors-foreground))`,
    backgroundColor: `hsl(var(--${prefix}-colors-background))`,
  };
}
