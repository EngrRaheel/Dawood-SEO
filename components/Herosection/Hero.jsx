import React from "react";
import Navbar from "../common/Navbar";


function Hero() {
  return (
    <div className="w-full h-screen  flex items-center justify-start flex-col bg-cover bg-center bg-[url('/Images/hero_bg.png')] ">
      <Navbar bg_color={"bg-blue/5"} position={'fixed'} />
      <div className="w-full  lg:max-w-[1172px] h-full mx-auto">
        <div className="w-full h-full grid justify-center items-center md:grid-col-1 lg:grid-cols-[2fr_1fr]  md:leading-[45px] lg:leading-[60px]">


          {/* Col 1 pt-24 md:pt-32 pb:0 md:pb-28 lg:pb-18 */}
          <div className="flex flex-col justify-start text-center font-Roboto lg:text-start mx-2 md:px-1 lg:px-0 lg:justify-center items-center gap-6 h-full  ">
            <h1 className="self-start  font-extrabold  text-white tracking-tight md:tracking-tight text-[32px] md:text-[40px] lg:text-[60px] ">Dawood Proud <br /> Stand Out from Crowd</h1>
            <p className="self-start  font-bold lg:font-bold  text-white text-[20px]   leading-[30px] md:text-[20px] md:leading[30px] lg:text-[22px] lg:leading-[27px]">Ultimate Destination for your all Youtube Needs.</p>
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
