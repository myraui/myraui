import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { cn } from '@nextui-org/react';

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => <ToastPrimitives.Description ref={ref} className={cn('text-sm opacity-90', className)} {...props} />);

ToastDescription.displayName = 'MyraUI.' + ToastPrimitives.Description.displayName;

export default ToastDescription;
