import * as React from 'react';
import { render } from '@testing-library/react';
import { Toast } from '../../src/molecules';

describe('Toast', () => {
  it('should render correctly', () => {
    const wrapper = render(<Toast />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
