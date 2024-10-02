import { tv, VariantProps } from '@nextui-org/react';

const toastActionTheme = tv({
  base:
    'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ' +
    'transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none ' +
    'disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 ' +
    'group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
});

const toastTheme = tv({
  base:
    'group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden ' +
    'rounded-md border p-4 pr-6 shadow-lg data-[swipe=cancel]:translate-x-0 ' +
    'data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] ' +
    'data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out ' +
    'data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full ' +
    'data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
  variants: {
    variant: {
      default: 'border border-default-100 bg-background text-foreground',
      success: 'success group border-success bg-success text-success-foreground',
      danger: 'danger group border-danger bg-danger text-danger-foreground',
    },
    disableAnimation: {
      false: 'transition-all',
    },
  },
  defaultVariants: {
    variant: 'danger',
    disableAnimation: false,
  },
});

export type ToastActionVariantProps = VariantProps<typeof toastActionTheme>;

export type ToastVariantProps = VariantProps<typeof toastTheme>;

export { toastActionTheme, toastTheme };
