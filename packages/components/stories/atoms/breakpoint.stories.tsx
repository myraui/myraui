import { Meta, StoryObj } from '@storybook/react';
import { Breakpoint, BreakpointProps } from '../../src/atoms';
import React from 'react';

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
