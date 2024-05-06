import React from 'react';
import { Meta } from '@storybook/react';
import { loader } from '@myraui/theme';

import { Loader, LoaderProps } from '../src';

export default {
  title: 'Components/Loader',
  component: Loader,
  argTypes: {},
} as Meta<typeof Loader>;

const defaultProps = {
  ...loader.defaultVariants,
};

const Template = (args: LoaderProps) => <Loader {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};
