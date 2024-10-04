import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ThemeSwitcher, ThemeSwitcherProps } from '../../src';

export default {
  title: 'Components/Molecules/ThemeSwitcher',
  component: ThemeSwitcher,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof ThemeSwitcher>;
type Story = StoryObj<typeof ThemeSwitcher>;

const defaultProps = {};

const Template = (args: ThemeSwitcherProps) => <ThemeSwitcher {...args} />;

export const Default: Story = {
  render: Template,
  args: {
    ...defaultProps,
  },
};
