import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import image1 from "../../assets/1692212262791-removebg-preview-removebg-preview.png";
import { HiDownload } from "react-icons/hi";

const Header = () => {
  return (
    <div>
      <div
        id="home"
        className="z-20 flex justify-center gap-3 py-6 items-center mt-[15vh]"
      >
        <div className="max-w-[525px]">
          <p className="text-2xl sm:text-3xl font-light text-nowrap">
            Hi, I&apos;m Tilak Rathoure
          </p>
          <p id="about" className=" font-outfit font-extralight text-lg">
            A passionate full-stack developer creating dynamic and meaningful
            applications.
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
        <p className="font-extralight text-xl">
          I&apos;m Tilak Rathoure, a third-year B.Tech student in Computer
          Science Engineering specializing in Artificial Intelligence. As a{" "}
          <span className="font-normal">Full-stack Developer</span>, I create
          dynamic and scalable web applications, leveraging{" "}
          <span className="font-normal">AI</span> to enhance functionality and
          user experience.
        </p>
      </div>

      <div className="flex justify-center p-7 gap-6">
        <a href="#contact">
          <span className="flex bg-black text-white items-center justify-center shadow-md rounded-3xl px-4 cursor-pointer text-lg py-2 text-nowrap">
            connect with me
            <MdArrowOutward />
          </span>
        </a>
        <a target="_blank" href="https://drive.google.com/file/d/1STLCrOAIpk96kzMoHscCJ82bgyPeI_Ca/view?usp=drive_link">
          <span className=" bg-white flex items-center justify-center shadow-md rounded-3xl px-4 cursor-pointer text-lg py-2 text-nowrap">
            my resume
            <HiDownload />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
