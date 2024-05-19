import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { colorSchemeOptions, icon } from '@myraui/theme';
import { MdSettings } from 'react-icons/md';

import { Icon, IconProps } from '../src';

export default {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: Object.keys(icon.variants.size),
    },
    colorScheme: {
      control: {
        type: 'select',
      },
      options: colorSchemeOptions,
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['outline', 'solid'],
    },
  },
} as Meta<typeof Icon>;
type Story = StoryObj<typeof Icon>;

const defaultProps = {
  ...icon.defaultVariants,
};

const iconPath =
  'M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z';

const Template = (args: IconProps) => (
  <Icon {...args}>
    <path d={iconPath} fill="currentColor" />
  </Icon>
);

export const Default: Story = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

export const IconColor: Story = {
  render: Template,
  args: {
    ...defaultProps,
    colorScheme: 'primary',
  },
};

export const IconSizes: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Template {...args} size="tiny" />
      <Template {...args} size="small" />
      <Template {...args} size="medium" />
      <Template {...args} size="large" />
      <Template {...args} size="huge" />
    </div>
  ),
  args: {
    ...defaultProps,
  },
};

export const ExternalLibraryIcon: Story = {
  render: (args) => <Icon {...args} as={MdSettings} size="huge" />,
  args: {
    ...defaultProps,
  },
};

export const FallbackIcon: Story = {
  render: (args) => <Icon {...args} />,
  args: {
    ...defaultProps,
  },
};
