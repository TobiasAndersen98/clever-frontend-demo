'use client';

import { cn } from '@/lib/utils';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Button } from '@/components/atoms/Button/Button';
import { CarouselProps } from './Carousel.types';

export const Carousel: React.FC<CarouselProps> = ({
  className = '',
  onSlideChange,
  children,
  prevButtonLabel,
  nextButtonLabel,
  finalButtonLabel,
  closebutton,
  closeModal,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const goToNextSlide = () => swiperRef.current?.slideNext();
  const goToPrevSlide = () => swiperRef.current?.slidePrev();
  const closeModel = () => closeModal?.();

  const totalSlides = React.Children.count(children);

  return (
    <div className={cn('overflow-x-hidden', className)}>
      <Swiper
        slidesPerView={1}
        allowTouchMove={false}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
          onSlideChange?.(swiper.activeIndex);
        }}
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        className="w-full"
      >
        {children}
      </Swiper>

      <hr />

      <div className="flex justify-center items-center gap-2 mt-5 mb-[60px]">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              activeIndex === index ? 'bg-[#003732]' : 'bg-[#CCD7D6]'
            }`}
          />
        ))}
      </div>

      <div className="flex justify-between items-center">
        <Button
          className={cn(activeIndex !== 2 ? '' : 'invisible')}
          variant="link"
          onClick={closeModel}
        >
          {closebutton}
        </Button>

        <div className="flex gap-4">
          {activeIndex === 1 && (
            <Button variant="secondary" iconLeading onClick={goToPrevSlide}>
              {prevButtonLabel}
            </Button>
          )}
          <Button
            variant="primary"
            iconTrailing={activeIndex !== totalSlides - 1}
            onClick={
              activeIndex !== totalSlides - 1 ? goToNextSlide : closeModel
            }
          >
            {activeIndex === totalSlides - 1 ? finalButtonLabel : nextButtonLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};
