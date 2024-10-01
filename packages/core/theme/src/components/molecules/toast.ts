import { tv, VariantProps } from '@nextui-org/react';

const toastAction = tv({
  base: 'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
});

export type ToastActionSlots = keyof ReturnType<typeof toastAction>;
export type ToastActionVariantProps = VariantProps<typeof toastAction>;

export { toastAction };
