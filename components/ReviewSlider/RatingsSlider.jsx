import Image from 'next/image';
import React from 'react'
import Rating from '@mui/material/Rating';
import * as Icons from '../../Svg/Icons'
import RatingSliderItem from './RatingSliderItem';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import required modules
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
const ReviewSlider = () => {
    return (
        <div className='w-full bg_card py-16'>
            <div className='w-full h-full m-auto max-w-[1280px] md:flex md:gap-4 gap-y-4 justify-center items-center'>


                {/* left portion */}
                <div className="w-full h-[280px] rounded-lg p-4  md:my-0 my-8 md:w-[30%] bg-white">

                    <div className='w-full flex  md:gap-3 gap-10 px-10 md:px-0'>
                        <div className='h-20 w-36 relative'>
                            <Image src={'/Images/ratingSliderSample.jpg'} alt="" fill />
                        </div>
                        <div className='flex flex-col gap-4 justify-center items-start gap-y-2 '>
                            <p className='font-[700] '>Dawood and Tanner Specialist Dental Practice</p>
                            <div>
                                <Rating name="half-rating" defaultValue={4.5} precision={0.5} />

                            </div>
                            <p className='text-slate-500'>Based on 63 reviews</p>
                            <div className='relative h-5 w-36'>
                                <Image src={'/Images/poweredByGoogle.webp'} alt='' fill />
                            </div>
                            <button className=' flex gap-1 text-white shadow-lg items-center justify-center bg-[#1c62e4] hover:bg-[#064bcd] duration-200 py-1 px-3 rounded-3xl my-4'>
                                review us on
                                <Icons.GoogleIcon ClassName='bg-white rounded-full' />
                            </button>
                        </div>
                    </div>

                </div>
                {/* right portion */}
                <div className=" w-full md:w-[70%]">
                    <Swiper
                        speed={2000}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        Autoplay={true}
                        modules={[Autoplay]}

                        slidesPerView={1}
                        spaceBetween={40}
                        breakpoints={{
                            650: {
                                slidesPerView: 2,
                                spaceBetween: 20,

                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        loop={true}
                        className="MyRatingSlider"
                    >
                        <SwiperSlide> <RatingSliderItem /></SwiperSlide>
                        <SwiperSlide> <RatingSliderItem /></SwiperSlide>
                        <SwiperSlide> <RatingSliderItem /></SwiperSlide>
                        <SwiperSlide> <RatingSliderItem /></SwiperSlide>
                        <SwiperSlide> <RatingSliderItem /></SwiperSlide>
                        <SwiperSlide> <RatingSliderItem /></SwiperSlide>

                    </Swiper>

                </div>
            </div>
        </div>



    )
}

export default ReviewSlider;