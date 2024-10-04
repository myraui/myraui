import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Form, FormProps } from '../../../src';

export default {
  title: 'Components/Molecules/Forms/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof Form>;
type Story = StoryObj<typeof Form>;

const defaultProps = {};

const Template = (args: FormProps<never, never, never>) => <Form {...args} />;

export const Default: Story = {
  // @ts-expect-error
  render: Template,
  args: {
    ...defaultProps,
  },
};
