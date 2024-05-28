import { IconButton } from '../icon-button';
import { render } from '@testing-library/react';
import React from 'react';

const Icon = () => <div>Icon</div>;

describe('IconButton', () => {
  it('should render correctly', () => {
    const wrapper = render(<IconButton icon={Icon} />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLButtonElement>();

    render(<IconButton ref={ref} icon={Icon} />);
    expect(ref.current).not.toBeNull();
  });
});
