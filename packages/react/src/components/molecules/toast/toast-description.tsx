import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ ...props }, ref) => {
  return <ToastPrimitives.Description ref={ref} {...props} />;
});

ToastDescription.displayName = 'MyraUI.' + ToastPrimitives.Description.displayName;

export default ToastDescription;
