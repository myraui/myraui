import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button } from '@nextui-org/react';
import { Form, useForm } from '../../../form';
import FormInput, { FormInputProps } from '../form-input';

export default {
  title: 'Components/Molecules/Forms/Inputs/FormInput',
  component: FormInput,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof FormInput>;
type Story = StoryObj<typeof FormInput>;

const defaultProps = {};

const Template = (args: FormInputProps) => {
  const form = useForm();

  return (
    <Form
      form={form}
      onSubmit={(values) => {
        alert('Submitted: ' + JSON.stringify(values));
      }}
      className="flex items-center gap-2"
    >
      <FormInput {...args} name="firstName" label="First name: " />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    ...defaultProps,
  },
};
