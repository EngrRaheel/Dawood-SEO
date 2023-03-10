import Image from 'next/image'
import React from 'react'
import { BsEyeFill } from 'react-icons/bs'
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import { IoIosPeople } from 'react-icons/io'
import Link from 'next/link'
const SliderItem = () => {
    return (
        <div className='font-Inter_2 h-[500px]  w-[330px] lg:w-[350px] flex flex-col items-center  rounded-2xl p-6 bg-gradient-to-t from-[#25385a] to-[#b51d7d] gap-3'>
            <div className='h-24 w-24 rounded-full relative'>
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
            <button className='flex justify-center items-center px-2 py-2 rounded-full text-white drop-shadow-lg  bg-[#1c62e4] hover:bg-[#064bcd] duration-200 ' >
                <Link href="/ProofOfwork" className='flex items-center justify-between gap-1'>
                    <p className='font-Roboto text-lg  font-bold '>See Proof</p>
                    <BsBoxArrowInUpRight  size={18} />
                </Link>

            </button>
            {/* <button className=' bg-[#007CEF] mt-6'>
                    Sign Up For Free
                    <BsArrowRightShort className="text-[30px] text-white" />
                </button> */}

        </div>
    )
}

export default SliderItem