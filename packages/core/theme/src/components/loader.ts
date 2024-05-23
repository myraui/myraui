import { VariantProps } from 'tailwind-variants';
import { tv } from '../utils/tv';

const loader = tv({
  slots: {
    base: 'relative inline-flex flex-col gap-2 items-center justify-center',
    wrapper: 'relative flex',
    path1: '',
    path2: '',
    path3: '',
    path4: '',
    path5: '',
    label: 'text-color-scheme-foreground',
  },
  variants: {
    variant: {
      oval: {
        path1: [
          'absolute',
          'w-full',
          'h-full',
          'rounded-full',
          'animate-spin-ease',
          'border-solid',
          'border-color-scheme-foreground',
          'border-t-transparent',
          'border-l-transparent',
          'border-r-transparent',
        ],
        path2: [
          'absolute',
          'w-full',
          'h-full',
          'rounded-full',
          'opacity-75',
          'animate-spin-linear',
          'border-color-scheme-foreground',
          'border-dotted',
          'border-t-transparent',
          'border-l-transparent',
          'border-r-transparent',
        ],
        path3: 'hidden',
        path4: 'hidden',
        path5: 'hidden',
      },
      dots: {
        wrapper: 'grid grid-cols-3 items-center justify-center !h-auto',
        path1: ['w-full', 'aspect-square', 'rounded-full', 'animate-dots-loader-1', 'bg-color-scheme-foreground'],
        path2: ['w-full', 'aspect-square', 'rounded-full', 'animate-dots-loader-2', 'bg-color-scheme-foreground'],
        path3: ['w-full', 'aspect-square', 'rounded-full', 'animate-dots-loader-3', 'bg-color-scheme-foreground'],
        path4: 'hidden',
        path5: 'hidden',
      },
      bars: {
        wrapper: 'grid grid-cols-5 items-center justify-center',
        path1: ['h-full', 'w-full', 'animate-bars-loader-1', 'bg-color-scheme-foreground', 'rounded-small'],
        path2: ['h-full', 'w-full', 'animate-bars-loader-2', 'bg-color-scheme-foreground', 'rounded-small'],
        path3: ['h-full', 'w-full', 'animate-bars-loader-3', 'bg-color-scheme-foreground', 'rounded-small'],
        path4: ['h-full', 'w-full', 'animate-bars-loader-4', 'bg-color-scheme-foreground', 'rounded-small'],
        path5: ['h-full', 'w-full', 'animate-bars-loader-5', 'bg-color-scheme-foreground', 'rounded-small'],
      },
    },
    size: {
      tiny: {
        wrapper: 'w-3 h-3 gap-0.5',
        label: 'text-tiny',
      },
      small: {
        wrapper: 'w-5 h-5 gap-0.5',
        label: 'text-small',
      },
      medium: {
        wrapper: 'w-8 h-8 gap-1',
        label: 'text-medium',
      },
      large: {
        wrapper: 'w-10 h-10 gap-1.5',
        label: 'text-large',
      },
      huge: {
        wrapper: 'w-12 h-12 gap-2',
        label: 'text-huge',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'oval',
  },
  compoundVariants: [
    // oval loader
    {
      variant: 'oval',
      size: 'tiny',
      className: {
        path1: ['border-tiny'],
        path2: ['border-tiny'],
      },
    },
    {
      variant: 'oval',
      size: 'small',
      className: {
        path1: ['border-small'],
        path2: ['border-small'],
      },
    },
    {
      variant: 'oval',
      size: 'medium',
      className: {
        path1: ['border-medium'],
        path2: ['border-medium'],
      },
    },
    {
      variant: 'oval',
      size: 'large',
      className: {
        path1: ['border-large'],
        path2: ['border-large'],
      },
    },
    {
      variant: 'oval',
      size: 'huge',
      className: {
        path1: ['border-large'],
        path2: ['border-large'],
        path3: ['border-large'],
      },
    },
  ],
});

export type LoaderVariantProps = VariantProps<typeof loader>;
export type LoaderSlots = keyof ReturnType<typeof loader>;

export { loader };
