import React from 'react'
import Image from 'next/image'
function BoostYTV() {
    return (
        <div className="w-full min-h-[100vh] bg_BYT font-Inter  pb-16">
            <div className="w-full  max-w-[1172px] m-auto flex flex-col gap-6 justify-between items-center ">
                <div className='flex flex-col justify-center items-center text-center max-w-[315px] md:max-w-[500px] mt-12 '>
                    <h1 class="font-extrabold text-[24px] md:text-[30px] lg:text-[32px] text-white">Boost your YouTube views</h1>
                    <p className='font-Inter font-medium text-[gray] text-[17px] '>Discover keyword, title and description recommendations designed to get you more views and subscribers for free.</p>
                </div>
                <div className='w-full h-[300px] md:h-[600px] relative'>
                    <Image src={"/Images/BoostYTV.png"} alt='img' className='cover' fill></Image>

                </div>
            </div>
        </div>



    )
}

export default BoostYTV
