import React from 'react';
import { forwardRef } from '@myraui/system';
import { useButton, UseButtonProps } from './use-button';
import { Loader } from '@myraui/loader';

export interface ButtonProps extends UseButtonProps {}

/**
 * Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
 */
const Button: React.FC<ButtonProps> = forwardRef<'button', ButtonProps>((props, baseRef) => {
  const {
    Component,
    buttonProps,
    startSection,
    endSection,
    isLoading,
    loaderPlacement,
    loaderSize,
    loader = <Loader size={loaderSize} />,
  } = useButton({ ...props, ref: baseRef });

  return (
    <Component {...buttonProps}>
      {startSection}
      {isLoading && loaderPlacement === 'start' && loader}
      {props.children}
      {isLoading && loaderPlacement === 'end' && loader}
      {endSection}
    </Component>
  );
});

Button.displayName = 'MyraUI.Button';

export default Button;
