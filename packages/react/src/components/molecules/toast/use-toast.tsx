import type { ToastSlots, ToastVariantProps } from './toast.theme';
import { toastTheme } from './toast.theme';
import React, { PropsWithChildren, useMemo } from 'react';
import { mapPropsVariants, SlotsToClasses } from '@nextui-org/react';
import clsx from 'clsx';
import { DOMAttributes } from '@myraui/react-utils';
import { objectToDeps } from '@myraui/shared-utils';
import * as ToastPrimitives from '@radix-ui/react-toast';

interface Props {
  /**
   * Classname or List of classes to change the classNames of the element.
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <Toast classNames={{
   *    base: "base-classes", // toast wrapper
   *    content: "content-classes", // children wrapper
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<ToastSlots>;
}

export type UseToastProps = PropsWithChildren<Props> & React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & ToastVariantProps;

export function useToast(originalProps: UseToastProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, toastTheme.variantKeys);

  const { classNames, children, className, ...otherProps } = props;

  const slots = useMemo(
    () =>
      toastTheme({
        ...variantProps,
      }),
    [objectToDeps(variantProps)]
  );

  const baseStyles = clsx(classNames?.base, className);

  const getToastProps = (props: DOMAttributes = {}) => {
    return {
      className: slots.base({ class: clsx(baseStyles, props?.className) }),
      ...otherProps,
    };
  };

  return { slots, children, classNames, getToastProps };
}

export type UseToastReturn = ReturnType<typeof useToast>;
