import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Form, FormProps } from '../../src';

export default {
  title: 'Components/Molecules/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof Form>;
type Story = StoryObj<typeof Form>;

const defaultProps = {};

const Template = (args: FormProps) => <Form {...args} />;

export const Default: Story = {
  render: Template,
  args: {
    ...defaultProps,
  },
};
