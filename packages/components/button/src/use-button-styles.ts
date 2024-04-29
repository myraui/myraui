import { button } from '@myraui/theme';
import { ButtonProps } from './button';
import { useMemo } from 'react';

export function useButtonStyles(props: ButtonProps) {
  const variants = {
    size: props.size,
    variant: props.variant,
    radius: props.radius,
    fullWidth: props.fullWidth,
    compact: props.compact,
    isDisabled: props.isDisabled,
  };
  return useMemo(() => {
    return button(variants);
  }, [variants]);
}
