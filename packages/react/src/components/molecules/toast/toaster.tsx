import { ToasterToast, useToast } from './use-toast';
import { ToastProvider } from './toast-provider';
import ToastTitle from './toast-title';
import ToastDescription from './toast-description';
import ToastClose from './toast-close';
import ToastViewport from './toast-viewport';
import React from 'react';
import Toast from './toast';
import { useToastContext } from './context';

function ToastBody({ title, description, action }: ToasterToast) {
  const { slots } = useToastContext();

  return (
    <>
      <div className={slots.body()}>
        {title && <ToastTitle>{title}</ToastTitle>}
        {description && <ToastDescription>{description}</ToastDescription>}
      </div>
      {action}
      <ToastClose />
    </>
  );
}

function Toaster(props: ToasterProps) {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <ToastBody {...props} title={title} description={description} action={action} id={id} />
          </Toast>
        );
      })}
      <ToastViewport {...(props.viewPortProps || {})} />
    </ToastProvider>
  );
}

interface ToasterProps {
  viewPortProps?: React.ComponentPropsWithoutRef<typeof ToastViewport>;
}

export default Toaster;
