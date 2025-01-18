import { Button } from '@/components/atoms/Button/Button';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [showModal, setShowModal] = useState(false);

    return (
      <div>
        <Modal open={showModal}>
          <div>Modal</div>
          <button onClick={() => setShowModal(false)}>Close</button>
        </Modal>
        <Button
          className="z-10"
          onClick={() => setShowModal(true)}
        >
          Show Modal
        </Button>
      </div>
    );
  },
};
