import React from 'react';
import { useButtonGroup, UseButtonGroupProps } from './use-button-group';
import { forwardRef, myra } from '@myraui/system';
import { ButtonGroupProvider } from './button-group-context';

export interface ButtonGroupProps extends UseButtonGroupProps {}

const ButtonGroup: React.FC<ButtonGroupProps> = forwardRef<'div', ButtonGroupProps>((props, ref) => {
  const { Component, context, buttonGroupProps } = useButtonGroup({ ...props, ref });

  return (
    <ButtonGroupProvider value={context}>
      <myra.div Component={Component} {...buttonGroupProps} />
    </ButtonGroupProvider>
  );
});

ButtonGroup.displayName = 'MyraUI.ButtonGroup';

export default ButtonGroup;
