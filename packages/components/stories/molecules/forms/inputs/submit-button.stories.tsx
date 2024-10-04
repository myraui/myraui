import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { SubmitButton, SubmitButtonProps } from "../../../../src";

export default {
  title: "Components/Molecules/Forms/Inputs/SubmitButton",
  component: SubmitButton,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof SubmitButton>;
type Story = StoryObj<typeof SubmitButton>;

const defaultProps = {
}

const Template = (args: SubmitButtonProps) => <SubmitButton {...args} />;

export const Default: Story = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
