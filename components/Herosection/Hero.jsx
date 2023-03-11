import React from "react";
import Navbar from "../common/Navbar";


function Hero() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col bg-cover bg-center bg-[url('/Images/hero_bg.png')] ">
      <Navbar bg_color={"bg-blue/5"} position={'fixed'} />
      <div className="w-full  lg:max-w-[1172px] h-full mx-auto">
        <div className="w-full h-full grid justify-center items-center md:grid-col-1 lg:grid-cols-[2fr_1fr]  ">


          {/* Col 1 pt-24 md:pt-32 pb:0 md:pb-28 lg:pb-18 */}
          <div className="flex flex-col justify-center md:justify-start text-center font-Roboto lg:text-start mx-3 md:px-1 lg:px-0 lg:justify-center md:items-start gap-2 md:gap-6 h-full mb-36 md:mb-none ">
            <h1 className=" font-extrabold leading-8 md:leading-none text-white tracking-tighter md:tracking-tight text-[28px] md:text-[40px] lg:text-[60px] ">Dawood Proud <br /> Stand Out from Crowd</h1>
            <p className=" font-medium md:font-semibold  lg:font-bold  text-white text-[20px]   leading-[28px] md:text-[20px] md:leading[30px] lg:text-[22px] lg:leading-[27px]">Ultimate Destination for your all Youtube Needs.</p>
          </div>
          {/* Col 2 */}
          {/* <div className="w-full h-full flex items-center justify-center flex-col">
            <h2 className="text-white">Headinng Demo</h2>
          </div> */}
        </div>

      </div>
    </div>
  );
}

export default Hero;
