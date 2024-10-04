import * as React from 'react';
import { render } from '@testing-library/react';
import { toast, Toaster } from '../../src';

describe('Toast', () => {
  it('should render correctly', () => {
    toast({ title: 'Something went wrong' });

    const wrapper = render(<Toaster />);
    expect(wrapper.container).toMatchSnapshot();

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
