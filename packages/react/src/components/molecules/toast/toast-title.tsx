import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';

const ToastTitle = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Title>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>>(
  ({ ...props }, ref) => {
    return <ToastPrimitives.Title ref={ref} {...props} />;
  }
);

ToastTitle.displayName = 'MyraUI.' + ToastPrimitives.Title.displayName;

export default ToastTitle;
