import React from "react";
import { Meta } from "@storybook/react";
import { icons } from "@myraui/theme";

import { Icons, IconsProps } from "../src";

export default {
  title: "Components/Icons",
  component: Icons,
  argTypes: {
  },
} as Meta<typeof Icons>;

const defaultProps = {
  ...icons.defaultVariants,
}

const Template = (args: IconsProps) => <Icons {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
