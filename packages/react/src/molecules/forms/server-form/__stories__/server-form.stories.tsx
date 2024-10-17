import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import zod from 'zod';

import { createServerAction } from 'zsa';
import ServerForm, { ServerFormProps } from '../server-form';
import { useForm } from '../../form';
import { FormInput, SubmitButton } from '../../inputs';

export default {
  title: 'Components/Molecules/Forms/ServerForm',
  component: ServerForm,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof ServerForm>;
type Story = StoryObj<typeof ServerForm>;

const defaultProps = {};

const action = createServerAction()
  .input(
    zod.object({
      firstName: zod.string().min(1),
      lastName: zod.string().min(1),
    }),
    { type: 'formData' }
  )
  .handler(async ({ input }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: 'Submitted values: ' + JSON.stringify(input) });
      }, 1000);
    });
  });

const Template = (args: Omit<ServerFormProps, 'form'>) => {
  const form = useForm();

  return (
    <ServerForm {...args} form={form} action={action} className="flex flex-col gap-2">
      <FormInput name="firstName" label="First name: " />
      <FormInput name="lastName" label="Last name: " />

      <SubmitButton type="submit">Submit</SubmitButton>
    </ServerForm>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    ...defaultProps,
  },
};
