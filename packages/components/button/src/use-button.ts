import { Assign, dataAttr } from '@myraui/shared-utils';
import { HTMLMyraProps } from '@myraui/system';
import { button, ButtonVariantProps } from '@myraui/theme';
import { AriaButtonProps, useButton as useAriaButton } from 'react-aria';
import React, { useMemo } from 'react';
import { useDOMRef } from '@myraui/react-utils';

interface Props extends HTMLMyraProps<'button'> {
  ref?: React.Ref<HTMLButtonElement | null>;
}

export type UseButtonProps = Props & Omit<AriaButtonProps, keyof ButtonVariantProps> & ButtonVariantProps;

export function useButton({ size, variant, radius, fullWidth, compact, isDisabled, as, ref, ...props }: UseButtonProps) {
  const Component = as || 'button';

  const domRef = useDOMRef(ref);

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
      ...ariaButtonProps,
      'data-disabled': dataAttr(isDisabled),
      'data-pressed': dataAttr(isPressed),
    };
  }, [ariaButtonProps, isPressed]);

  return {
    Component,
    styles,
    buttonProps,
    domRef,
  };
}
