import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { IconX } from '@tabler/icons-react';
import { useToastContext } from './context';

const ToastClose = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Close>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>>(
  ({ className, ...props }, ref) => {
    const { slots } = useToastContext();

    return (
      <ToastPrimitives.Close ref={ref} toast-close="" {...props} className={slots.close({ className })}>
        <IconX className={slots.closeIcon()} />
      </ToastPrimitives.Close>
    );
  }
);
ToastClose.displayName = 'MyraUI.' + ToastPrimitives.Close.displayName;

export default ToastClose;
