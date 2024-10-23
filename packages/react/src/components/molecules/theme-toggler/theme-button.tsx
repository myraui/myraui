import React from 'react';
import { Theme } from '@myraui/react-utils';
import { RadioProps, useRadio, VisuallyHidden } from '@nextui-org/react';

export const ThemeButton: React.FC<ThemeButtonProps> = ({ theme, ...props }) => {
  const { Component, getBaseProps, getInputProps, getLabelProps, getLabelWrapperProps } = useRadio({
    ...props,
    value: theme.value,
  });

  return (
    <Component {...getBaseProps()}>
      <VisuallyHidden elementType="span">
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div {...getLabelWrapperProps()} className="m-0">
        <theme.icon {...getLabelProps()} />
      </div>
    </Component>
  );
};

interface ThemeButtonProps extends Omit<RadioProps, 'children' | 'value'> {
  theme: Theme;
}
