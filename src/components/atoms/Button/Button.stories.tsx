import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { buttonData } from './Button.data';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: buttonData,
};
