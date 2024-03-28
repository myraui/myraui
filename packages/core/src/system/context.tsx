import { createContext } from '@myra-ui/react-utils';
import { MyraUIContextValue } from './provider';

export const [Provider, useMyraUIContext] = createContext<MyraUIContextValue>({
  strict: true,
  providerName: 'MyraUIProvider',
  hookName: 'useMyraUIContext',
});
