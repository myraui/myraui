import { MyraComponentProps, useMyraComponent } from '@myraui/system';
import { ButtonProps } from './button';
import { buttonGroup } from '@myraui/theme';
import { useMemo } from 'react';
import { ButtonGroupContextType } from './button-group-context';

interface Props {
  /**
   * Whether the buttons are disabled.
   * @default false
   */
  isDisabled?: ButtonProps['isDisabled'];
}

export type UseButtonGroupProps = Props &
  Partial<Pick<ButtonProps, 'size' | 'color' | 'radius' | 'variant' | 'disableTransition' | 'isIconOnly' | 'colorScheme'>> &
  MyraComponentProps<typeof buttonGroup, 'div'>;

export function useButtonGroup(originalProps: UseButtonGroupProps) {
  const {
    componentProps: {
      size = 'medium',
      variant = 'filled',
      colorScheme = 'default.5/default.12',
      radius,
      isDisabled = false,
      disableTransition = false,
      isIconOnly = false,
      ...otherProps
    },
    classNames,
    variantProps,
    Component,
    slots,
  } = useMyraComponent(originalProps, buttonGroup);

  const context = useMemo<ButtonGroupContextType>(
    () => ({
      size,
      variant,
      radius,
      colorScheme,
      isDisabled,
      disableTransition,
      isIconOnly,
      fullWidth: variantProps.fullWidth,
    }),
    [size, variant, radius, isDisabled, disableTransition, isIconOnly, variantProps.fullWidth, colorScheme]
  );

  return {
    Component,
    buttonGroupProps: {
      role: 'group',
      ...otherProps,
    },
    context,
    classNames,
    slots,
  };
}
