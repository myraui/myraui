import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { useToastContext } from './context';

const ToastTitle = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Title>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>>(
  ({ className, ...props }, ref) => {
    const { slots } = useToastContext();
    return <ToastPrimitives.Title ref={ref} className={slots.title({ className })} {...props} />;
  }
);

ToastTitle.displayName = 'MyraUI.' + ToastPrimitives.Title.displayName;

export default ToastTitle;
