import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Steps } from './Steps';

const meta: Meta<typeof Steps> = {
  component: Steps,
};

export default meta;

type Story = StoryObj<typeof Steps>;

export const Default: Story = {
  render: () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const labels = ['1', '2', '3', '4', '5'];

    return (
      <div>
        <Steps
        labels={labels}
        setIndex={setCurrentIndex}
        index={currentIndex}
        />
        <p>
          Current index is: <strong>{currentIndex}</strong>
        </p>
      </div>
    );
  }
};
