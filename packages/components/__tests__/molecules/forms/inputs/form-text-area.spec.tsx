import * as React from 'react';
import { render } from '@testing-library/react';
import { Form, FormTextArea, useForm } from '../../../../src';

const Wrapper = () => {
  const form = useForm();

  return (
    <Form form={form}>
      <FormTextArea name="name" />
    </Form>
  );
};

describe('FormTextArea', () => {
  it('should render correctly', () => {
    const wrapper = render(<Wrapper />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
