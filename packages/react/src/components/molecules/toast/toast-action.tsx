import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';

const ToastAction = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Action>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>>(
  ({ ...props }, ref) => {
    return <ToastPrimitives.Action ref={ref} {...props}></ToastPrimitives.Action>;
  }
);
ToastAction.displayName = 'MyraUI.' + ToastPrimitives.Action.displayName;

export type ToastActionElement = React.ReactElement<typeof ToastAction>;

export default ToastAction;
