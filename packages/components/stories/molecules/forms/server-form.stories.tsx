import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { ServerForm, ServerFormProps } from "../../../src";

export default {
  title: "Components/Molecules/Forms/ServerForm",
  component: ServerForm,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof ServerForm>;
type Story = StoryObj<typeof ServerForm>;

const defaultProps = {
}

const Template = (args: ServerFormProps) => <ServerForm {...args} />;

export const Default: Story = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
