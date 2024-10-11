import * as React from 'react';
import { render } from '@testing-library/react';
import { Form, FormInput, useForm } from '../../../../src';

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
