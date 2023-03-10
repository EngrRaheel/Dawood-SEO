import React from 'react'
import Navbar from '../common/Navbar'
import Image from 'next/image'
function TeamsMemberCard({ name, position, bio, imageUrl }) {
  return (


    <div className="flex flex-col w-full gap-32">

      <div className='font-Inter_2 h-[400px]  w-[300px] lg:w-[300px] flex flex-col items-center  rounded-2xl p-6 bg-gradient-to-t from-[#25385a] to-[#b51d7d] gap-3'>
        <div className="h-24 w-24 rounded-full relative mx-auto">
          <Image src='/TeamImg/CEO.jpg' fill className='object-cover rounded-full' alt='CEO'></Image>
        </div>
        <div className="px-4 py-5 sm:px-6">
          <h3 className='w-full  text-white font-[800] text-center '>{name}</h3>
          <p className='w-full  text-white font-[800] text-center '>{position}</p>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <p className='w-full  text-white font-[600] text-center'>{bio}</p>
      </div>
    </div>
    </div >


  )
};




export default TeamsMemberCard