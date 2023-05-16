import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../src/button.component';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    text: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    text: 'Secondary Button',
  },
};

export const Outlined: Story = {
  args: {
    type: 'outlined',
    text: 'Outlined Button',
  },
};

export const Small: Story = {
  args: {
    type: 'pills',
    text: 'Pill',
  },
};
