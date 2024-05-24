import React from 'react';
import { forwardRef, myra } from '@myraui/system';
import { useButton, UseButtonProps } from './use-button';
import { Loader } from '@myraui/loader';

export interface ButtonProps extends UseButtonProps {}

const labelColorScheme = {
  default: 'foreground',
  filled: 'foreground.1',
  light: 'primary',
  outline: 'primary',
  subtle: 'primary',
  link: 'primary',
};

/**
 * Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
 */
const Button: React.FC<ButtonProps> = forwardRef<'button', ButtonProps>((props, baseRef) => {
  const {
    Component,
    buttonProps,
    startSection,
    endSection,
    slots,
    loaderSize,
    loaderProps,
    loader = <Loader size={loaderSize} colorScheme={labelColorScheme[props.variant || 'default']} {...loaderProps} />,
  } = useButton({ ...props, ref: baseRef });

  return (
    <myra.button role="button" as={Component} {...buttonProps}>
      <span className={slots?.content()}>
        {startSection}
        {props.children}
        {endSection}
      </span>
      <span data-testid="button-loader" className={slots?.loader()}>
        {loader}
      </span>
    </myra.button>
  );
});

Button.displayName = 'MyraUI.Button';

export default Button;
