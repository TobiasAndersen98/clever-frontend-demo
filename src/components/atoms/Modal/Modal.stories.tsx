import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { Carousel } from '@/components/molecules/Carousel/Carousel';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const meta: Meta<typeof Modal> = {
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [showModal, setShowModal] = useState(false);
    return (<>
      <Button onClick={() => setShowModal(true)}>Show Modal</Button>
      <Modal isOpen={showModal} className='overflow-hidden text-[#003732]'>
        <div>
          Modal
        </div>
        <Button onClick={() => setShowModal(false)}>Close</Button>
      </Modal>
    </>
    )
  }
};
