import { forwardRef, myra } from '@myraui/system';
import { useIcon, UseIconProps } from './use-icon';
import React from 'react';

export interface IconProps extends UseIconProps {}

const Icon = forwardRef<'svg', IconProps>(({ ...props }, ref) => {
  const { Component, componentProps } = useIcon({ ...props, ref });

  return <myra.svg as={Component} {...componentProps} />;
});

Icon.displayName = 'MyraUI.Icon';

export default Icon;
