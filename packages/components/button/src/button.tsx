import React from 'react';
import { forwardRef, myra } from '@myraui/system';
import { useButton, UseButtonProps } from './use-button';

/**
 * Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
 */
const Button: React.FC<ButtonProps> = forwardRef<'button', ButtonProps>((props, baseRef) => {
  const { Component, ref, buttonProps, colorScheme } = useButton({ ...props, ref: baseRef });

  return (
    <myra.button colorScheme={colorScheme} ref={ref} as={Component} {...buttonProps}>
      {props.children}
    </myra.button>
  );
});

export interface ButtonProps extends UseButtonProps {}

Button.displayName = 'MyraUI.Button';

export default Button;
