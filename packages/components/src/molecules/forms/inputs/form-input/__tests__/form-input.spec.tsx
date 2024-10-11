import * as React from 'react';
import { render } from '@testing-library/react';
import { FormInput } from '../index';
import { Form, useForm } from '../../../form';

const Wrapper = () => {
  const form = useForm();

  return (
    <Form form={form}>
      <FormInput name="name" />
    </Form>
  );
};

describe('FormInput', () => {
  it('should render correctly', () => {
    const wrapper = render(<Wrapper />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
