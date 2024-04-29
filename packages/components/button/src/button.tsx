import React from 'react';
import { HTMLMyraProps, myra } from '@myraui/system';
import { ButtonVariantProps } from '@myraui/theme';
import { useButtonStyles } from './use-button-styles';

/**
 * Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
 */
export const Button: React.FC<ButtonProps> = (props) => {
  const styles = useButtonStyles(props);

  return (
    <myra.button className={styles} {...props}>
      {props.children}
    </myra.button>
  );
};

export interface ButtonProps extends HTMLMyraProps<'button', ButtonVariantProps> {}
