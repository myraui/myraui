import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Breakpoint, { BreakpointProps } from '../breakpoint';

const meta: Meta<typeof Breakpoint> = {
  title: 'Components/Atoms/Breakpoint',
  component: Breakpoint,
  tags: ['autodocs'],
  argTypes: {
    above: {
      table: {
        disable: true,
      },
    },
    below: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breakpoint>;

const defaultProps = {};

const Template = (args: BreakpointProps) => <Breakpoint {...args} below={<span>Below</span>} above={<span>Above</span>} />;

export const Default: Story = {
  render: Template,
  args: {
    ...defaultProps,
  },
};
