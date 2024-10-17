import { render } from '@testing-library/react';
import * as React from 'react';
import Breakpoint from '../breakpoint';

describe('Breakpoint', () => {
  it('should render correctly', () => {
    const wrapper = render(<Breakpoint on="sm" below={<div>Below</div>} above={<div>Above</div>} />);

    expect(wrapper).toMatchSnapshot();

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
