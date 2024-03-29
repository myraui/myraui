import { createContext } from '@myra-ui/utilities';
import { MyraUIContextValue } from './provider';

export const [Provider, useMyraUIContext] = createContext<MyraUIContextValue>({
  strict: true,
  providerName: 'MyraUIProvider',
  hookName: 'useMyraUIContext',
});
