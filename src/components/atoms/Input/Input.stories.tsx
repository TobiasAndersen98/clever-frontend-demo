import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import { inputData } from './Input.data';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => (
    <Input label='Email *' />
  ),
};
