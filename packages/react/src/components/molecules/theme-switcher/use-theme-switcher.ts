import type { ThemeSwitcherSlots, ThemeSwitcherVariantProps } from './theme-switcher.theme';
import { themeSwitcherTheme } from './theme-switcher.theme';
import { useEffect, useMemo, useState } from 'react';
import { ButtonProps, mapPropsVariants, SlotsToClasses } from '@nextui-org/react';
import clsx from 'clsx';
import { DOMAttributes, themes } from '@myraui/react-utils';
import { objectToDeps } from '@myraui/shared-utils';
import { useTheme } from 'next-themes';

interface Props extends Omit<ButtonProps, 'children'> {
  /**
   * Classname or List of classes to change the classNames of the element.
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <ThemeSwitcher classNames={{
   *    base: "base-classes", // theme-switcher wrapper
   *    content: "content-classes", // children wrapper
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<ThemeSwitcherSlots>;

  switcherType?: 'default' | 'dropdown';
}

export type UseThemeSwitcherProps = Props & ThemeSwitcherVariantProps;

export function useThemeSwitcher({ switcherType = 'default', ...originalProps }: UseThemeSwitcherProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, themeSwitcherTheme.variantKeys);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const { as, className, classNames, ...otherProps } = props;

  const Component = as || 'div';

  const ButtonIcon = useMemo(() => {
    return theme === 'light' ? themes.light.icon : themes.dark.icon;
  }, [theme]);

  const slots = useMemo(
    () =>
      themeSwitcherTheme({
        ...variantProps,
      }),
    [objectToDeps(variantProps)]
  );

  const baseStyles = clsx(classNames?.base, className);

  const getButtonProps = (props: DOMAttributes = {}): Omit<ButtonProps, 'children'> => {
    return {
      className: slots.base({ class: clsx(baseStyles, props?.className) }),
      ...otherProps,
    };
  };

  return { Component, slots, classNames, switcherType, getButtonProps, mounted, theme, setTheme, ButtonIcon };
}

export type UseThemeSwitcherReturn = ReturnType<typeof useThemeSwitcher>;
