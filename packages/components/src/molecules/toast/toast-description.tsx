import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { useToastContext } from './context';

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => {
  const { slots } = useToastContext();
  return <ToastPrimitives.Description ref={ref} className={slots.description({ className })} {...props} />;
});

ToastDescription.displayName = 'MyraUI.' + ToastPrimitives.Description.displayName;

export default ToastDescription;
