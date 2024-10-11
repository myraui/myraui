import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Form, useForm } from '../../form';
import FormCheckbox, { FormCheckboxProps } from './form-checkbox';
import { SubmitButton } from '../submit-button';

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
    <Form
      form={form}
      className="flex items-center gap-2"
      onSubmit={(values) => {
        alert('Submitted: ' + JSON.stringify(values));
      }}
    >
      <FormCheckbox {...args} name="subscribe">
        Subscribe to our newsletter
      </FormCheckbox>
      <SubmitButton>Submit</SubmitButton>
    </Form>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    ...defaultProps,
  },
};
