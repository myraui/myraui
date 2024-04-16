import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '../src/button/button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Playground: Story = (args) => <Button {...args} />;
