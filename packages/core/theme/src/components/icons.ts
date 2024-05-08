import { VariantProps } from 'tailwind-variants';
import { tv } from '../utils';

const icons = tv({
   base: '',
   variants: {
     // Add your variants here
   }
});


export type IconsVariantProps = VariantProps<typeof icons>;

export { icons };