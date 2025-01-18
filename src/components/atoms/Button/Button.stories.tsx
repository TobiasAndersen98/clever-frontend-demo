import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { buttonData } from './Button.data';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => <Button variant='primary'>primary</Button>,
};
export const Secondary: Story = {
  render: () => <Button variant='secondary'>secondary</Button>,
};
export const PrimaryIcon: Story = {
  render: () => <Button variant='primary' iconTrailing>primary icon</Button>,
};
export const SecondaryIcon: Story = {
  render: () => <Button variant='secondary' iconLeading>secondary icon</Button>,
};
export const Link: Story = {
  render: () => <Button variant='link'>Link</Button>,
};
