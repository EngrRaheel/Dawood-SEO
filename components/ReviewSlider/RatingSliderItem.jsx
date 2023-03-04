import Image from 'next/image'
import React from 'react'
import * as Icons from '../../Svg/Icons'
import Rating from '@mui/material/Rating';
const RatingSliderItem = () => {
    return (
        <div className='flex flex-col justify-center items-start h-[280px] w-[300px]  p-5 relative rounded-lg bg-[#FAFAFA]'>
            <Icons.GoogleIcon ClassName='w-[30px]  h-[30px] absolute top-1 right-1 ' />
            <div className='flex items-center gap-1'>
                <div className='relative h-14 w-14  rounded-full shadow-xl'>
                    <Image src={'/Images/ratingSliderUserSample.png'} alt='' fill />
                </div>
                <div className=''>
                    <p className='text-blue-600 font-semibold'>vincent maiolini</p>
                    <p className='text-slate-600'>11 months ago</p>
                </div>

            </div>
            <div className='mt-4'>
                <Rating name="half-rating" defaultValue={5} precision={0.5} />
            </div>
            <div className='overflow-y-auto text-justify'>
                <p>We chose the Darwood and Tanner specialise implant practice for my wife's dental treatment as we wanted these complex and demanding procedures conducted by the the most competent and experienced practitioner that I knew. We made a very wise decision, as our whole experience was one of total satisfaction from our first visit. Andrew explained the forthcoming treatments, calmly, clearly and concisely, allaying any concerns we had at the time. The staff were both knowledgeable and most kind and helpful at every visit. The treatments went well without any complications and after the surgical aspects were completed, Susan took over the ongoing prosthetic treatments seamlessly and with equal competence. Achieving an excellent and most satisfactory result with kind and endlessly patient endeavour.We would unreservedly recommend their Dental Practice after our totally positive and enjoyable experience.</p>
            </div>
        </div>
    )
}

export default RatingSliderItem