import { tv, VariantProps } from '@nextui-org/react';

const breakpointTheme = tv({
  slots: {
    base: '',
    below: '',
    above: '',
  },
  variants: {
    on: {
      sm: {
        below: 'sm:hidden',
        above: 'hidden sm:block',
      },
      md: {
        below: 'md:hidden',
        above: 'hidden md:block',
      },
      lg: {
        below: 'lg:hidden',
        above: 'hidden lg:block',
      },
      xl: {
        below: 'xl:hidden',
        above: 'hidden xl:block',
      },
      '2xl': {
        below: '2xl:hidden',
        above: 'hidden 2xl:block',
      },
    },
  },
  defaultVariants: {
    on: 'md',
  },
});

export type BreakpointVariantProps = VariantProps<typeof breakpointTheme>;
export type BreakpointSlots = keyof ReturnType<typeof breakpointTheme>;

export { breakpointTheme };
