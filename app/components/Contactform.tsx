"use client";
import axios from "axios";
import React, { FormEvent } from "react";
import { IconType } from "react-icons";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

type Icon = {
  icon: IconType;
  link: string;
};

const icons: Icon[] = [
  {
    icon: FaGithubSquare,
    link: "https://github.com/TilakRathoure",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/tilakrathoure",
  },
    {
    icon: FaXTwitter,
    link: "https://x.com/TilakRathoure",
  },
  {
    icon: FaSquareInstagram,
    link: "https://www.instagram.com/tilakrathoure",
  }
];

const Contactform = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setResult("Sending....");

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    formData.append("access_key", "5b8c24bd-b6d1-4c14-a790-9522ecf81f71");

    try {
      // Send the formData directly to the API
      const { data } = await axios.post(
        "https://api.web3forms.com/submit",
        formData,{
          headers:{
            "Content-Type":"multipart/form-data"
          }
        }
      );

      if (data.success) {
        setResult("Form Submitted Successfully");
        form.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.");
      console.error("Error submitting form:", error);
    }
  };

  interface Getin {
    title: string;
    name: string;
    type: string;
  }

  const getintouch: Getin[] = [
    { name: "name", title: "NAME", type: "text" },
    { name: "email", title: "EMAIL ADDRESS", type: "email" },
    { name: "message", title: "MESSAGE", type: "text" },
  ];

  return (
    <div id="contact" className="flex flex-col items-center w-full">
      <h1 className="relative text-xl my-8 mb-[70px]">
        <div className="absolute -right-[130px] sm:-right-[170px] top-[50px] flex gap-2">
          {icons.map((e, i) => (
            <a href={e.link} key={i} target="_blank">
            <e.icon size={30} />
            </a>
          ))}
        </div>
        Get In Touch
      </h1>
      <form  
        onSubmit={onSubmit}
        className="mt-4 relative flex flex-col gap-10 w-full max-w-[670px]"
      >
        {getintouch.map((e, i) => (
          <div className="relative" key={i}>
            <p className="absolute text-sm mb-3 -top-5 font-normal">
              {e.title}
            </p>

            <div className="text-black">

            {e.name !== "message" ? (
              <input
                className="border-b-[3px] p-1 rounded-lg border-black w-full text-base"
                name={e.name}
                type={e.type}
                required
              />
            ) : (
              <textarea
                name={e.name}
                className="border-b-[3px] rounded-lg p-1 border-black w-full text-base"
                rows={3}
                required
              />
            )}

            </div>


          </div>
        ))}

        <button
          className={`dark:border-white dark:border-[1px] absolute -bottom-[50px] right-0 bg-black text-white p-3`}
          type="submit"
        >
          Submit Form
        </button>
      </form>
      <span>{result}</span>
    </div>
  );
};

export default Contactform;
