/* import { Button } from '@/components/molecules/Button/Button'; */
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
        <Modal open={true} onClose={() => setShowModal(false)}>
          <div>Modal</div>
        </Modal>
{/*         <Button
          className="z-10"
          variant="secondary"
          onClick={() => setShowModal(true)}
        >
          Show Modal
        </Button> */}
      </div>
    );
  },
};
