import Image from 'next/image'
import React from 'react'
import {BsEyeFill} from 'react-icons/bs'
import {IoIosPeople} from 'react-icons/io'
const SliderItem = () => {
    return (
        <div className='h-[500px]  w-[350px] lg:w-[400px] flex flex-col items-center  rounded-2xl p-8 bg-gradient-to-t from-[#4E287F] to-[#b51d7d] gap-4'>
            <div className='h-28 w-28 rounded-full relative'>
                <Image src={'/Images/sliderSamplepic.webp'} className='object-cover rounded-full' fill alt='' />
            </div>
            <div className='w-full flex flex-col gap-2 items-center justify-center'>
                <p className='w-full  text-white font-[800] text-center '>Evan Carmichael</p>
                <p className='text-center bg-[#8A548A] text-white font-[400] rounded-3xl py-1 px-2'>Youtube Creater</p>
            </div>

            <div className='w-full flex gap-14 items-center justify-center '>
                <p className='text-white text-3xl font-[800]'>3M</p>
                <p className='text-white text-3xl font-[800]'>383K</p>
            </div>

            <div className='w-full flex items-center justify-center gap-14'>
            <div className='flex gap-1 items-center justify-center text-xl text-white/50 font-[600]'>
                <IoIosPeople size={30} />
            <p>subscribers</p>
            </div>
            <div className='flex gap-1 items-center justify-center text-xl text-white/50 font-[600]'>
                <BsEyeFill size={25} />
            <p>views</p>
            </div>
            
            </div>
            <div className='w-full text-center'>
                <p className='text-white font-[600] text-xl'>  Before vidIQ, I woke up at 2am worried about my views. Now I do not get YouTube breakdowns and I am confident in my thumbnail and title.</p>
            </div>

        </div>
    )
}

export default SliderItem