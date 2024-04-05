import { createContext } from '@myraui/react-utilities';
import { MyraUIContextValue } from './provider';

export const [Provider, useMyraUIContext] = createContext<MyraUIContextValue>({
  strict: true,
  providerName: 'MyraUIProvider',
  hookName: 'useMyraUIContext',
});
