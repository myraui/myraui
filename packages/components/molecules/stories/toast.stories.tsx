import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Toast, ToastProps } from '../src';

export default {
  title: 'Components/Molecules/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof Toast>;
type Story = StoryObj<typeof Toast>;

const defaultProps = {};

const Template = (args: ToastProps) => <Toast {...args} />;

export const Default: Story = {
  render: Template,
  args: {
    ...defaultProps,
  },
};
