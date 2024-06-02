import * as React from 'react';
import { render } from '@testing-library/react';
import { Icon } from '../';

describe('Icon', () => {
  it('should render correctly', () => {
    const wrapper = render(<Icon />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<SVGElement>();

    render(<Icon ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it('should use the children prop', () => {
    const result = render(
      <Icon>
        <path d="M0 0h24v24H0z" role="path" />
      </Icon>
    );

    expect(result.getByRole('path')).toBeInTheDocument();
  });

  it('should use the fallback icon', () => {
    const result = render(<Icon />);

    expect(result.getByRole('fallback-icon')).toBeInTheDocument();
  });
});
