import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ThemeSelector, { ThemeSelectorProps } from '../theme-selector';

export default {
  title: 'Components/Molecules/ThemeSelector',
  component: ThemeSelector,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof ThemeSelector>;
type Story = StoryObj<typeof ThemeSelector>;

const defaultProps = {};

const Template = (args: ThemeSelectorProps) => (
  <div className="min-w-[350px]">
    <ThemeSelector {...args} />
  </div>
);

export const Default: Story = {
  render: Template,
  args: {
    ...defaultProps,
  },
};
