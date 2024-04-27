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
      filled: 'bg-color-scheme',
      light: '',
      outline: '',
      subtle: '',
      link: '',
    },
    size: {
      sm: 'px-unit-3 min-w-unit-16 h-unit-8 text-tiny gap-unit-2 rounded-sm',
      md: 'px-unit-5 min-w-unit-20 h-unit-10 text-medium gap-unit-4 rounded-md',
      lg: 'px-unit-6 min-w-unit-24 h-unit-12 text-large gap-unit-6 rounded-lg',
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
