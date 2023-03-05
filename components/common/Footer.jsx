import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiYoutubeLine } from "react-icons/ri";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
function Footer() {
    return (
        <div className='w-full  text-white bg-[#121521] text-base overflow-x-hidden'>
            {/* parent div */}
            <div className="page-section-container max-w-[1280px] px-6 md:px-4 md:mx-auto pt-24 md:pt-24 pb-10 grid grid-cols-1 md:grid-cols-12">
                <div className="col-span-full mb-7 md:mb-8">
                    <div className='relative h-14 w-14 flex items-center justify-center rounded-full shadow-xl'>
                        <Image src={'/Images/logend.svg'} alt='logimg' fill />
                    </div>
                </div>
                {/* <div className="col-span-full mb-7 md:mb-8"></div> */}
                <div className="col-span-full md:col-span-3 flex flex-col">
                    <div class="font-medium leading-5 mb-8 md:mb-12">
                        "Our mission is to empower every video creator with the insights and inspiration they need to grow.
                        That is why we are obsessed with providing an intelligent mix of technological
                        and human expertise that boosts your productivity and gets you more views.
                        Whatever your next challenge, we will shine a light on the way forward."
                    </div>
                    <div class="font-medium ">
                        © 2023 vidIQ. All Rights Reserved.
                    </div>
                </div>
                <div className="col-span-full md:col-span-6 mt-8 md:mt-0 text-md">
                    <div class="flex flex-col md:flex-row w-full space-y-7 md:space-y-0 space-x-0 md:space-x-2 lg:space-x-10 md:pl-10">
                        <div>
                            <div class="mb-4 sm:mb-3 font-bold">
                                Company
                            </div>
                            <div class="flex flex-col items-start space-y-3">
                                <p>Careers</p>
                                <p>Testimonials</p>
                                <p>Blog</p>
                            </div>
                        </div>
                        <div>
                            <div class="mb-4 sm:mb-3 font-bold">
                                Product
                            </div>
                            <div class="flex flex-col items-start space-y-3">
                                <p>Affiliates</p>
                                <p>Brand Solutions</p>
                                <p>Agency Solutions</p>
                                <p>MCN Solutions</p>
                                <p>  Browser Extension</p>
                                <p>vidIQ Academy</p>
                            </div>
                        </div>
                        <div>
                            <div class="mb-4 sm:mb-3 font-bold">
                                Other

                            </div>
                            <div class="flex flex-col items-start space-y-3">
                                <p>Contact
                                </p>
                                <p>Terms
                                </p>
                                <p>Privacy
                                </p>
                                <p>Support
                                </p>
                                <p>How To Get More YouTube Views</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-span-full md:col-span-3 text-md mt-8 md:mt-0">
                    <div class="font-bold mb-2 md:mb-3">
                        Connect with us
                    </div>
                    <div class="leading-5 text-white md:text-opacity-60">
                        Call Sales 888-998-VIDIQ (8434)
                    </div>
                    <div className="mt-8 flex items-center space-x-4">
                        <a href="https://www.youtube.com" className="hover:opacity-70" title="YouTube" ><RiYoutubeLine size={30} /></a>
                        <a href="https://www.facebook.com" className="hover:opacity-70" title="Facebook"><AiOutlineFacebook size={30} /></a>
                        <a href="https://www.instagram.com" className="hover:opacity-70" title="Instagram"><AiOutlineInstagram size={30} /></a>
                        <a href="https://twitter.com" className="hover:opacity-70" title="Twitter"><BsTwitter size={30} /></a>
                        <a href="https://www.linkedin.com" className="hover:opacity-70" title="LinkedIn"><AiOutlineLinkedin size={30} /></a>
                    </div>

                </div>

                {/* <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-9 mt-9 col-span-full">

                </div> */}

            </div>
        </div >


    )
}

export default Footer



