import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import ThemeToggler, { ThemeTogglerProps } from '../theme-toggler';

export default {
  title: 'Components/Molecules/ThemeToggler',
  component: ThemeToggler,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof ThemeToggler>;
type Story = StoryObj<typeof ThemeToggler>;

const defaultProps = {};

const Template = (args: ThemeTogglerProps) => <ThemeToggler {...args} />;

export const Default: Story = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

/**
 * The `ThemeToggler` comes with three different sizes: `sm`, `md`, and `lg`.
 * @default `md`
 */
export const Sizes: Story = {
  render: (props) => {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <ThemeToggler size="sm" {...props} />
        <ThemeToggler size="md" {...props} />
        <ThemeToggler size="lg" {...props} />
      </div>
    );
  },
  args: {
    ...defaultProps,
  },
};
