import { Meta, StoryObj } from '@storybook/react';
import ButtonGroup, { ButtonGroupProps } from '../src/button-group';
import Button from '../src/button';
import React from 'react';
import { IconButton } from '../src/icon-button';
import { ArrowDownTrayIcon, ArrowRightIcon, CameraIcon, PhotoIcon } from '@myraui/icons';
import { button, colorSchemeOptions } from '@myraui/theme';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: Object.keys(button.variants.variant),
      description:
        'Use the `variant` prop to change the visual style of the buttons. You can set the value to `filled`, `outline`, `light`, `subtle`, or `link`.',
    },
    colorScheme: {
      control: {
        type: 'select',
      },
      options: colorSchemeOptions,
      description: 'Apply a color scheme to the buttons by setting the `colorScheme` prop from the colors defined in the theme.',
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
      description: 'Disable the transition on the buttons',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

const Template = (args: ButtonGroupProps) => (
  <ButtonGroup {...args}>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </ButtonGroup>
);
const VariantButtonsTemplate = (args: ButtonGroupProps) => (
  <ButtonGroup {...args} colorScheme="primary">
    <Button colorScheme="success" variant="filled">
      Filled
    </Button>
    <Button colorScheme="success" variant="outline">
      Outline
    </Button>
    <Button variant="light">Light</Button>
    <Button variant="subtle">Subtle</Button>
    <Button variant="link">Link</Button>
  </ButtonGroup>
);

const IconsTemplate = (args: ButtonGroupProps) => (
  <ButtonGroup {...args}>
    <IconButton icon={ArrowRightIcon} />
    <IconButton icon={ArrowDownTrayIcon} />
    <IconButton icon={CameraIcon} />
    <IconButton icon={PhotoIcon} />
  </ButtonGroup>
);

export const Default: Story = {
  render: Template,
};

export const VariantButtons: Story = {
  render: VariantButtonsTemplate,
};

export const Icons: Story = {
  render: IconsTemplate,
};

export const BorderedButtons: Story = {
  render: Template,
  args: {
    variant: 'outline',
    colorScheme: 'primary',
  },
};

export const DisabledGroup: Story = {
  render: Template,
  args: {
    colorScheme: 'primary',
    isDisabled: true,
  },
};
