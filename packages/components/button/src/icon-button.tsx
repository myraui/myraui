import React from 'react';
import { IconProps } from '@myraui/icon';
import Button, { ButtonProps } from './button';

type NonIconButtonProps = 'isIconOnly' | 'compact';

export interface IconButtonProps extends Omit<ButtonProps, NonIconButtonProps> {
  icon: React.ComponentType<IconProps>;
  iconProps?: IconProps;
}

const iconSizeMapping = {
  tiny: 'small',
  small: 'medium',
  medium: 'large',
  large: 'huge',
  huge: 'huge',
} as const;

export const IconButton: React.FC<IconButtonProps> = (props) => {
  return (
    <Button {...props} isIconOnly compact={false}>
      <props.icon size={iconSizeMapping[props.size || 'medium']} {...props.iconProps} />
    </Button>
  );
};
