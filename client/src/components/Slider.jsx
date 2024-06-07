import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

// import required modules
import { Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <>
    <Swiper navigation={true} modules={[Navigation]} className="w-screen h-screen ">
      <SwiperSlide className='text-center'><img src={image1} className='block w-screen h-screen object-cover '/></SwiperSlide>
      <SwiperSlide className='text-center'><img src={image2} className='block w-screen h-screen object-cover '/></SwiperSlide>
      <SwiperSlide className='text-center '><img src={image3} className='block w-screen h-screen object-cover'/></SwiperSlide>
    </Swiper>
  </>
  )
}

export default Slider