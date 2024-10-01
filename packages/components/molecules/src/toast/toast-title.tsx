import * as React from 'react';
import { cn } from '@nextui-org/react';
import * as ToastPrimitives from '@radix-ui/react-toast';

const ToastTitle = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Title>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>>(
  ({ className, ...props }, ref) => <ToastPrimitives.Title ref={ref} className={cn('text-sm font-semibold [&+div]:text-xs', className)} {...props} />
);

ToastTitle.displayName = 'MyraUI.' + ToastPrimitives.Title.displayName;

export default ToastTitle;
