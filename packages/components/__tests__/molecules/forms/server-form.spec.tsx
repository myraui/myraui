import * as React from 'react';
import { render } from '@testing-library/react';
import { ServerForm, useForm } from '../../../src';
import { createServerAction } from 'zsa';

const action = createServerAction().handler(() => Promise.resolve());

const Wrapper = () => {
  const form = useForm();

  return <ServerForm form={form} action={action} />;
};

describe('ServerForm', () => {
  it('should render correctly', () => {
    const wrapper = render(<Wrapper />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
