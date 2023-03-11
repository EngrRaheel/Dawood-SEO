// import React from "react";
import Image from "next/image";
import Link from "next/link";
// import component 👇
import Drawer from "react-modern-drawer";
import { Spin as Hamburger } from 'hamburger-react';// hamburger 
import { RxCross2 } from "react-icons/rx";
// import { Sling as Hamburger } from 'hamburger-react'
//import styles 👇
import "react-modern-drawer/dist/index.css";
// assets
import { IoMdArrowDropdown } from "react-icons/io";



import React, { useState } from "react";


const navItems = [
  {
    id: 1,
    Name: "Features",
    Route: "#Features",
    hasDropdown: true,
    selected: true,
    // dropdownItems: ["Daily Ideas", "My Coach", "Keyword Tools", "Competitors Tools", "Channel Audit Tools", "All Feature"]
    dropdownItems: [
      {
        name: "Daily Ideas",
        path: "/daily-ideas"
      },
      {
        name: "My Coach",
        path: "/my-coach"
      },
      {
        name: "My Coach",
        path: "/my-coach"
      },
      {
        name: "My Coach",
        path: "/my-coach"
      },
      {
        name: "My Coach",
        path: "/my-coach"
      },
      {
        name: "My Coach",
        path: "/my-coach"
      },
    ]
  },
  {
    id: 2,
    Name: "TikTok",
    Route: "#TikTok",
  },
  {
    id: 3,
    Name: "Extension",
    Route: "#Extension",
  },
  {
    id: 4,
    Name: "Team",
    Route: "/team",
  },
  {
    id: 5,
    Name: "Pricing",
    Route: "#Pricing",
  },
  {
    id: 6,
    Name: "Blog",
    Route: "/blog",
    hasDropdown: true,
    selected: true,
    dropdownItems: [
      {
        name: "Views",
        path: "/views"
      },
      {
        name: "Monetization",
        path: "/monetization"
      },
      {
        name: "Analytics",
        path: "/analytics"
      },
      {
        name: "All Tips and Insights",
        path: "/tipandinsights"
      },

    ]

  },
  {
    id: 7,
    Name: "Community",
    Route: "/community",
    hasDropdown: true,
    selected: true,
    dropdownItems: [
      {
        name: "Daily Ideas",
        path: "/daily-ideas"
      },
      {
        name: "My Coach",
        path: "/my-coach"
      },
      {
        name: "My Coach",
        path: "/my-coach"
      },
      {
        name: "My Coach",
        path: "/my-coach"
      },
      {
        name: "My Coach",
        path: "/my-coach"
      },
      {
        name: "My Coach",
        path: "/my-coach"
      },
    ]
  },
];

function Navbar({ bg_color, position }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className={`w-full h-[60px] px-4 lg:px-10 font-Roboto  font-bold ${position} top-0 z-10 ${bg_color}`}>
    <div className="w-full max-w-[1172px] m-auto min-h-full flex items-center justify-between">
        {/* Logo here... */}
        <div className="relative w-24 h-24 ">
          <Image src={"/Images/logo.png"} alt="" fill className="object-contain" />
        </div>

        {/* tester */}
        <div className="lg:flex text-white hidden justify-center items-center font-OpenSans text-sm gap-8 relative">
          {navItems.map((item, index) => (
            <Link href={item.Route} key={index}>
              <div className="relative text-white main list-none flex justify-center items-start">
                <div key={index} className="cursor-pointer">{item.Name}</div>
                {(index === 0 || index === navItems.length - 1 || index === navItems.length - 2) && <IoMdArrowDropdown size={20} className="block" />}
                {item.hasDropdown && (

                  <div className="hidden text-sm font-Halvic absolute top-[24px] left-[0px]  p-2 w-[180px] bg-[#2A2F46]/60 shadow-2xl rounded-lg border-2 border-[#2A2F46] border-solid  item">
                    {item.dropdownItems.map((service, index) => (
                      <Link href={`${service.path}`} className="list-none mb-2 cursor-pointer glow_text text-white/70" key={index}>{service.name}</Link>

                    ))}

                  </div>
                )}
              </div>

            </Link>
          ))}

        </div>




        {/* Hamburgur */}
        <div className="lg:hidden ">
          <Hamburger
            toggled={isOpen} toggle={setIsOpen} color='#ffffff' size={25}>
          </Hamburger>

          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="left"
            className="drawer"
          >
            <div className="w-full overflow-auto flex flex-col">
              {/* =========>top bar */}
              <div className="w-full flex justify-between items-center px-2 ">
                <div className="relative w-20 h-20 ">
                  <Image src={"/Images/logo.png"} alt="" fill className="object-contain" />
                </div>
                <RxCross2 onClick={toggleDrawer} className="text-white" size={30} />
              </div>
              {navItems.map((item, index) => (
                <Link href={item.Route} key={index} className="w-full flex flex-col justify-start items-start gap-4 px-4">
                  <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-full  text-white flex justify-start items-start ">
                      <div key={index} className="cursor-pointer w-full flex justify-between items-center">
                        <p>{item.Name}</p>
                        {(index === 0 || index === navItems.length - 1 || index === navItems.length - 2) && <IoMdArrowDropdown size={25} className="" />}

                      </div>
                      

                    </div>
                    {/* =====> sub items */}
                    <div className="w-full  mt-3">
                      {item.hasDropdown &&

                        <div className="w-full flex gap-2 flex-col justify-start items-start text-white pl-8 mb-4 ">
                          {item.dropdownItems.map((item, index) => {
                            return <Link key={index} href="#">{item.name}</Link>
                          })}
                        </div>
                      }
                    </div>
                  </div>

                </Link>
              ))}
            </div>
          </Drawer>
        </div >

      </div>
    </div>


  );
}

export default Navbar;
