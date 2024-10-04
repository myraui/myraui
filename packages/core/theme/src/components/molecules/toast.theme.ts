import { tv, VariantProps } from '@nextui-org/react';

const toastActionTheme = tv({
  base: [
    'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ',
    'transition-colors hover:bg-default focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50',
    'group-[.success]:border-default/40 group-[.success]:hover:border-success/30 group-[.success]:hover:bg-success group-[.success]:hover:text-success-foreground group-[.success]:focus:ring-success-600',
    'group-[.danger]:border-default/40 group-[.danger]:hover:border-danger/30 group-[.danger]:hover:bg-danger group-[.danger]:hover:text-danger-foreground group-[.danger]:focus:ring-danger-600',
    'group-[.warning]:border-default/40 group-[.warning]:hover:border-warning/30 group-[.warning]:hover:bg-warning group-[.warning]:hover:text-warning-foreground group-[.warning]:focus:ring-warning-600',
    'group-[.primary]:border-default/40 group-[.primary]:hover:border-primary/30 group-[.primary]:hover:bg-primary group-[.primary]:hover:text-primary-foreground group-[.primary]:focus:ring-primary-600',
    'group-[.secondary]:border-default/40 group-[.secondary]:hover:border-secondary/30 group-[.secondary]:hover:bg-secondary group-[.secondary]:hover:text-secondary-foreground group-[.secondary]:focus:ring-secondary-600',
  ],
});

const toastTheme = tv({
  slots: {
    base: [
      'group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg ',
      'data-[swipe=cancel]:translate-x-0 ',
      'data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)]',
      'data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]',
      'data-[swipe=move]:transition-none ',
    ],
    close: [
      'absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 ',
      'group-[.danger]:text-danger-300 group-[.danger]:hover:text-danger-50 group-[.danger]:focus:ring-danger-400 group-[.danger]:focus:ring-offset-danger-600',
      'group-[.success]:text-success-300 group-[.success]:hover:text-success-50 group-[.success]:focus:ring-success-400 group-[.success]:focus:ring-offset-success-600',
      'group-[.warning]:text-warning-300 group-[.warning]:hover:text-warning-50 group-[.warning]:focus:ring-warning-400 group-[.warning]:focus:ring-offset-warning-600',
      'group-[.primary]:text-primary-300 group-[.primary]:hover:text-primary-50 group-[.primary]:focus:ring-primary-400 group-[.primary]:focus:ring-offset-primary-600',
      'group-[.secondary]:text-secondary-300 group-[.secondary]:hover:text-secondary-50 group-[.secondary]:focus:ring-secondary-400 group-[.secondary]:focus:ring-offset-secondary-600',
    ],
    closeIcon: 'h-4 w-4',
    description: 'text-sm opacity-90',
    title: 'text-sm font-semibold [&+div]:text-xs',
  },
  variants: {
    color: {
      default: 'border border-default-100 bg-default text-default-foreground',
      primary: 'primary group border-primary bg-primary-400 text-primary-foreground',
      secondary: 'secondary group border-secondary bg-secondary-400 text-secondary-foreground',
      success: 'success group border-success bg-success-400 text-success-foreground',
      danger: 'danger group border-danger bg-danger-400 text-danger-foreground',
      warning: 'warning group border-warning bg-warning-400 text-warning-foreground',
    },
    disableAnimation: {
      false: {
        base: [
          'transition-all',
          'data-[state=open]:animate-in ',
          'data-[state=closed]:animate-out ',
          'data-[swipe=end]:animate-out ',
          'data-[state=closed]:fade-out-80 ',
          'data-[state=closed]:slide-out-to-right-full ',
          'data-[state=open]:slide-in-from-top-full ',
          'data-[state=open]:sm:slide-in-from-bottom-full',
        ],
      },
    },
  },
  defaultVariants: {
    color: 'default',
    disableAnimation: false,
  },
});

export type ToastActionVariantProps = VariantProps<typeof toastActionTheme>;

export type ToastVariantProps = VariantProps<typeof toastTheme>;

export type ToastReturnType = ReturnType<typeof toastTheme>;

export { toastActionTheme, toastTheme };
