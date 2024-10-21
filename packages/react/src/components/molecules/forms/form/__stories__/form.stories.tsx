import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import zod from 'zod';
import { useForm } from '../use-form';
import Form, { FormProps } from '../form';
import { FormInput, SubmitButton } from '../../inputs';

export default {
  title: 'Components/Molecules/Forms/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof Form>;
type Story = StoryObj<typeof Form>;

const defaultProps = {};

const Template = (args: FormProps<never, never, never>) => {
  const form = useForm({
    schema: zod.object({
      firstName: zod.string().min(1),
      lastName: zod.string().min(1),
    }),
  });

  return (
    <Form
      {...args}
      form={form}
      className="flex flex-col gap-2"
      onSubmit={(values) => {
        alert('Submitted values: ' + JSON.stringify(values));
      }}
    >
      <FormInput name="firstName" placeholder="First name" />
      <FormInput name="lastName" placeholder="Last name" />
      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  );
};

export const Default: Story = {
  // @ts-expect-error
  render: Template,
  args: {
    ...defaultProps,
  },
};
