import React from 'react';
import { forwardRef, myra } from '@myraui/system';
import { useButton, UseButtonProps } from './use-button';

/**
 * Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
 */
const Button: React.FC<ButtonProps> = forwardRef<'button', ButtonProps>((props, ref) => {
  const { styles, Component, domRef, buttonProps } = useButton({ ...props, ref });

  return (
    <myra.button className={styles} colorScheme={props.colorScheme} ref={domRef} as={Component} {...buttonProps}>
      {props.children}
    </myra.button>
  );
});

export interface ButtonProps extends UseButtonProps {}

Button.displayName = 'MyraUI.Button';

export default Button;
