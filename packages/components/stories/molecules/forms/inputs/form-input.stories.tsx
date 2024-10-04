import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Form, FormInput, FormInputProps, useForm } from '../../../../src';
import { Button } from '@nextui-org/react';

export default {
  title: 'Components/Molecules/Forms/Inputs/FormInput',
  component: FormInput,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof FormInput>;
type Story = StoryObj<typeof FormInput>;

const defaultProps = {};

const Template = (args: FormInputProps) => {
  const form = useForm({ values: { firstName: 'John' } });

  return (
    <Form
      form={form}
      onSubmit={(values: { firstName: string }) => {
        console.log(values);
      }}
    >
      <FormInput name="firstName" label="First name: " {...args} />
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
