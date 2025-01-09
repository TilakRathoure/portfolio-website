import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import image1 from "../../assets/1692212262791-removebg-preview-removebg-preview.png";

const Header = () => {
  return (
    <div>
      <div className="z-20 flex justify-center gap-3 py-6 items-center mt-[15vh]">
        <div className="max-w-[525px]">
          <p className="text-3xl font-light text-nowrap">Hi, I&apos;m Tilak Rathoure</p>
          <p className=" font-outfit font-extralight text-lg">
            A passionate full-stack developer creating dynamic and meaningful
            applications.
          </p>
        </div>
        <Image src={image1} alt="" className="rounded-full max-h-[140px] min-w-[140px] w-[140px]" />
      </div>

      <div>
        <h1 className="font-normal text-xl">About</h1>
        <p className="font-extralight text-xl">
        I&apos;m Tilak Rathoure, a third-year B.Tech student in Computer Science Engineering specializing in Artificial Intelligence. As a <span className="font-normal">Full-stack Developer</span>, I create dynamic and scalable web applications, leveraging <span className="font-normal">AI</span> to enhance functionality and user experience.
        </p>
      </div>

      <div className="flex justify-center p-7 gap-6">
      <span className="flex bg-black text-white items-center justify-center shadow-md rounded-3xl px-4 cursor-pointer text-lg py-2 w-[] ">
        connect with me
        <MdArrowOutward />
      </span>
      <span className=" bg-white flex items-center justify-center shadow-md rounded-3xl px-4 cursor-pointer text-lg py-2 w-[] ">
        my resume
        <MdArrowOutward />
      </span>

      </div>
    </div>
  );
};

export default Header;
