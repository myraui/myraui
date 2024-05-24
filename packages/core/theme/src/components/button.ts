import { VariantProps } from 'tailwind-variants';
import { dataFocusVisibleClasses } from '../utils/classes';
import { tv } from '../utils/tv';

const button = tv({
  slots: {
    base: [
      'appearance-none',
      'box-border',
      'font-normal',
      'min-w-max',
      'outline-none',
      'overflow-hidden',
      'relative',
      'select-none',
      'whitespace-nowrap',
      'z-0',
      'data-[pressed=true]:translate-y-[1px]',
      ...dataFocusVisibleClasses,
    ],
    content: ['inline-flex', 'items-center', 'justify-center', 'min-w-max'],
    loader: ['absolute', 'w-full', 'h-full', 'flex', 'items-center', 'justify-center', 'top-0', 'right-0'],
  },
  variants: {
    variant: {
      default: 'bg-default-2 border-tiny border-default-4 text-default-11 hover:bg-default-3/90',
      filled: 'color-scheme/color-scheme-1 bg-color-scheme text-color-scheme-foreground hover:bg-color-scheme/90',
      light: 'color-scheme/color-scheme bg-color-scheme-3 hover:bg-color-scheme-4 text-color-scheme-foreground',
      outline: 'color-scheme/color-scheme border-color-scheme-foreground border-tiny text-color-scheme-foreground hover:bg-color-scheme-2/90',
      subtle: 'color-scheme/color-scheme text-color-scheme-foreground hover:bg-color-scheme-2/90',
      link: 'color-scheme/color-scheme text-color-scheme-foreground hover:underline',
    },
    size: {
      tiny: {
        base: 'px-unit-2 min-w-unit-12 h-unit-6 text-tiny',
        content: 'gap-unit-1',
      },
      small: {
        base: 'px-unit-3 min-w-unit-16 h-unit-8 text-small',
        content: 'gap-unit-2',
      },
      medium: {
        base: 'px-unit-5 min-w-unit-20 h-unit-10 text-medium',
        content: 'gap-unit-4',
      },
      large: {
        base: 'px-unit-6 min-w-unit-24 h-unit-12 text-large',
        content: 'gap-unit-6',
      },
      huge: {
        base: 'px-unit-8 min-w-unit-28 h-unit-14 text-huge',
        content: 'gap-unit-8',
      },
    },
    radius: {
      tiny: 'rounded-tiny',
      small: 'rounded-small',
      medium: 'rounded-medium',
      large: 'rounded-large',
      huge: 'rounded-huge',
      full: 'rounded-full',
    },
    fullWidth: {
      true: 'w-full',
      false: '',
    },
    compact: {
      true: '',
      false: '',
    },
    isDisabled: {
      true: 'opacity-disabled grayscale-disabled pointer-events-none',
      false: '',
    },
    isIconOnly: {
      true: {
        base: 'px-unit-0 min-w-0 aspect-square',
        content: 'w-full h-full !gap-unit-0',
      },
    },
    isLoading: {
      true: {
        base: 'pointer-events-none',
        content: 'translate-y-[-150%]',
        loader: 'translate-y-0',
      },
      false: {
        content: 'translate-y-0',
        loader: 'translate-y-[150%]',
      },
    },
    disableTransition: {
      true: 'transition-none',
      false: {
        content: 'transition-transform',
        loader: 'transition-transform',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'medium',
    radius: 'small',
    fullWidth: false,
    compact: false,
    isDisabled: false,
    isLoading: false,
    disableTransition: false,
    isIconOnly: false,
  },
  compoundVariants: [
    /** Compact Variant Sizes */
    {
      size: 'tiny',
      compact: true,
      className: 'px-unit-1 h-unit-5',
    },
    {
      size: 'small',
      compact: true,
      className: 'px-unit-1 h-unit-6',
    },
    {
      size: 'medium',
      compact: true,
      className: 'px-unit-3 h-unit-7',
    },
    {
      size: 'large',
      compact: true,
      className: 'px-unit-3 h-unit-8',
    },
    {
      size: 'huge',
      compact: true,
      className: 'px-unit-3 h-unit-9',
    },
  ],
});

export type ButtonVariantProps = VariantProps<typeof button>;

export { button };
