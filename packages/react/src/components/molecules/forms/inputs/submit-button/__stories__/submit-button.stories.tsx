import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SubmitButton, { SubmitButtonProps } from '../submit-button';
import { Form, useForm } from '../../../form';

export default {
  title: 'Components/Molecules/Forms/Inputs/SubmitButton',
  component: SubmitButton,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof SubmitButton>;
type Story = StoryObj<typeof SubmitButton>;

const defaultProps = {};

const Template = (args: SubmitButtonProps) => {
  const form = useForm();

  return (
    <Form
      form={form}
      onSubmit={(values) => {
        alert('Submitted: ' + JSON.stringify(values));
      }}
      className="flex items-center gap-2"
    >
      <SubmitButton {...args} type="submit">
        Submit
      </SubmitButton>
    </Form>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    ...defaultProps,
  },
};
