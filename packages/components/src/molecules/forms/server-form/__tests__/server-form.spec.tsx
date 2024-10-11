import * as React from 'react';
import { render } from '@testing-library/react';
import { createServerAction } from 'zsa';
import ServerForm from '../server-form';
import { useForm } from '../../form';

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
