import * as React from 'react';
import { useMemo } from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { toastTheme, ToastVariantProps } from '@myraui/theme';

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & ToastVariantProps
>(({ className, variant, ...props }, ref) => {
  const styles = useMemo(() => toastTheme({ variant }), [variant]);

  return <ToastPrimitives.Root ref={ref} className={styles.base({ className })} {...props} />;
});

Toast.displayName = 'MyraUI.' + ToastPrimitives.Root.displayName;

export type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

export default Toast;
