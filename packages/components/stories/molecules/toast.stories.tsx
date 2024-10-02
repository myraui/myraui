import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Toast, Toaster, useToast } from '../../src';
import { Button } from '@nextui-org/react';

export default {
  title: 'Components/Molecules/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof Toast>;
type Story = StoryObj<typeof Toast>;

const defaultProps = {};

const Template = () => {
  const { toast } = useToast();
  return (
    <div>
      <Toaster />
      <Button
        onClick={() => {
          toast({
            title: 'Scheduled: Catch up',
            description: 'Friday, February 10, 2024 at 5:57 PM',
          });
        }}
      ></Button>
    </div>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    ...defaultProps,
  },
};
