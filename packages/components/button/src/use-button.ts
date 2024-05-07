import { dataAttr } from '@myraui/shared-utils';
import { useVariantComponent, VariantComponentProps } from '@myraui/system';
import { button } from '@myraui/theme';
import { AriaButtonProps, mergeProps, useButton as useAriaButton, useFocusRing } from 'react-aria';
import { useMemo } from 'react';

type Props = VariantComponentProps<typeof button, 'button'>;

export type UseButtonProps = Props & AriaButtonProps;

export function useButton(originalProps: UseButtonProps) {
  const { Component, ref, autoFocus, isDisabled, colorScheme, ...otherProps } = useVariantComponent(originalProps, button, 'button');

  const { isFocusVisible, isFocused, focusProps } = useFocusRing({
    autoFocus,
  });

  const { buttonProps: ariaButtonProps, isPressed } = useAriaButton(
    {
      elementType: Component,
      isDisabled,
      ...otherProps,
    },
    ref
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
    buttonProps,
    ref,
    colorScheme,
  };
}

export type UseButtonReturn = ReturnType<typeof useButton>;
