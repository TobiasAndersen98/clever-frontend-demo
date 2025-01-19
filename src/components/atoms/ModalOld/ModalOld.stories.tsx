import { Button } from '@/components/atoms/Button/Button';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { ModalOld } from './ModalOld';

const meta: Meta<typeof ModalOld> = {
  component: ModalOld,
};

export default meta;
type Story = StoryObj<typeof ModalOld>;

export const Default: Story = {
  render: () => {
    const [showModalOld, setShowModalOld] = useState(false);

    return (
      <div>
        <ModalOld open={showModalOld}>
          <div>ModalOld</div>
          <button onClick={() => setShowModalOld(false)}>Close</button>
        </ModalOld>
        <Button
          className="z-10"
          onClick={() => setShowModalOld(true)}
        >
          Show ModalOld
        </Button>
      </div>
    );
  },
};
