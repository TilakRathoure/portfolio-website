import React from "react";
import Image from "next/image";
import bennettimg from "../../assets/Bennett.png";
import fatheragnel from "../../assets/Father_agnel.png";

const Education = () => {
  const educationDetails = [
    {
      img: bennettimg,
      alt: "bennett-university",
      duration: "2022-2026",
      institution: "Bennett University",
      description: "Bachelor of Technology in Computer Science Engineering |",
      additional: "8.65 CGPA",
    },
    {
      img: fatheragnel,
      alt: "father-agnel-school",
      duration: "2007-2021",
      institution: "Father Agnel School",
      description: "Senior Secondary (CBSE) |",
      additional: "X - 90.2% | XII - 88.2%",
    },
  ];

  return (
    <div id="education" className="mt-5" >
      <h1 className="text-[22px] py-3">Education</h1>
      <div className="flex flex-col gap-6">
        {educationDetails.map((edu, index) => (
          <div key={index} className="flex items-center gap-3">
            <Image
              src={edu.img}
              className="h-[45px] w-[37px]"
              alt={edu.alt}
            />
            <div className="relative w-full">
              <p className="absolute top-0 right-0 font-extralight">{edu.duration}</p>
              <p className="text-lg">{edu.institution}</p>
              <span className="font-extralight">{edu.description} </span>
              <span className="font-extralight">{edu.additional}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
