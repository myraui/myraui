import { Meta, StoryObj } from '@storybook/react';
import { loader, myraColors } from '@myraui/theme';

import { Loader, LoaderProps } from '../src';
import React from 'react';

export default {
  title: 'Components/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: Object.keys(loader.variants.variant),
    },
    size: {
      control: {
        type: 'select',
      },
      options: Object.keys(loader.variants.size),
    },
  },
} as Meta<typeof Loader>;

type Story = StoryObj<typeof Loader>;

const defaultProps = {
  ...loader.defaultVariants,
  label: 'Loading...',
};

export const Default = {
  args: {
    ...defaultProps,
  },
};

export const Variants: Story = {
  args: {
    ...defaultProps,
  },
  render: (props) => {
    return (
      <div className="flex gap-4 items-end">
        <Loader {...props} label="Oval Loader" />
        <Loader {...props} variant="dots" label="Dots Loader" />
        <Loader {...props} variant="bars" label="Bars Loader" />
      </div>
    );
  },
};

export const Sizes = {
  render: (props: LoaderProps) => (
    <div className="flex gap-12 items-start">
      <Loader {...props} size="tiny" label="Tiny" />
      <Loader {...props} size="small" label="Small" />
      <Loader {...props} size="medium" label="Medium" />
      <Loader {...props} size="large" label="Large" />
      <Loader {...props} size="huge" label="Huge" />
    </div>
  ),
  args: {
    ...defaultProps,
  },
};

export const Colors: Story = {
  args: {
    ...defaultProps,
  },
  render: (args) => {
    const semantic = ['primary', 'secondary', 'success', 'danger', 'warning'];
    return (
      <div className="flex flex-col gap-2">
        <h2>Base Colors</h2>
        <div className="flex flex-wrap gap-4 items-center max-w-6xl">
          {Object.keys(myraColors).map((color) => (
            <Loader key={color} {...args} colorScheme={color} label={color} />
          ))}
        </div>
        <h2>Semantic Colors</h2>
        <div className="flex flex-wrap gap-4 items-center max-w-2xl">
          {semantic.map((color) => (
            <Loader key={color} {...args} colorScheme={color} label={color} />
          ))}
        </div>
      </div>
    );
  },
};
