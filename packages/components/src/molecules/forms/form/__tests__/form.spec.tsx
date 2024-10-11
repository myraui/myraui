import * as React from 'react';
import { render } from '@testing-library/react';
import Form from '../form';
import { useForm } from '../use-form';

const Wrapper = () => {
  const form = useForm();

  return <Form form={form} />;
};

describe('Form', () => {
  it('should render correctly', () => {
    const wrapper = render(<Wrapper />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
