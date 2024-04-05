import { Dict } from '@myraui/utils';

export function getBaseStyles(prefix: string): Dict {
  return {
    color: `hsl(var(--${prefix}-colors-foreground))`,
    backgroundColor: `hsl(var(--${prefix}-colors-background))`,
  };
}
