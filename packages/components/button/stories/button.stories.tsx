import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src';
import React from 'react';
import { button, colorSchemes, myraColors } from '@myraui/theme';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: Object.keys(button.variants.variant),
    },
    colorScheme: {
      control: {
        type: 'select',
      },
      options: colorSchemes,
    },
    size: {
      control: {
        type: 'select',
      },
      options: Object.keys(button.variants.size),
    },
    radius: {
      control: {
        type: 'select',
      },
      options: Object.keys(button.variants.radius),
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
    compact: {
      control: {
        type: 'boolean',
      },
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Variants: Story = {
  args: {
    colorScheme: 'primary',
    variant: 'filled',
    children: 'Button',
  },
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button {...args}>Filled</Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="light">
        Light
      </Button>
      <Button {...args} variant="subtle">
        Subtle
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
  ),
};

export const Sizes: Story = {
  args: {
    colorScheme: 'primary',
    variant: 'filled',
    children: 'Button',
  },
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button {...args} size="tiny">
        Tiny
      </Button>
      <Button {...args} size="small">
        Small
      </Button>
      <Button {...args} size="medium">
        Medium
      </Button>
      <Button {...args} size="large">
        Large
      </Button>
      <Button {...args} size="huge">
        Huge
      </Button>
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    ...Default.args,
    fullWidth: true,
  },
  render: (args) => (
    <div className="w-80 p-2 border-tiny border-divider">
      <Button {...args}>Full Width</Button>
    </div>
  ),
};

export const Radius: Story = {
  args: {
    colorScheme: 'primary',
    variant: 'filled',
    children: 'Button',
  },
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button {...args} radius="tiny">
        Tiny
      </Button>
      <Button {...args} radius="small">
        Small
      </Button>
      <Button {...args} radius="medium">
        Medium
      </Button>
      <Button {...args} radius="large">
        Large
      </Button>
      <Button {...args} radius="huge">
        Huge
      </Button>
    </div>
  ),
};

export const CompactSize: Story = {
  args: {
    colorScheme: 'primary',
    variant: 'filled',
    children: 'Button',
    size: 'medium',
  },
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button {...args}>Regular {args.size}</Button>
      <Button {...args} compact={true}>
        Compact {args.size}
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    isDisabled: true,
  },
};

export const Colors: Story = {
  args: {
    variant: 'filled',
    children: 'Button',
  },
  render: (args) => {
    const semantic = ['primary', 'secondary', 'success', 'danger', 'warning'];
    return (
      <div className="flex flex-col gap-2">
        <h2>Base Colors</h2>
        <div className="flex flex-wrap gap-4 items-center max-w-6xl">
          {Object.keys(myraColors).map((color) => (
            <Button key={color} {...args} colorScheme={color}>
              {color}
            </Button>
          ))}
        </div>
        <h2>Semantic Colors</h2>
        <div className="flex flex-wrap gap-4 items-center max-w-2xl">
          {semantic.map((color) => (
            <Button key={color} {...args} colorScheme={color}>
              {color}
            </Button>
          ))}
        </div>
      </div>
    );
  },
};

export const Sections: Story = {
  args: {
    variant: 'filled',
    children: 'Button',
  },
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button>Left Section</Button>
      <Button {...args}>Right Section</Button>
    </div>
  ),
};
