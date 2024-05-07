import { tv } from '../utils';
import { VariantProps } from 'tailwind-variants';

const loader = tv({
  slots: {
    base: 'relative inline-flex flex-col gap-2 items-center justify-center',
    wrapper: 'relative flex',
    path1: [
      'absolute',
      'w-full',
      'h-full',
      'rounded-full',
      'animate-spin-ease',
      'border-2',
      'border-solid',
      'border-t-transparent',
      'border-l-transparent',
      // 'border-r-transparent',
    ],
    path2: 'hidden',
    path3: 'hidden',
  },
  variants: {
    size: {
      tiny: {
        wrapper: 'w-10 h-10',
      },
      small: '',
      medium: '',
      large: '',
      huge: '',
    },
  },
  defaultVariants: {
    size: 'tiny',
  },
});

export type LoaderVariantProps = VariantProps<typeof loader>;
export type LoaderSlots = keyof ReturnType<typeof loader>;

export { loader };
