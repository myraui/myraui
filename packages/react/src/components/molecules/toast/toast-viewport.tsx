import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ ...props }, ref) => {
  return <ToastPrimitives.Viewport ref={ref} {...props} />;
});
ToastViewport.displayName = 'MyraUI.' + ToastPrimitives.Viewport.displayName;

export default ToastViewport;
