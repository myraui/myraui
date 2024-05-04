import { Dict } from '@myraui/shared-utils';

export function getBaseStyles(prefix: string): Dict {
  return {
    color: `hsl(var(--${prefix}-colors-foreground))`,
    backgroundColor: `hsl(var(--${prefix}-colors-background))`,
  };
}
export const focusVisibleClasses = ['focus-visible:z-10', 'focus-visible:outline-2', 'focus-visible:outline-focus', 'focus-visible:outline-offset-2'];

export const dataFocusVisibleClasses = [
  'outline-none',
  'data-[focus-visible=true]:z-10',
  'data-[focus-visible=true]:outline-2',
  'data-[focus-visible=true]:outline-focus',
  'data-[focus-visible=true]:outline-offset-2',
];
