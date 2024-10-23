import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import ThemeToggler, { ThemeTogglerProps } from "../theme-toggler";

export default {
  title: "Components/Molecules/ThemeToggler",
  component: ThemeToggler,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof ThemeToggler>;
type Story = StoryObj<typeof ThemeToggler>;

const defaultProps = {
}

const Template = (args: ThemeTogglerProps) => <ThemeToggler {...args} />;

export const Default: Story = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
