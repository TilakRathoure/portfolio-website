"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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
  { title: "Home1", href: "#home" },
];

const Navbar = () => {
  const [side, Setside] = useState<boolean>(false);
  const [scroll, Setscroll] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        Setscroll(true);
      } else {
        Setscroll(false);
      }
    });
  }, []);

  return (
    <nav>
      <Image
        src={image1}
        alt="bg-color"
        className="fixed -z-20 h-[40vh] -translate-y-[250px]"
      />
      <div
        className={`fixed w-full z-50 top-0 ${
          scroll ? "bg-white bg-opacity-50 backdrop-blur-lg" : ""
        } left-0 h-[15vh] flex justify-between md:justify-around items-center py-8 z-60`}
      >
        <div className="relative text-3xl text-center w-[25%] font-medium">
          Tilak
          <span className="absolute bottom-0 text-5xl text-red-600">.</span>
        </div>

        <ul className="hidden bg-white sm:flex justify-between items-center shadow-md rounded-3xl">
          {Header.map((e, i) => (
            <a href={e.href}
              key={i}
              className={`px-4 py-2 text-lg ${
                i !== Header.length - 1
                  ? "border-r-[3px] border-r-gray-100"
                  : "pr-6"
              } ${i==0? "pl-6":""}`}
            >
              <li>{e.title}</li>
            </a>
          ))}
        </ul>

        <div className="flex justify-center items-center gap-5 sm:gap-1 md:gap-5 w-[25%]">
          <MdDarkMode size={30} className="cursor-pointer" />
          <RxHamburgerMenu
            onClick={() => Setside((prev) => !prev)}
            size={30}
            className="sm:hidden cursor-pointer"
          />
          <div className="hidden bg-white sm:flex items-center justify-center shadow-md rounded-3xl px-4 cursor-pointer text-lg py-2 ">
            Contact
            <MdArrowOutward />
          </div>
        </div>
      </div>

      <ul
        className={`fixed ${
          side ? "right-0" : "-right-[100%]"
        } top-0 w-[75vw] h-[100vh] sm:hidden z-50 bg-white p-12 shadow-lg transition-all duration-500`}
      >
        <RxCross2
          onClick={() => Setside((prev) => !prev)}
          className="absolute top-4 right-9 cursor-pointer"
          size={40}
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
