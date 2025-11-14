import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import Image1 from "../../assets/WhatsApp_Image_2025-08-24_at_20.30.36_88736715-removebg-preview.png";
import { HiDownload } from "react-icons/hi";
import Image2 from "@/public/dp/WhatsApp_Image_2025-08-26_at_23.22.03_a6b5095d-removebg-preview.png";
import { useContext, useState } from "react";
import Contextfirst from "../Theme";

const Header = () => {
  const { image, setImage } = useContext(Contextfirst)!;
  const [hovered, setHovered] =useState<boolean>(false);

  return (
    <div>
      <div
        id="home"
        className={`z-20 flex justify-center gap-3 py-6 items-center lg:gap-6 mt-[15vh] dark:mt-0`}
      >
        <div className="max-w-[525px]">
          <p className="text-2xl sm:text-3xl mb-[2px] font-light text-nowrap">
            Hi, I&apos;m Tilak Rathoure
          </p>
          <p id="about" className=" font-outfit font-extralight text-lg">
            21 | Full-stack Developer
          </p>
        </div>
        <Image
          src={hovered ? (image ? Image2 : Image1) : image ? Image1 : Image2}
          alt="profile"
          onClick={() => setImage((prev: boolean) => !prev)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="rounded-full w-[120px] sm:max-h-[140px] sm:min-w-[140px] sm:w-[140px] border-2 object-cover cursor-pointer"
        />
      </div>

      <div>
        <h1 className="font-normal text-xl">About</h1>
        <p className="font-extralight text-lg">
          B.Tech CSE (AI) student and{" "}
          <span className=" font-medium">Full-stack Developer</span>, building
          dynamic web apps with AI-powered features.
        </p>
      </div>

      <div className="flex justify-center p-7 gap-6">
        <a href="#contact">
          <span
            className={`dark:bg-black dark:text-white dark:shadow-gray-600 shadow-md flex items-center justify-center  rounded-3xl px-4 cursor-pointer text-lg py-2 text-nowrap`}
          >
            connect with me
            <MdArrowOutward />
          </span>
        </a>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1dlthciRokC17NXVYCYdOZpa3y7cail4V/view?usp=sharing"
        >
          <span
            className={`bg-black text-white dark:text-black dark:bg-white flex items-center justify-center shadow-md rounded-3xl px-4 cursor-pointer text-lg py-2 text-nowrap`}
          >
            my resume
            <HiDownload />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
