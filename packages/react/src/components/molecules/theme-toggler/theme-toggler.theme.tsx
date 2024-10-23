import { tv, VariantProps } from '@nextui-org/react';

const themeTogglerTheme = tv({
  slots: {
    base: 'border border-1 border-default p-2 bg-default/20',
    button: [
      'group inline-flex items-center justify-center m-0 border border-transparent border-2',
      'data-[selected=true]:border-default data-[selected=true]:bg-default/50',
    ],
  },
  variants: {
    size: {
      sm: {
        base: 'p-1 rounded-md',
        button: 'p-1 rounded-md',
      },
      md: {
        base: 'rounded-lg',
        button: 'p-1 rounded-md',
      },
      lg: {
        base: 'p-3 rounded-xl',
        button: 'p-3 rounded-lg',
      },
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

export type ThemeTogglerVariantProps = VariantProps<typeof themeTogglerTheme>;
export type ThemeTogglerSlots = keyof ReturnType<typeof themeTogglerTheme>;

export { themeTogglerTheme };
