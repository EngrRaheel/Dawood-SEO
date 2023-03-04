import React from 'react'
import Image from 'next/image';
import { BsArrowRightShort } from "react-icons/bs";


function ServiceCard() {
    return (
        <div className="w-full min-h-[100vh] font-Inter flex items-center justify-start flex-col py-12 md:py-28 relative bg_card ">
            <div className="w-full max-w-[1172px] h-full flex flex-col gap-12">
                <div className='flex flex-col justify-center items-center gap-[1.75rem]'>
                    <h2 className='font-extrabold font-Inter text-base text-[#4668c6]'>WEB • EXTENSION • APP</h2>
                    <p className='text-white text-center font-Inter font-extrabold max-w-auto md:max-w-[700px]  text-[28px] md:text-[38px] lg:text-[38px]'>Meet the most advanced growth tools for video creators</p>
                </div>
                <div className='w-full grid grid-cols-2 gap-20  justify-center items-start '>
                    <div className='w-full h-[470px]  relative'>
                        <Image src={"/Images/cardimage.png"} alt="" fill></Image>
                    </div>
                    <div className='flex flex-col justify-center items-start w-full text-white gap-6 md:pl-[10%] md:pr-[7%] space-y-6 md:space-y-4 text-center md:text-left'>
                        <h3 class="font-extrabold text-[24px] md:text-[30px] lg:text-[32px]">Understand what’s working for your channel</h3>
                        <p className='font-Inter text-[#878b8c] font-normal text-[17px] '>Track and compare your performance in real time so you never miss an opportunity to get more views and make money from your videos.</p>
                        <button className='flex justify-center items-center px-6 py-3 rounded-full bg-[#007CEF]'>
                            Sign Up For Free
                            <BsArrowRightShort className="text-[30px] text-white" />
                        </button>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default ServiceCard;
