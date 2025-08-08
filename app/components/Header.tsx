import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import image1 from "../../assets/1692212262791-removebg-preview-removebg-preview.png";
import { HiDownload } from "react-icons/hi";
import { useContext } from "react";
import Contextfirst from "../Theme";

const Header = () => {

  const {mode}=useContext(Contextfirst)!;

  return (
    <div>
      <div
        id="home"
        className={`z-20 flex justify-center gap-3 py-6 items-center lg:gap-6 ${mode!=="dark"?"mt-[15vh]":""}`}
      >
        <div className="max-w-[525px]">
          <p className="text-2xl sm:text-3xl mb-[2px] font-light text-nowrap">
            Hi, I&apos;m Tilak Rathoure
          </p>
          <p id="about" className=" font-outfit font-extralight text-lg">21 | Full-stack Developer
          </p>
        </div>
        <Image
          src={image1}
          alt=""
          className="rounded-full w-[120px] sm:max-h-[140px] sm:min-w-[140px] sm:w-[140px]"
        />
      </div>

      <div>
        <h1 className="font-normal text-xl">About</h1>
        <p className="font-extralight text-lg">
          Third-year B.Tech CSE (AI) student and <span className=" font-medium">Full-stack Developer</span>, building dynamic web apps with AI-powered features.
        </p>
      </div>

      <div className="flex justify-center p-7 gap-6">
        <a href="#contact">
          <span className={`${mode==="dark"?  "text-black bg-white" :"bg-black text-white" } flex items-center justify-center shadow-md rounded-3xl px-4 cursor-pointer text-lg py-2 text-nowrap`}>
            connect with me
            <MdArrowOutward />
          </span>
        </a>
        <a target="_blank" href="https://drive.google.com/file/d/1P_V9VYhL0YXHcXd5RCjhlY94pvPXFFkT/view?usp=drive_link">
          <span className={`${mode==="dark"? "bg-black" :"bg-white" } flex items-center justify-center shadow-md rounded-3xl px-4 cursor-pointer text-lg py-2 text-nowrap`}>
            my resume
            <HiDownload />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
