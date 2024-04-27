import { tv } from '../utils/tv';
import { VariantProps } from 'tailwind-variants';

const button = tv({
  base: [
    'appearance-none',
    'box-border',
    'font-normal',
    'inline-flex',
    'items-center',
    'justify-center',
    'min-w-max',
    'outline-none',
    'overflow-hidden',
    'relative',
    'select-none',
    'whitespace-nowrap',
    'z-0',
  ],
  variants: {
    variant: {
      filled: 'bg-color-scheme text-color-scheme-1 hover:bg-color-scheme/90',
      light: 'bg-color-scheme-3 hover:bg-color-scheme-3/90 text-color-scheme',
      outline: 'border-color-scheme border-small text-color-scheme hover:bg-color-scheme-2/90',
      subtle: 'text-color-scheme hover:bg-color-scheme-2/90',
      link: 'text-color-scheme hover:underline',
    },
    size: {
      xs: 'px-unit-2 min-w-unit-12 h-unit-6 text-xs gap-unit-1 rounded-sm',
      sm: 'px-unit-3 min-w-unit-16 h-unit-8 text-sm gap-unit-2 rounded-sm',
      md: 'px-unit-5 min-w-unit-20 h-unit-10 text-md gap-unit-4 rounded-md',
      lg: 'px-unit-6 min-w-unit-24 h-unit-12 text-lg gap-unit-6 rounded-md',
      xl: 'px-unit-8 min-w-unit-28 h-unit-14 text-xl gap-unit-8 rounded-lg',
    },
  },
  defaultVariants: {
    variant: 'filled',
    size: 'md',
  },
  compoundVariants: [],
});

export type ButtonVariantProps = VariantProps<typeof button>;

export { button };
