'use client';

import { useRef, useState } from 'react';
import { Modal } from '@/components/atoms/Modal/Modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';


export default function page() {
    const swiperRef = useRef(null);
    console.log(Navigation);
    return (
     <div>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  )
}

{/* <div className='relative w-full h-screen bg-cover' style={{ backgroundImage: 'url(/img/Forside_til_export.png)' }}>

<Modal open={showModal} className='p-12 flex flex-col items-center gap-10'>
        <p className="">Ny og forbedret selvbetjening</p>
        <Swiper className="mySwiper"
        
        >
<SwiperSlide>Slide 1</SwiperSlide>
<SwiperSlide>Slide 1</SwiperSlide>

</Swiper>    
</Modal>
<button
  className="z-50"
  onClick={() => setShowModal(true)}
>
  Show Modal
</button>
</div> */}