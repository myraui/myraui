import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { MyraUIProvider } from '@myraui/system';

interface IExtendedRenderOptions extends RenderOptions {}

export const renderWithTheme = (component: ReactElement, options?: Omit<IExtendedRenderOptions, 'wrapper'>) => {
  const Wrapper = ({ children }: { children?: ReactElement }) => {
    return <MyraUIProvider>{children}</MyraUIProvider>;
  };

  return render(component, { wrapper: Wrapper, ...options });
};
