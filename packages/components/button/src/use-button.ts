import { dataAttr } from '@myraui/shared-utils';
import { MyraComponentProps, useMyraComponent } from '@myraui/system';
import { button } from '@myraui/theme';
import { AriaButtonProps, mergeProps, useButton as useAriaButton, useFocusRing } from 'react-aria';
import { ReactNode, useMemo } from 'react';

interface Props {
  /**
   * The button start content.
   */
  startSection?: ReactNode;
  /**
   * The button end content.
   */
  endSection?: ReactNode;
}

export type UseButtonProps = Props & AriaButtonProps & MyraComponentProps<typeof button, 'button'>;

export function useButton(originalProps: UseButtonProps) {
  const {
    Component,
    domRef,
    componentProps: { autoFocus, isDisabled, startSection, endSection, ...otherProps },
  } = useMyraComponent(originalProps, button, 'button');

  const { isFocusVisible, isFocused, focusProps } = useFocusRing({
    autoFocus,
  });

  const { buttonProps: ariaButtonProps, isPressed } = useAriaButton(
    {
      elementType: Component,
      isDisabled,
      ...otherProps,
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
    buttonProps,
    startSection,
    endSection,
  };
}

export type UseButtonReturn = ReturnType<typeof useButton>;
