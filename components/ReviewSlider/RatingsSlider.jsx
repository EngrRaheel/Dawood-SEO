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
        <div className='w-full bg-blue py-16'>
            <div className='w-full h-full m-auto max-w-[1280px] md:flex md:gap-4 gap-y-3 justify-center items-center'>


                {/* left portion */}
                <div className="w-full h-[222px] font-OpenSans rounded-lg p-6  md:my-0 my-8 md:w-[30%] bg-white">

                    <div className='w-full flex  md:gap-2 gap-10 px-10 md:px-0'>
                        <div className='h-20 w-36 relative'>
                            <Image src={'/Images/ratingSliderSample.jpg'} alt="" fill />
                        </div>
                        <div className='flex flex-col gap-4 justify-center items-start gap-y-2 '>
                            <p className='font-[700] '>Dawood and Tanner Specialist Dental Practice</p>
                            <div>
                                <Rating name="half-rating" defaultValue={4.5} precision={0.5} readOnly />

                            </div>
                            <p className='text-slate-500'>Based on 63 reviews</p>
                            <div className='relative h-[18px] w-[144px]'>
                                <Image src={'/Images/poweredByGoogle.webp'} alt='' fill />
                            </div>
                            <button className=' flex gap-1 text-white shadow-lg items-center justify-center bg-[#1c62e4] hover:bg-[#064bcd] duration-200 py-1 px-3 rounded-3xl '>
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
                        {data.map((data, index) => {
                            return <SwiperSlide key={index}> <RatingSliderItem rate={data.star} /></SwiperSlide>

                        })}

                    </Swiper>

                </div>
            </div>
        </div>



    )
}


const data = [
    {
        start: 2
    },
    {
        star: 3
    },
    {
        start: 5
    },
    {
        star: 4
    },
    {
        star: 2
    },
]


export default ReviewSlider;