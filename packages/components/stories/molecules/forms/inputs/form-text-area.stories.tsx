import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { FormTextArea, FormTextAreaProps } from "../../../../src";

export default {
  title: "Components/Molecules/Forms/Inputs/FormTextArea",
  component: FormTextArea,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof FormTextArea>;
type Story = StoryObj<typeof FormTextArea>;

const defaultProps = {
}

const Template = (args: FormTextAreaProps) => <FormTextArea {...args} />;

export const Default: Story = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
