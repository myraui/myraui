import React from 'react';
import { IconProps } from '@myraui/icon';
import Button, { ButtonProps } from './button';
import { useButtonGroupContext } from './button-group-context';
import { forwardRef } from '@myraui/system';

type NonIconButtonProps = 'isIconOnly' | 'compact';

export interface IconButtonProps extends Omit<ButtonProps, NonIconButtonProps> {
  icon: React.ComponentType<IconProps>;
  iconProps?: IconProps;
}

const iconSizeMapping = {
  tiny: 'small',
  small: 'medium',
  medium: 'medium',
  large: 'large',
  huge: 'huge',
} as const;

export const IconButton: React.FC<IconButtonProps> = forwardRef<'button', IconButtonProps>((props, ref) => {
  const context = useButtonGroupContext();
  return (
    <Button {...props} isIconOnly compact={false} ref={ref}>
      <props.icon size={iconSizeMapping[props.size || context?.size || 'medium']} {...props.iconProps} />
    </Button>
  );
});
