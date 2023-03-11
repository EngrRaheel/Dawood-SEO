import React from 'react'
import Image from 'next/dist/client/image'
import TeamsMemberCard from '../../components/SupreChargeYT/TeamSection/TeamsMemberCard'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'

import { relative } from 'path'

function TeamMembers() {
    return (
        <div className='w-full'>
            <Navbar bg_color={"bg-blue/90"} position={relative} />

            <div className='flex flex-col justify-center items-center gap-4 max-w-[1120px] mx-auto'>
                <div className='flex justify-center items-center relative h-[500px] w-[60%]'>
                    <Image src='/Images/team.svg' fill></Image>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-6 gap-8  my-8 '>
                    <div className='"col-span-full md:col-span-full mx-auto'>
                        <TeamsMemberCard
                            name="John Smith"
                            position="Software Engineer"
                            bio="John is a software engineer with over 10 years of experience in web development."
                            imageUrl="https://example.com/john-smith.jpg" />
                    </div>

                    <div className='col-span-2'>
                        <TeamsMemberCard
                            name="John Smith"
                            position="Software Engineer"
                            bio="John is a software engineer with over 10 years of experience in web development."
                            imageUrl="https://example.com/john-smith.jpg" />
                    </div>
                    <div className='col-span-2'>
                        <TeamsMemberCard
                            name="John Smith"
                            position="Software Engineer"
                            bio="John is a software engineer with over 10 years of experience in web development."
                            imageUrl="https://example.com/john-smith.jpg" />
                    </div>
                    <div className=''>
                        <TeamsMemberCard
                            name="John Smith"
                            position="Software Engineer"
                            bio="John is a software engineer with over 10 years of experience in web development."
                            imageUrl="https://example.com/john-smith.jpg" />
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default TeamMembers