import React from "react";
import ComponentWrapper from "./ComponentWrapper";
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
    Name: "Brand",
    Route: "#Brand",
  },
  {
    Name: "Services",
    Route: "#Services",
  },
  {
    Name: "Projects",
    Route: "#Projects",
  },
  {
    Name: "Contact Us",
    Route: "#ContactUs",
  },
  {
    Name: "About Us",
    Route: "/about",
  },
  {
    Name: "Team",
    Route: "/team",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <ComponentWrapper styles="h-[80px] bg-[#121521]">
      <div className="w-full h-full flex justify-between items-center">
        {/* Logo here... */}
        <div className="relative w-28 h-28 invert">
          <Image src={"/Images/logo.png"} alt="" fill className="object-contain" />
        </div>

        {/* Navitems here.. */}
        <div className="md:flex hidden justify-center items-center gap-6">
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
        <div className="md:hidden inline-block w-[] h-[] relative ">
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
    </ComponentWrapper>
  );
}

export default Navbar;
