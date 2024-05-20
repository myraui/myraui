import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '../src';
import React from 'react';
import { button, colorSchemeOptions, myraColors } from '@myraui/theme';
import { ArrowDownTrayIcon, ArrowRightIcon, PhotoIcon } from '@myraui/icons';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
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
      options: colorSchemeOptions,
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
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const VariantsTemplate = (args: ButtonProps) => {
  return (
    <div className="flex gap-4 ">
      {Object.keys(button.variants.variant).map((variant: any) => (
        <div className="flex gap-2 flex-col items-center">
          {Object.keys(button.variants.size).map((size: any) => (
            <Button key={size} {...args} variant={variant} size={size}>
              {variant}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'filled',
  },
};

/**
 * Use the `variant` prop to change the visual style of the Button. You can set the value to `filled`, `outline`, `light`, `subtle`, or `link`.
 */
export const Variants: Story = {
  args: {
    colorScheme: 'primary',
    children: 'Button',
  },
  render: VariantsTemplate,
};

/**
 * Use the `size` prop to change the size of the Button. You can set the value to `tiny`, `small`, `medium`, `large`, or `huge`.
 */
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

/**
 * If you want the Button to take the full width of its container, you can set the `fullWidth` prop to `true`.
 */
export const FullWidth: Story = {
  args: {
    ...Default.args,
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

/**
 * Use the `radius` prop to change the border-radius of the Button. You can set the value to `tiny`, `small`, `medium`, `large`, or `huge`.
 */
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

/**
 * If you want the Button to be compact, you can set the `compact` prop to `true`. This will reduce the padding of the Button.
 */
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

/**
 * A disabled Button is not interactive and has a different visual style. You can set the `isDisabled` prop to `true` to disable the Button.
 */
export const Disabled: Story = {
  args: {
    ...Default.args,
    isDisabled: true,
  },
  render: VariantsTemplate,
};

/**
 * Apply a color scheme to the Button by setting the `colorScheme` prop from the colors defined in the theme.
 */
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

/**
 * `startSection` and `endSection` props allow you to add icons or other elements to the start or end of the Button.
 */
export const Sections: Story = {
  args: {
    variant: 'filled',
    children: 'Button',
  },
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button {...args} variant="default" startSection={<PhotoIcon />}>
        Gallery
      </Button>
      <Button {...args} endSection={<ArrowDownTrayIcon />}>
        Download
      </Button>
      <Button {...args} variant="light" startSection={<PhotoIcon />} endSection={<ArrowRightIcon />}>
        Visit Gallery
      </Button>
    </div>
  ),
};

export const LoadingState: Story = {
  args: {
    isLoading: true,
  },
  render: VariantsTemplate,
};
