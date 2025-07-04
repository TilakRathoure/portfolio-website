import React from "react";

const Footer = () => {
  return <div className="relative flex flex-col sm:flex-row sm:justify-between  w-full h-[25vh] text-white p-10 lg:px-[70px] bg-black text-xl font-light">

    <h1 className="text-nowrap">Tilak Rathoure</h1>
    <h1>tilakrathoure@gmail.com</h1>
    <div className="absolute bottom-5 right-10 lg:right-[70px] font-thin">made with nextjs</div>

  </div>;
};

export default Footer;
