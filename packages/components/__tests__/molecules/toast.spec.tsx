import * as React from 'react';
import { render } from '@testing-library/react';
import { Toast } from '../../src/molecules';
import { ToastProvider } from '@radix-ui/react-toast';

describe('Toast', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <ToastProvider>
        <Toast />
      </ToastProvider>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
