import Image from 'next/image'
import React from 'react'
import * as Icons from '../../Svg/Icons'
import Rating from '@mui/material/Rating';
const RatingSliderItem = (props) => {
    const { rate } = props;
    return (
        <div className='flex flex-col justify-center items-start font-Halvetica h-[222px] !w-[100%]  p-4 relative rounded-lg bg-[#FAFAFA]'>
            <Icons.GoogleIcon ClassName='w-[30px]  h-[30px] absolute top-2 right-2 ' />
            <div className='flex items-center gap-1'>
                <div className='relative h-14 w-14  rounded-[4px] shadow-2xl'>
                    <Image src={'/Images/logend.svg'} alt='' fill />
                </div>
                <div className=''>
                    <p className='text-blue-600 font-semibold text-[#427fed]'>vincent maiolini</p>
                    <p className='text-slate-600'>11 months ago</p>
                </div>

            </div>
            <div className='mt-4'>
                <Rating readOnly value={rate} />
            </div>
            <div className='overflow-auto tracking-tighter text-justify  pr-2 font-Halvic font-light text-[#3c3c37]'>
                <p>We chose the Darwood and Tanner specialise implant practice for my wifes dental treatment as we wanted these complex and demanding procedures conducted by the the most competent and experienced practitioner that I knew. We made a very wise decision, as our whole experience was one of total satisfaction from our first visit. Andrew explained the forthcoming treatments, calmly, clearly and concisely, allaying any concerns we had at the time. The staff were both knowledgeable and most kind and helpful at every visit. The treatments went well without any complications and after the surgical aspects were completed, Susan took over the ongoing prosthetic treatments seamlessly and with equal competence. Achieving an excellent and most satisfactory result with kind and endlessly patient endeavour.We would unreservedly recommend their Dental Practice after our totally positive and enjoyable experience.</p>
            </div>
        </div>
    )
}

export default RatingSliderItem