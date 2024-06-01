import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '../src';
import React from 'react';
import { button, colorSchemeOptions, myraColors } from '@myraui/theme';
import { IconArrowRight, IconCamera, IconDownload, IconPhoto } from '@myraui/icons';
import { IconButton } from '../src/icon-button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: Object.keys(button.variants.variant),
      description:
        'Use the `variant` prop to change the visual style of the Button. You can set the value to `filled`, `outline`, `light`, `subtle`, or `link`.',
    },
    colorScheme: {
      control: {
        type: 'select',
      },
      options: colorSchemeOptions,
      description: 'Apply a color scheme to the Button by setting the `colorScheme` prop from the colors defined in the theme.',
    },
    size: {
      control: {
        type: 'select',
      },
      options: Object.keys(button.variants.size),
      description: 'Use the `size` prop to change the size of the Button. You can set the value to `tiny`, `small`, `medium`, `large`, or `huge`.',
    },
    radius: {
      control: {
        type: 'select',
      },
      options: Object.keys(button.variants.radius),
      description:
        'Use the `radius` prop to change the border-radius of the Button. You can set the value to `tiny`, `small`, `medium`, `large`, or `huge`.',
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
      description: 'If you want the Button to take the full width of its container, you can set the `fullWidth` prop to `true`.',
    },
    compact: {
      control: {
        type: 'boolean',
      },
      description: 'Creates a compact button with reduced padding.',
    },
    isLoading: {
      control: {
        type: 'boolean',
      },
      description: 'To show a loader on the button',
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
      description: 'Control the disabled state of the button',
    },
    isIconOnly: {
      control: {
        type: 'boolean',
      },
      description: 'If the button only contains an icon, set this prop to `true` to reduce the padding and make the button square.',
    },
    disableTransition: {
      control: {
        type: 'boolean',
      },
      description: 'Disable the transition on the button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const VariantsTemplate = (args: ButtonProps) => {
  return (
    <div className="flex gap-4 ">
      <Button {...args} variant="filled">
        Filled
      </Button>
      <Button {...args} variant="light">
        Light
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="subtle">
        Subtle
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
  );
};

const IconsTemplate = (args: ButtonProps) => (
  <div className="flex gap-4 ">
    <IconButton {...args} icon={IconCamera} variant="filled" />
    <IconButton {...args} icon={IconCamera} variant="light" />
    <IconButton {...args} icon={IconCamera} variant="outline" />
    <IconButton {...args} icon={IconCamera} variant="subtle" />
    <IconButton {...args} icon={IconCamera} variant="link" />
  </div>
);

const SizesTemplate = (args: ButtonProps) => (
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
);

const RadiusTemplate = (args: ButtonProps) => (
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
    <Button {...args} radius="full">
      Full
    </Button>
  </div>
);

const WithIconsTemplate = (args: ButtonProps) => (
  <div className="flex gap-4 items-center">
    <Button {...args} startSection={<IconPhoto />}>
      Gallery
    </Button>
    <Button {...args} endSection={<IconDownload />}>
      Download
    </Button>
    <Button {...args} variant="light" startSection={<IconPhoto />} endSection={<IconArrowRight />}>
      Visit Gallery
    </Button>
  </div>
);

const CustomStylesTemplate = () => (
  <div className="flex gap-4">
    <Button
      variant="filled"
      colorScheme="teal/foreground-12"
      startSection={<span className="rounded-full bg-foreground-1 text-foreground-12 w-8 h-8 flex items-center justify-center">12</span>}
      endSection={<IconArrowRight />}
      className="rounded-l-[50px] rounded-r-medium px-unit-2"
    >
      Send Files
    </Button>
  </div>
);

const CompactTemplate = (args: ButtonProps) => (
  <div className="flex gap-4 items-center">
    <Button {...args}>Regular {args.size}</Button>
    <Button {...args} compact={true}>
      Compact {args.size}
    </Button>
  </div>
);

const ColorsTemplate = (args: ButtonProps) => {
  const semantic = ['primary', 'secondary', 'success', 'danger', 'warning'];
  return (
    <div className="flex flex-col gap-2">
      <h2>Base Colors</h2>
      <div className="flex flex-wrap gap-4 items-center max-w-6xl">
        {Object.keys(myraColors).map((color) => {
          const colorScheme = color === 'white' ? 'white/black' : color === 'black' ? 'black/white' : color;
          return (
            <Button key={color} {...args} colorScheme={colorScheme}>
              {color}
            </Button>
          );
        })}
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
  render: SizesTemplate,
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
  render: RadiusTemplate,
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
  render: CompactTemplate,
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
  render: ColorsTemplate,
};

/**
 * `startSection` and `endSection` props allow you to add icons or other elements to the start or end of the Button.
 */
export const WithIcons: Story = {
  args: {
    variant: 'filled',
    children: 'Button',
  },
  render: WithIconsTemplate,
};

export const IconOnly: Story = {
  args: {
    variant: 'filled',
  },
  render: IconsTemplate,
};

/**
 * The `isLoading` prop allows you to show a loading spinner inside the Button. This is useful when the Button triggers an action that takes some time to complete.
 */
export const LoadingState: Story = {
  args: {
    isLoading: true,
  },
  render: VariantsTemplate,
};

/**
 * You can change properties of the loader by passing a `loaderProps` object to the Button.
 */
export const LoaderProps: Story = {
  args: {
    isLoading: true,
    loaderProps: {
      variant: 'dots',
    },
  },
};

export const CustomStyles = {
  args: {},
  render: CustomStylesTemplate,
};
