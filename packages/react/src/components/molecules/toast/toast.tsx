import * as React from 'react';
import { useMemo } from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { toastTheme, ToastVariantProps } from './toast.theme';
import { ToastContextProvider } from './context';

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & ToastVariantProps
>(({ className, color, disableAnimation, ...props }, ref) => {
  const slots = useMemo(() => toastTheme({ color, disableAnimation }), [color, disableAnimation]);

  return (
    <ToastContextProvider value={{ slots }}>
      <ToastPrimitives.Root ref={ref} className={slots.base({ className })} {...props} />
    </ToastContextProvider>
  );
});

Toast.displayName = 'MyraUI.' + ToastPrimitives.Root.displayName;

export type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

export default Toast;
