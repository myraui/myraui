import * as React from 'react';
import { render } from '@testing-library/react';
import { Form, useForm } from '../../../form';
import FormCheckbox from '../form-checkbox';

const Wrapper = () => {
  const form = useForm();
  return (
    <Form form={form}>
      <FormCheckbox name="suscribe" />
    </Form>
  );
};

describe('FormCheckbox', () => {
  it('should render correctly', () => {
    const wrapper = render(<Wrapper />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
