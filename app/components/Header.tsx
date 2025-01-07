import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import image1 from "../../assets/profile-img.png";

const Header = () => {
  return (
    <div>
      <div className="flex py-6 items-center">
        <div className="w-[70%] max-h-">
          <p className="text-3xl font-light">Hi, I'm Tilak Rathoure</p>
          <p className=" font-outfit font-extralight text-lg">
            A passionate full-stack developer creating dynamic and meaningful
            applications.
          </p>
        </div>
        <Image src={image1} alt="" className="w-[30%] max-h-[155px] object-contain" />
      </div>

      <div>
        <h1 className="font-normal text-xl">About</h1>
        <p className="font-extralight text-xl">
        I’m Tilak Rathoure, a third-year B.Tech student in Computer Science Engineering specializing in Artificial Intelligence. As a <span className="font-normal">Full-stack Developer</span>, I create dynamic and scalable web applications, leveraging <span className="font-normal">AI</span> to enhance functionality and user experience.
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
