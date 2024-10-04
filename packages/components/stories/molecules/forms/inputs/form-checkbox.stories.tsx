import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Form, FormCheckbox, FormCheckboxProps, useForm } from '../../../../src';

export default {
  title: 'Components/Molecules/Forms/Inputs/FormCheckbox',
  component: FormCheckbox,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof FormCheckbox>;
type Story = StoryObj<typeof FormCheckbox>;

const defaultProps = {};

const Template = (args: FormCheckboxProps) => {
  const form = useForm();

  return (
    <Form form={form}>
      <FormCheckbox name="subscribe" {...args}>
        Subscribe to our newsletter
      </FormCheckbox>
    </Form>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    ...defaultProps,
  },
};
