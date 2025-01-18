import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import { inputData } from './Input.data';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {

  render: () => {
  const [value, setValue] = useState('');
  return (
    <Input label='lable' type='string'
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
    )
  }
};
