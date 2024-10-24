import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import ThemeSwitcher, { ThemeSwitcherProps } from '../theme-switcher';

export default {
  title: 'Components/Molecules/ThemeSwitcher',
  component: ThemeSwitcher,
  tags: ['autodocs'],
  argTypes: {
    switcherType: {
      control: {
        type: 'select',
      },
      options: ['default', 'dropdown'],
    },
  },
} as Meta<typeof ThemeSwitcher>;
type Story = StoryObj<typeof ThemeSwitcher>;

const defaultProps = {};

const Template = (args: ThemeSwitcherProps) => (
  <div className="flex min-w-[350px] items-center justify-center">
    <ThemeSwitcher {...args} />
  </div>
);

/**
 * The default theme switcher will look like a button.
 */
export const Default: Story = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

/**
 * This will look like a form select dropdown.
 */
export const ThemeDropdown: Story = {
  render: Template,
  args: {
    ...defaultProps,
    switcherType: 'dropdown',
  },
};
