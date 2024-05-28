import Button from '../button';
import { render } from '@testing-library/react';
import React from 'react';

describe('Button', () => {
  it('should render correctly', () => {
    const wrapper = render(<Button />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLButtonElement>();

    render(<Button ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it('should render start section', () => {
    const wrapper = render(<Button startSection={<span data-testid="start-icon">Icon</span>}>Button</Button>);

    expect(wrapper.getByTestId('start-icon')).toBeInTheDocument();
  });

  it('should render end section', () => {
    const wrapper = render(<Button endSection={<span data-testid="end-icon">Icon</span>}>Button</Button>);

    expect(wrapper.getByTestId('end-icon')).toBeInTheDocument();
  });

  it('should be disabled when loading', () => {
    const wrapper = render(<Button isLoading>Button</Button>);
    expect(wrapper.getByRole('button')).toBeDisabled();
  });

  it('should not be disabled when not loading', () => {
    const wrapper = render(<Button>Button</Button>);
    expect(wrapper.getByRole('button')).not.toBeDisabled();
  });
});
