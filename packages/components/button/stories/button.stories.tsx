import { Meta } from '@storybook/react';
import { Button } from '../src';
import { button, colorSchemes } from '@myraui/theme';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Playground',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: Object.keys(button.variants.variant),
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
    colorScheme: {
      control: {
        type: 'select',
      },
      options: colorSchemes,
    },
  },
};

const defaultProps = {
  ...button.defaultVariants,
};

export const Default = {
  args: defaultProps,
};

export default meta;
