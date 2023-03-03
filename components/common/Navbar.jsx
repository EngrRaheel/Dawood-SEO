import React from "react";
import Image from "next/image";
import Link from "next/link";
// import component 👇
import Drawer from "react-modern-drawer";
import { Spin as Hamburger } from 'hamburger-react';// hamburger 

// import { Sling as Hamburger } from 'hamburger-react'
//import styles 👇
import "react-modern-drawer/dist/index.css";
// assets




const Navitems = [
  {
    Name: "Features",
    Route: "#Features",
  },
  {
    Name: "TikTok",
    Route: "#TikTok",
  },
  {
    Name: "Extension",
    Route: "#Extension",
  },
  {
    Name: "Brands",
    Route: "#Brands",
  },
  {
    Name: "Pricing",
    Route: "#Pricing",
  },
  {
    Name: "Blog",
    Route: "/blog",
  },
  {
    Name: "Community",
    Route: "/community",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="w-full h-[90px] z-30 relative bg-blue/20 font-Inter">


      <div className="w-full  max-w-[1280px] m-auto h-full flex justify-between items-center">
        {/* Logo here... */}
        <div className="relative w-28 h-28 invert">
          <Image src={"/Images/logo.png"} alt="" fill className="object-contain" />
        </div>

        {/* Navitems here.. */}
        <div className="md:flex hidden justify-center items-center gap-8">
          {Navitems.map((item, index) => {
            return index === 5 || index === 6 ? (
              <a
                className="font-inter font-normal text-white text-[18px]"
                href={item.Route}
              >
                {item.Name}
              </a>
            ) : (
              <Link
                href={item.Route}
                className="font-inter font-normal text-white text-[18px]"
              >
                {item.Name}
              </Link>
            );
          })}
        </div>

        {/* Hamburgur */}
        <div className="md:hidden inline-block w-[] h-[] relative text-base">
          <Hamburger
            toggled={isOpen} toggle={setIsOpen} color='#ffffff'>
          </Hamburger>
        </div >

      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        style={{
          width: "50%",
        }}
      >
        <div className="w-full h-full bg-[#0C0445] p-4">
          <div className="relative w-[] h-[]">
            <Image src={""} alt="" fill className="object-contain" />
          </div>

          {/* Navitems here.. */}
          <div className="flex justify-center items-start flex-col gap-6">
            {Navitems.map((item, index) => {
              return index === 5 || index === 6 ? (
                <a
                  className="font-inter font-normal text-white text-[18px]"
                  href={item.Route}
                >
                  {item.Name}
                </a>
              ) : (
                <Link
                  href={item.Route}
                  className="font-inter font-normal text-white text-[18px]"
                >
                  {item.Name}
                </Link>
              );
            })}
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
