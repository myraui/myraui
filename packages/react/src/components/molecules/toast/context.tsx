import { createContext } from 'packages/utilities/react-utils';
import { ToastReturnType } from 'packages/theme';

interface ToastContextValue {
  slots: ToastReturnType;
}

export const [ToastContextProvider, useToastContext] = createContext<ToastContextValue>({
  name: 'ToastContext',
  strict: true,
});
