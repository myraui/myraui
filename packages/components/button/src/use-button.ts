import { dataAttr } from '@myraui/shared-utils';
import { HTMLMyraProps } from '@myraui/system';
import { button, ButtonVariantProps } from '@myraui/theme';
import { AriaButtonProps, mergeProps, useButton as useAriaButton, useFocusRing } from 'react-aria';
import React, { HTMLAttributes, useMemo } from 'react';
import { useDOMRef } from '@myraui/react-utils';

interface Props extends HTMLMyraProps<'button'> {
  ref?: React.Ref<HTMLButtonElement | null>;
}

export type UseButtonProps = Props & Omit<AriaButtonProps, keyof ButtonVariantProps> & ButtonVariantProps;

export type UseButtonReturn = {
  Component: React.ElementType;
  styles: string;
  buttonProps: HTMLAttributes<HTMLButtonElement>;
  domRef: React.RefObject<HTMLButtonElement>;
};

export function useButton({ size, variant, radius, fullWidth, compact, isDisabled, as, ref, autoFocus, ...props }: UseButtonProps): UseButtonReturn {
  const Component = as || 'button';

  const domRef = useDOMRef(ref);

  const { isFocusVisible, isFocused, focusProps } = useFocusRing({
    autoFocus,
  });

  const styles = useMemo(() => {
    return button({
      size,
      variant,
      radius,
      fullWidth,
      compact,
      isDisabled,
    });
  }, [size, variant, radius, fullWidth, compact, isDisabled]);

  const { buttonProps: ariaButtonProps, isPressed } = useAriaButton(
    {
      elementType: Component,
      isDisabled,
      ...props,
    },
    domRef
  );

  const buttonProps = useMemo(() => {
    return {
      'data-disabled': dataAttr(isDisabled),
      'data-pressed': dataAttr(isPressed),
      'data-focused': dataAttr(isFocused),
      'data-focus-visible': dataAttr(isFocusVisible),
      ...mergeProps(ariaButtonProps, focusProps),
    };
  }, [ariaButtonProps, isPressed]);

  return {
    Component,
    styles,
    buttonProps,
    domRef,
  };
}
