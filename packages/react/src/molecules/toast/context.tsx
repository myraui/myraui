import { createContext } from '@myraui/react-utils';
import { ToastReturnType } from '@myraui/theme';

interface ToastContextValue {
  slots: ToastReturnType;
}

export const [ToastContextProvider, useToastContext] = createContext<ToastContextValue>({
  name: 'ToastContext',
  strict: true,
});
