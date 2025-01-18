'use client';

import { cn } from '@/lib/utils';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Button } from '@/components/atoms/Button/Button';
import {CarouselProps} from './Carousel.types';



  export const Carousel: React.FC<CarouselProps> = ({
  className = '',
  onSlideChange,
  children,
  prevButtonLabel,
  nextButtonLabel,
  finalButtonLabel,
  closebutton,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // Moves to the next slide programmatically
    }
  };

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(); // Moves to the previous slide programmatically
    }
  };
    const closeModel = () => {
      false;
    }
    
    const slides = [
    {
      content: (
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold">Slide 1</h2>
          <p className="text-gray-600">This is the first slide</p>
        </div>
      ),
    },
    {
      content: (
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold">Slide 2</h2>
          <p className="text-gray-600">This is the second slide</p>
        </div>
      ),
    },
    {
      content: (
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold">Slide 3</h2>
          <p className="text-gray-600">This is the third slide</p>
        </div>
      ),
      },
    ];

    const totalSlides = React.Children.count(children);
    console.log(totalSlides);
  return (
   <div className={cn('w-full', className)}>
      {/* Swiper Container */}
      <div>
      <Swiper
        slidesPerView={1}
        allowTouchMove={false}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
          onSlideChange?.(swiper.activeIndex); // Trigger optional callback
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full"
      >
        {children}
        </Swiper>
        </div>
      <hr />
      <div className="flex justify-center items-center gap-2 mt-5 mb-[60px]">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              onClick={() => swiperRef.current?.slideTo(index)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                activeIndex === index ? 'bg-[#003732]' : 'bg-[#CCD7D6]'
              }`}
            ></div>
          ))}
      </div>
      
      <div className="flex justify-between items-center mt-4">
        <Button variant="link" onClick={closeModel}>
          {closebutton}
        </Button>

        <div className='flex gap-4'>
        {activeIndex === 1 && (
          <Button variant="secondary" iconLeading onClick={goToPrevSlide}>
            {prevButtonLabel}
          </Button>
        )}
        <Button
          variant="primary"
          iconTrailing={activeIndex === slides.length - 1 ? false : true}
          onClick={goToNextSlide}
          disabled={activeIndex === slides.length - 1}
        >
          {activeIndex === slides.length - 1 ? finalButtonLabel : nextButtonLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};