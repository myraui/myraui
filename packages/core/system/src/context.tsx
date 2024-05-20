import { createContext } from '@myraui/react-utils';
import { MyraUIContextValue } from './provider';
import { MYRA_UI_PREFIX } from '@myraui/theme';

export const [Provider, useMyraUIContext] = createContext<MyraUIContextValue>({
  strict: false,
  providerName: 'MyraUIProvider',
  hookName: 'useMyraUIContext',
  defaultValue: {
    prefix: MYRA_UI_PREFIX,
  },
});
