import { tv, VariantProps } from '@nextui-org/react';

const themeSwitcherTheme = tv({
  slots: {
    base: ''
  },
  variants: {
  }
});

export type ThemeSwitcherVariantProps = VariantProps<typeof themeSwitcherTheme>;
export type ThemeSwitcherSlots = keyof ReturnType<typeof themeSwitcherTheme>;

export { themeSwitcherTheme };
