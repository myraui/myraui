import { ToasterToast, updateToastLimit, useToaster } from './use-toaster';
import { ToastProvider } from './toast-provider';
import ToastTitle from './toast-title';
import ToastDescription from './toast-description';
import ToastClose from './toast-close';
import ToastViewport from './toast-viewport';
import React, { useEffect, useMemo } from 'react';
import { toastViewportTheme } from './toast.theme';
import { useToast } from './use-toast';
import Toast from './toast';
import ToastAction from './toast-action';

function ToastRender({ title, description, action, onActionClick, ...props }: Omit<ToasterToast, 'id'>) {
  const { slots, classNames, getToastProps } = useToast(props);

  return (
    <Toast {...getToastProps()}>
      <div className={slots.body()}>
        {title && <ToastTitle className={slots.title({ class: classNames?.title })}>{title}</ToastTitle>}
        {description && <ToastDescription className={slots.description({ class: classNames?.description })}>{description}</ToastDescription>}
      </div>
      {action && (
        <ToastAction
          altText={typeof action === 'string' ? action : action?.altText}
          onClick={onActionClick}
          className={slots.action({ class: classNames?.action })}
        >
          {typeof action === 'string' ? action : action.label}
        </ToastAction>
      )}
      <ToastClose className={slots.close({ class: classNames?.close })} />
    </Toast>
  );
}

function Toaster({ className, toastLimit, duration, label, swipeDirection, swipeThreshold, ...props }: ToasterProps) {
  const { toasts } = useToaster();

  const baseClass = useMemo(() => {
    return toastViewportTheme({ class: className });
  }, [className]);

  useEffect(() => {
    if (toastLimit) {
      updateToastLimit(toastLimit);
    }
  }, [toastLimit]);

  return (
    <ToastProvider duration={duration} swipeDirection={swipeDirection} label={label} swipeThreshold={swipeThreshold}>
      {toasts.map(({ id, ...props }) => (
        <ToastRender key={id} {...props} />
      ))}
      <ToastViewport {...props} className={baseClass} />
    </ToastProvider>
  );
}

interface ToasterProps extends React.ComponentPropsWithoutRef<typeof ToastViewport>, React.ComponentPropsWithoutRef<typeof ToastProvider> {
  /**
   * The maximum number of toasts that can be displayed at once.
   * @default 2
   */
  toastLimit?: number;
}

export default Toaster;
