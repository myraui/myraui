import { VariantProps } from 'tailwind-variants';
import { tv } from '../utils';

const icon = tv({
  base: 'w-4 h-4 leading inline-block text-color-scheme',
  variants: {
    size: {
      tiny: 'w-2 h-2',
      small: 'w-3 h-3',
      medium: 'w-4 h-4',
      large: 'w-6 h-6',
      huge: 'w-8 h-8',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

export type IconVariantProps = VariantProps<typeof icon>;

export { icon };
