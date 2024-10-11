import * as React from 'react';
import { render } from '@testing-library/react';
import { Form, useForm } from '../../../form';
import SubmitButton from '../submit-button';

const Wrapper = () => {
  const form = useForm();
  return (
    <Form form={form}>
      <SubmitButton />
    </Form>
  );
};

describe('SubmitButton', () => {
  it('should render correctly', () => {
    const wrapper = render(<Wrapper />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
