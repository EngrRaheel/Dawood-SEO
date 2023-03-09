import React from 'react'
import SliderItem from './SliderItem';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, loop } from "swiper";
const YtSlider = () => {

  return (
    <div className='w-full min-h-screen  flex flex-col items-center justify-center gap-4 bg-[#0F121D]'>
      <p className='text-white font-Roboto text-[20px] font-semibold'>TRUSTED BY LEADING CREATORS</p>
      <div className='w-full h-full flex justify-center items-center relative'>
        {/* <div className='absolute h-full sm:w-[5%] w-[10%] z-10 left-0 bg-gradient-to-r from-black/30 backdrop-blur-[2px] '>
        </div> */}
        {/* <div className='absolute h-full sm:w-[5%] w-[10%] z-10 right-0 bg-gradient-to-l from-black/30 backdrop-blur-[2px] '>

        </div> */}
        <Swiper

          slidesPerView={1}
          spaceBetween={40}
          breakpoints={{
            480: {

              slidesPerView: 1,
              spaceBetween: 20,

            },
            720: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },

          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,

          }}
          modules={[Autoplay]}
          loop={true}
          Autoplay={true}
          speed={2500}
          effect="fade"
          // direction='rtl'
          className="mySwiper"
        >
          <SwiperSlide><SliderItem /></SwiperSlide>
          <SwiperSlide><SliderItem /></SwiperSlide>
          <SwiperSlide><SliderItem /></SwiperSlide>
          <SwiperSlide><SliderItem /></SwiperSlide>
          <SwiperSlide><SliderItem /></SwiperSlide>
          <SwiperSlide><SliderItem /></SwiperSlide>
          <SwiperSlide><SliderItem /></SwiperSlide>
          <SwiperSlide><SliderItem /></SwiperSlide>
          <SwiperSlide><SliderItem /></SwiperSlide>

        </Swiper>
      </div>
    </div>
  )
}

export default YtSlider;