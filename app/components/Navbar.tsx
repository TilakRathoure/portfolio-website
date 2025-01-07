'use client';

import Image from "next/image";
import { useState } from "react";
import { MdArrowOutward, MdDarkMode } from "react-icons/md";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import image1 from "../../assets/header-bg-color.png";

interface header {
  title: string;
  href: string;
}

const Header: header[] = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#home" },
  { title: "Home", href: "#home" },
];

const Navbar = () => {


    const [side,Setside]=useState<boolean>(false);


  return (
    <nav>
      <div className="relative flex justify-between md:justify-around items-center py-8 z-60">
        <Image
          src={image1}
          alt="bg-color"
          className="fixed -z-10 translate-y-[-30%]"
        />

        <div className="relative text-3xl text-center w-[25%] font-medium">
          Tilak
          <span className="absolute bottom-0 text-5xl text-red-600">.</span>
        </div>

        <ul className="hidden bg-white sm:flex justify-between items-center shadow-md rounded-3xl px-4 py-2">
          {Header.map((e, i) => (
            <a key={i} href={e.href}>
              <li className="mx-2 text-lg">{e.title}</li>
            </a>
          ))}
        </ul>



        <div className="flex justify-center items-center gap-5 sm:gap-1 md:gap-5 w-[25%]">
        <MdDarkMode size={30} className="cursor-pointer" />
        <RxHamburgerMenu onClick={()=>Setside(prev=>!prev)} size={30} className="sm:hidden cursor-pointer" />
        <div className="hidden bg-white sm:flex items-center justify-center shadow-md rounded-3xl px-4 cursor-pointer text-lg py-2 ">
          Contact
          <MdArrowOutward />
        </div>
        </div>
      </div>

      <ul className={`fixed ${side?"right-0" : "-right-[100%]"} top-0 w-[75vw] h-[100vh] sm:hidden z-50 bg-white p-12 shadow-lg transition-all duration-500`}>

        <RxCross2  onClick={() => Setside(prev=>!prev)}
          className="absolute top-4 right-9 cursor-pointer" size={40}
        />

        {Header.map((e, i) => (
          <li key={i} className="m-4 cursor-pointer w-1/2 text-center">
            <a href={e.href} className="text-xl">
              {e.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
