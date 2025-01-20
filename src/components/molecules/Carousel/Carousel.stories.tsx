import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';
import { SwiperSlide } from 'swiper/react';

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  title: 'Components/Carousel', // Optional: Helps organize stories in Storybook
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: () => (
    <Carousel
      closebutton="spring over"
      prevButtonLabel="Forrige"
      nextButtonLabel="Næste"
      finalButtonLabel="Kom i gang"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Carousel>
  ),
};
