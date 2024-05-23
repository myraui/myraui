import { forwardRef } from '../';
import React from 'react';
import { render } from '@testing-library/react';

describe('forwardRef', () => {
  it('should call the base forwardRef function', () => {
    const Component = forwardRef((props, ref) => <div ref={ref}></div>);

    const ref = React.createRef<HTMLDivElement>();

    render(<Component ref={ref} />);

    expect(ref.current).not.toBeNull();
  });
});
