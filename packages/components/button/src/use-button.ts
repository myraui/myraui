import { dataAttr } from '@myraui/shared-utils';
import { MyraComponentProps, useMyraComponent } from '@myraui/system';
import { button } from '@myraui/theme';
import { AriaButtonProps, mergeProps, useButton as useAriaButton, useFocusRing } from 'react-aria';
import { cloneElement, isValidElement, ReactNode, useMemo } from 'react';
import { LoaderProps } from '@myraui/loader';

interface Props {
  /**
   * The button start content.
   */
  startSection?: ReactNode;
  /**
   * The button end content.
   */
  endSection?: ReactNode;

  /**
   * Loader to display when loading
   */
  loader?: ReactNode;

  /**
   * The loader props.
   */
  loaderProps?: LoaderProps;

  /**
   * Whether the button should display a loading spinner.
   * @default false
   */
  isLoading?: boolean;
}

export type UseButtonProps = Props & AriaButtonProps & MyraComponentProps<typeof button, 'button'>;

const getElementClone = (element: ReactNode) => {
  return isValidElement(element) ? cloneElement<any>(element, { 'aria-hidden': true, focusable: false, tabIndex: -1 }) : null;
};

export function useButton(originalProps: UseButtonProps) {
  const {
    Component,
    slots,
    classNames,
    componentProps: { autoFocus, startSection, endSection, loader, ref, loaderProps, ...otherProps },
    variantProps: { size, isLoading, isDisabled: isDisabledProp },
  } = useMyraComponent({ ...originalProps }, button, 'button');

  const isDisabled = isDisabledProp || isLoading;

  const { isFocusVisible, isFocused, focusProps } = useFocusRing({ autoFocus });

  const { buttonProps: ariaButtonProps, isPressed } = useAriaButton({ elementType: Component, isDisabled, ...otherProps }, ref);

  const startSectionClone = getElementClone(startSection);
  const endSectionClone = getElementClone(endSection);

  const buttonProps = useMemo(() => {
    return {
      'data-disabled': dataAttr(isDisabled),
      'data-pressed': dataAttr(isPressed),
      'data-focused': dataAttr(isFocused),
      'data-focus-visible': dataAttr(isFocusVisible),
      'data-loading': dataAttr(isLoading),
      ref,
      ...mergeProps(ariaButtonProps, focusProps),
      ...otherProps,
    };
  }, [ariaButtonProps, isPressed, otherProps, isDisabled, isFocused, isFocusVisible, isLoading, focusProps]);

  const loaderSize = useMemo(() => {
    return {
      tiny: 'tiny',
      small: 'small',
      medium: 'small',
      large: 'medium',
      huge: 'medium',
    }[size || 'medium'] as typeof size;
  }, [size]);

  return {
    Component,
    buttonProps,
    startSection: startSectionClone,
    endSection: endSectionClone,
    isLoading,
    slots,
    classNames,
    loader,
    loaderSize,
    loaderProps,
  };
}

export type UseButtonReturn = ReturnType<typeof useButton>;
