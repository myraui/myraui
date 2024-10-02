import React, { useEffect } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Toast, useToast } from '../../src';
import { Button } from '@nextui-org/react';
import { ToastAction } from '@radix-ui/react-toast';

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

  useEffect(() => {
    toast({
      title: 'Scheduled: Catch up',
      description: 'Friday, February 10, 2024 at 5:57 PM',
      action: <ToastAction altText="Cancel">Cancel</ToastAction>,
      duration: 10000000,
    });
  }, []);

  return (
    <div className="bg-crimson">
      <Button
        onClick={() => {
          toast({
            title: 'Scheduled: Catch up',
            description: 'Friday, February 10, 2024 at 5:57 PM',
            action: <ToastAction altText="Cancel">Cancel</ToastAction>,
            duration: 10000000,
          });
        }}
      >
        Add to calendar
      </Button>
    </div>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    ...defaultProps,
  },
};
