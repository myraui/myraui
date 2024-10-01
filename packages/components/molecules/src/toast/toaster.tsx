import { useToast } from './use-toast';
import { ToastProvider } from './toast-provider';
import ToastTitle from './toast-title';
import ToastDescription from './toast-description';
import ToastClose from './toast-close';
import ToastViewport from './toast-viewport';
import React from 'react';
import Toast from './toast';

function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}

export default Toaster;
