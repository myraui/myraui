import * as React from 'react';
import { useMemo } from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { toastViewportTheme } from './toast.theme';

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => {
  const styles = useMemo(() => toastViewportTheme({ className }), [className]);

  return <ToastPrimitives.Viewport ref={ref} className={styles} {...props} />;
});
ToastViewport.displayName = 'MyraUI.' + ToastPrimitives.Viewport.displayName;

export default ToastViewport;
