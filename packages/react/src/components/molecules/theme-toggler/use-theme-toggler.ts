import type { ThemeTogglerVariantProps } from './theme-toggler.theme';
import { ThemeTogglerSlots, themeTogglerTheme } from './theme-toggler.theme';
import { useMemo } from 'react';
import { mapPropsVariants, RadioGroupProps, SlotsToClasses } from '@nextui-org/react';
import clsx from 'clsx';
import { PropGetter } from '@myraui/react-utils';
import { objectToDeps } from '@myraui/shared-utils';
import { useTheme } from 'next-themes';

interface Props extends RadioGroupProps {
  /**
   * Classname or List of classes to change the classNames of the element.
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <ThemeToggler classNames={{
   *    base: "base-classes", // theme-switcher wrapper
   *    content: "content-classes", // children wrapper
   * }} />
   * ```
   */
  classNames?: RadioGroupProps['classNames'] & SlotsToClasses<ThemeTogglerSlots>;
}

export type UseThemeTogglerProps = Props & ThemeTogglerVariantProps;

export function useThemeToggler(originalProps: UseThemeTogglerProps) {
  const [props, variantProps] = mapPropsVariants({ orientation: 'horizontal', ...originalProps }, themeTogglerTheme.variantKeys);
  const { theme, setTheme } = useTheme();

  const { as, className, classNames, children, ...otherProps } = props;

  const Component = as || 'div';

  const slots = useMemo(
    () =>
      themeTogglerTheme({
        ...variantProps,
      }),
    [objectToDeps(variantProps)]
  );

  const baseStyles = clsx(classNames?.base, className);

  const getThemeTogglerProps: PropGetter = (props = {}) => {
    return {
      className: slots.base({ class: clsx(baseStyles, props?.className) }),
      ...otherProps,
    };
  };

  const getButtonProps: PropGetter = (props = {}) => {
    return {
      className: slots.button({ class: clsx(classNames?.button, props?.className) }),
    };
  };

  return { Component, slots, children, classNames, getThemeTogglerProps, theme, setTheme, getButtonProps };
}

export type UseThemeTogglerReturn = ReturnType<typeof useThemeToggler>;
