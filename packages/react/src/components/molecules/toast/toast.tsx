import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { UseToastProps } from './use-toast';

const Toast = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Root>, UseToastProps>((props, ref) => {
  return <ToastPrimitives.Root ref={ref} {...props} />;
});

Toast.displayName = 'MyraUI.' + ToastPrimitives.Root.displayName;

export type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

export default Toast;
