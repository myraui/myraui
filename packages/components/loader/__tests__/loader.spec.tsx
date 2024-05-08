import * as React from 'react';
import { Loader } from '../src';
import { render } from '@testing-library/react';

describe('Loader', () => {
  it('should render correctly', () => {
    const wrapper = render(<Loader />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Loader ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it('should render with the default aria-label', () => {
    const { getByLabelText } = render(<Loader />);

    expect(getByLabelText('Loading')).toBeInTheDocument();
  });

  it('should replace the default aria-label when a label is passed', () => {
    const { getByLabelText } = render(<Loader label="Custom label" />);

    expect(getByLabelText('Custom label')).toBeInTheDocument();
  });

  it('should replace the default aria-label when a child is passed', () => {
    const { getByLabelText } = render(<Loader>Custom label</Loader>);

    expect(getByLabelText('Custom label')).toBeInTheDocument();
  });

  it('should replace the default aria-label if aria-label is passed', () => {
    const { getByLabelText } = render(<Loader aria-label="Custom label" />);

    expect(getByLabelText('Custom label')).toBeInTheDocument();
  });
});
