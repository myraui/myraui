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
      default: 'bg-red-5',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type ButtonVariantProps = VariantProps<typeof button>;

export { button };
