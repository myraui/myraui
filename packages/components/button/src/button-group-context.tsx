import { ButtonProps } from './button';
import { createContext } from '@myraui/react-utils';

export type ButtonGroupContextType = {
  size?: ButtonProps['size'];
  variant?: ButtonProps['variant'];
  radius?: ButtonProps['radius'];
  isDisabled?: ButtonProps['isDisabled'];
  disableTransition?: ButtonProps['disableTransition'];
  isIconOnly?: boolean;
  fullWidth?: boolean;
  colorScheme?: ButtonProps['colorScheme'];
};

export const [ButtonGroupProvider, useButtonGroupContext] = createContext<ButtonGroupContextType>({
  name: 'ButtonGroupContext',
  strict: false,
});
