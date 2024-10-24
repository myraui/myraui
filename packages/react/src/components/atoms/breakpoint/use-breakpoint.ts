import type { BreakpointSlots, BreakpointVariantProps } from './breakpoint.theme';
import { breakpointTheme } from './breakpoint.theme';
import React, { useMemo } from 'react';
import { mapPropsVariants, SlotsToClasses, PropGetter } from '@nextui-org/react';
import clsx from 'clsx';
import { objectToDeps } from '@myraui/shared-utils';

interface Props {
  /**
   * Classname or List of classes to change the classNames of the element.
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <Breakpoint classNames={{
   *    base: "base-classes", // breakpoint wrapper
   *    content: "content-classes", // children wrapper
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<BreakpointSlots>;

  /**
   * The element to be shown when the screen size is below the breakpoint.
   */
  below?: React.ReactElement<{ className?: string }>;
  /**
   * The element to be shown when the screen size is above the breakpoint.
   */
  above?: React.ReactElement<{ className?: string }>;
}

export type UseBreakpointProps = Props & BreakpointVariantProps;

export function useBreakpoint(originalProps: UseBreakpointProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, breakpointTheme.variantKeys);

  const { below, above, classNames } = props;

  const slots = useMemo(
    () =>
      breakpointTheme({
        ...variantProps,
      }),
    [objectToDeps(variantProps)]
  );

  const getBelowProps: PropGetter = (props = {}) => ({
    className: slots.below({ class: clsx(classNames?.below, props?.className) }),
  });

  const getAboveProps: PropGetter = (props = {}) => ({
    className: slots.above({ class: clsx(classNames?.above, props?.className) }),
  });

  return { below, above, slots, classNames, getAboveProps, getBelowProps };
}

export type UseBreakpointReturn = ReturnType<typeof useBreakpoint>;
