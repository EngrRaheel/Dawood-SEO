import React from 'react'
import Image from 'next/image'
import { BsArrowRightShort } from "react-icons/bs";

function SuperchargeYT() {
    return (
        <div className="w-full min-h-screen flex justify-center items-center bg_SCY font-Roboto">
            <div className="w-full  max-w-[1172px] m-auto flex flex-col gap-8 justify-center items-center ">
                <Image src="Images/logend.svg" width={80} height={60} alt="logo-image" className='cover'></Image>
                <h1 className="w-full max-w-[900px] text-center text-[40px] md:text-[60px] leading-[75px] text-white font-black font-Inter">Supercharge your YouTube channel today</h1>
                <p className='text-[gray] text-[16px] md:text-[22px] font-medium font-Inter'>Join the millions of creators using vidIQ to grow their channels</p>
                <button className='flex justify-center items-center px-6 py-3 rounded-full bg-[#007CEF] mt-6'>
                    Sign Up For Free
                    <BsArrowRightShort className="text-[30px] text-white" />
                </button>
            </div>
        </div>
    )
}

export default SuperchargeYT
