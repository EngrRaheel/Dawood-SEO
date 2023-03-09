// import React from "react";
import Image from "next/image";
import Link from "next/link";
// import component 👇
import Drawer from "react-modern-drawer";
import { Spin as Hamburger } from 'hamburger-react';// hamburger 

// import { Sling as Hamburger } from 'hamburger-react'
//import styles 👇
import "react-modern-drawer/dist/index.css";
// assets
import { IoMdArrowDropdown } from "react-icons/io";



import React, { useState } from "react";
// import { IoMdArrowDropdown } from "react-icons/io";

// const Navitems = [
//   {
//     Name: "Features",
//     Route: "#Features",
//   },
//   {
//     Name: "TikTok",
//     Route: "#TikTok",
//   },
//   {
//     Name: "Extension",
//     Route: "#Extension",
//   },
//   {
//     Name: "Brands",
//     Route: "#Brands",
//   },
//   {
//     Name: "Pricing",
//     Route: "#Pricing",
//   },
//   {
//     Name: "Blog",
//     Route: "/blog",
//   },
//   {
//     Name: "Community",
//     Route: "/community",
//   },
// ];

// function Navbar() {
//   const [openDropdown, setOpenDropdown] = useState(null);

//   function handleMouseEnter(index) {
//     setOpenDropdown(index);
//   }

//   function handleMouseLeave() {
//     setOpenDropdown(null);
//   }

//   return (
//     <div className="w-full h-[65px] bg-blue/20 font-Inter fixed top-0 z-10">
//       <div className="w-full max-w-[1172px] m-auto h-full flex justify-between items-center">
//         {/* Logo here... */}
//         <div className="relative w-28 h-28 invert">
//           <img src={"/Images/logo.png"} alt="" className="object-contain" />
//         </div>

//         {/* Navitems here.. */}
//         <div className="md:flex hidden justify-center items-center gap-8">
//           {Navitems.map((item, index) => {
//             return (
//               <div
//                 className="relative flex justify-center items-center font-inter font-normal text-white text-[18px]"
//                 key={index}
//                 onMouseEnter={() => handleMouseEnter(index)}
//                 onMouseLeave={() => handleMouseLeave()}
//               >
//                 {item.Name}
//                 {index === openDropdown && (
//                   <ul className="dropdown-menu text-white absolute top-5 left-0">
//                     <li>
//                       <a href="#">Submenu Item 1</a>
//                     </li>
//                     <li>
//                       <a href="#">Submenu Item 2</a>
//                     </li>
//                   </ul>
//                 )}
//                 {index === 0 || index === Navitems.length - 1 ? (
//                   <IoMdArrowDropdown size={30} />
//                 ) : null}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

// const dummyData = [{
//   title: "Servies",
//   url: "/services",
//   subs: [{ service: "Service1", subUrl: "/services/something" }, { service: "Service2", subUrl: "/services/something" }],

// },
// {
//   title: "Servies",
//   url: "/services",
// },
// {
//   title: "Servies",
//   url: "/services",
//   subs: [{ service: "Service1", subUrl: "/services/something" }, { service: "Service2", subUrl: "/services/something" }]
// },
// ]




const navItems = [
  {
    id: 1,
    Name: "Features",
    Route: "#Features",
    hasDropdown: true,
    dropdownItems: ["Service 1", "Service 2", "Service 3"]
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
    Name: "Brands",
    Route: "#Brands",
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
    dropdownItems: ["Service 1", "Service 2", "Service 3"]
  },
  {
    id: 7,
    Name: "Community",
    Route: "/community",
    hasDropdown: true,
    dropdownItems: ["Service 1", "Service 2", "Service 3"]
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="w-full h-[60px]  bg-blue/5 font-Roboto  font-bold fixed top-0 z-10">


      <div className="w-full  max-w-[1172px] m-auto h-full flex justify-between items-center">
        {/* Logo here... */}
        <div className="relative w-24 h-24 ">
          <Image src={"/Images/logo.png"} alt="" fill className="object-contain" />
        </div>

        {/* tester */}
        <div className="md:flex text-white hidden justify-center items-center font-Inter_2 gap-8 relative">
          {navItems.map((item, id) => (
            <Link href={item.Route} key={id}>
              <ul className="relative text-white main list-none flex justify-center items-start">
                <li key={item.id} className="cursor-pointer">{item.Name}</li>
                {item.id === 0 || item.id === navItems.length - 1 || item.id === navItems.length - 2 ? (
                  <IoMdArrowDropdown size={20} className="block" />
                ) : (
                  <IoMdArrowDropdown className="hidden" />
                )}
                {item.hasDropdown && (

                  <ul className="absolute top-[20px] left-[0px] item hidden p-2 rounded w-[100px] border-2 border-white border-solid">
                    {item.dropdownItems.map((service, index) => (
                      <li className="list-none cursor-pointer" key={index}>{service}</li>

                    ))}

                  </ul>
                )}

              </ul>
            </Link>
          ))}

        </div>



        {/* Navitems here.. */}
        {/* <div className="md:flex hidden justify-center items-center gap-8">
          {Navitems.map((item, index) => {
            return index === 0 || index === 5 || index === 6 ? (
              <a className="relative flex justify-center items-center font-inter font-normal text-white text-[18px]"
                href={item.Route} >
                {item.Name}
                <IoMdArrowDropdown size={30} />
              </a>
            ) : (
              <Link
                href={item.Route}
                className="font-inter font-normal text-white text-[18px]"
              >
                {item.Name}
                <div className="dropdown-menu absolute top-2 left-2 border border-solid border-red w-20 h-10 ">
                  <ul className=" text-white absolute top-5 left-0">
                    <li><a href="#">Submenu Item 1</a></li>
                    <li><a href="#">Submenu Item 2</a></li>
                  </ul>
                </div>

              </Link>
            );
          })}
        </div> */}

        {/* Hamburgur */}
        <div className="md:hidden inline-block w-[] h-[] relative text-base">
          <Hamburger
            toggled={isOpen} toggle={setIsOpen} color='#ffffff'>
          </Hamburger>
        </div >

      </div>


    </div>
    //     <div className="md:flex text-white hidden justify-center items-center font-Inter_2 gap-8 relative">
    //   {navItems.map((item, index) => (
    //     <Link href={item.Route}>
    //       <ul className="relative text-white main list-none">
    //         <li key={index} className="cursor-pointer">{item.Name}</li>
    //         {index === 0 || index === navItems.length - 1 || index === navItems.length - 2 ? (
    //           <IoMdArrowDropdown className="block" />
    //         ) : (
    //           <IoMdArrowDropdown className="hidden" />
    //         )}
    //         {item.hasDropdown && (
    //           <ul className="absolute top-[20px] left-[0px] item hidden p-2 rounded w-[100px] border-2 border-white border-solid">
    //             {item.dropdownItems.map((service, index) => (
    //               <li className="list-none cursor-pointer" key={index}>{service}</li>
    //             ))}
    //           </ul>
    //         )}
    //       </ul>
    //     </Link>
    //   ))}
    // </div>

  );
}

export default Navbar;
