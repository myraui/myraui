import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { IconX } from '@tabler/icons-react';

const ToastClose = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Close>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>>(
  (props, ref) => {
    return (
      <ToastPrimitives.Close ref={ref} toast-close="" {...props}>
        <IconX className="h-4 w-4" />
      </ToastPrimitives.Close>
    );
  }
);
ToastClose.displayName = 'MyraUI.' + ToastPrimitives.Close.displayName;

export default ToastClose;
