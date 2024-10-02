import { DocsLink } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DocsLink> = {
  title: 'Components/Atoms/DocsLink',
  component: DocsLink,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof DocsLink>;

export const Default: Story = {
  args: {
    href: '#page',
    children: 'Storybook',
  },
};
