import { tv } from '../utils';
import { VariantProps } from 'tailwind-variants';

const loader = tv({
  slots: {
    base: '',
    wrapper: '',
    path1: '',
    path2: '',
    path3: '',
  },
  variants: {
    size: {
      tiny: '',
      small: '',
      medium: '',
      large: '',
      huge: '',
    },
  },
});

export type LoaderVariantProps = VariantProps<typeof loader>;
export type LoaderSlots = keyof ReturnType<typeof loader>;

export { loader };
