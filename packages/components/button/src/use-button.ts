import { dataAttr } from '@myraui/shared-utils';
import { MyraComponentProps, useMyraComponent } from '@myraui/system';
import { button } from '@myraui/theme';
import { AriaButtonProps, mergeProps, useButton as useAriaButton, useFocusRing } from 'react-aria';
import { cloneElement, isValidElement, ReactNode, useMemo } from 'react';

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
   * The loader placement.
   * @default start
   */
  loaderPlacement?: 'start' | 'end';

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
    domRef,
    componentProps: { autoFocus, isDisabled, startSection, endSection, loader, loaderPlacement = 'start', isLoading = false, ...otherProps },
    variantProps: { size },
  } = useMyraComponent({ ...originalProps }, button, 'button');

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

  const startSectionClone = getElementClone(startSection);
  const endSectionClone = getElementClone(endSection);

  const buttonProps = useMemo(() => {
    return {
      'data-disabled': dataAttr(isDisabled),
      'data-pressed': dataAttr(isPressed),
      'data-focused': dataAttr(isFocused),
      'data-focus-visible': dataAttr(isFocusVisible),
      'data-loading': dataAttr(isLoading),
      ...mergeProps(ariaButtonProps, focusProps),
    };
  }, [ariaButtonProps, isPressed]);

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
    loader,
    loaderPlacement,
    loaderSize,
  };
}

export type UseButtonReturn = ReturnType<typeof useButton>;
