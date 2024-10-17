import * as React from 'react';
import { useMemo } from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { toastActionTheme } from '@myraui/theme';
import clsx from 'clsx';

const ToastAction = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Action>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>>(
  ({ className, ...props }, ref) => {
    const styles = useMemo(() => toastActionTheme(), []);

    return <ToastPrimitives.Action ref={ref} className={clsx(styles, className)} {...props}></ToastPrimitives.Action>;
  }
);
ToastAction.displayName = 'MyraUI.' + ToastPrimitives.Action.displayName;

export type ToastActionElement = React.ReactElement<typeof ToastAction>;

export default ToastAction;
