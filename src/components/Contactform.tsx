"use client";

import axios from "axios";
import React, { FormEvent } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SectionReveal from "./SectionReveal";
import { ContactField, ContactIcon } from "@/types";

const icons: ContactIcon[] = [
  {
    icon: FaGithub,
    link: "https://github.com/TilakRathoure",
    label: "GitHub",
    color: "text-foreground",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/tilakrathoure",
    label: "LinkedIn",
    color: "text-[#0A66C2]",
  },
  {
    icon: FaXTwitter,
    link: "https://x.com/TilakRathoure",
    label: "X",
    color: "text-foreground",
  },
];

const Contactform = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setResult("Sending....");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setResult("Missing form access key. Please try again later.");
      return;
    }

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    formData.append("access_key", accessKey);

    try {
      const { data } = await axios.post(
        "https://api.web3forms.com/submit",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
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

  const fields: ContactField[] = [
    { name: "name", title: "Name", type: "text" },
    { name: "email", title: "Email address", type: "email" },
    { name: "message", title: "Message", type: "text" },
  ];

  return (
    <SectionReveal
      id="contact"
      className="section-block flex flex-col items-center text-center"
    >
      <h2 className="section-title">Get in touch</h2>
      <p className="section-support mx-auto">
        Have a role, collaboration, or question? Send a note.
      </p>

      <div className="flex justify-center gap-4 mb-10">
        {icons.map((item) => (
          <a
            href={item.link}
            key={item.label}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className={`${item.color} transition-opacity hover:opacity-75`}
          >
            <item.icon size={22} />
          </a>
        ))}
      </div>

      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-8 w-full max-w-[560px] text-left"
      >
        {fields.map((field) => (
          <label key={field.name} className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.16em] text-muted">
              {field.title}
            </span>
            {field.name !== "message" ? (
              <input
                className="bg-transparent border-b border-border p-2 text-base text-foreground placeholder:text-muted/50 focus:border-accent transition-colors"
                name={field.name}
                type={field.type}
                required
              />
            ) : (
              <textarea
                name={field.name}
                className="bg-transparent border-b border-border p-2 text-base text-foreground placeholder:text-muted/50 focus:border-accent transition-colors resize-none"
                rows={3}
                required
              />
            )}
          </label>
        ))}

        <div className="flex items-center justify-center gap-4 pt-2">
          <button
            className="bg-accent text-background px-6 py-2.5 text-base font-normal transition-opacity hover:opacity-85"
            type="submit"
          >
            Submit
          </button>
          {result && (
            <span className="text-sm text-muted font-light">{result}</span>
          )}
        </div>
      </form>
    </SectionReveal>
  );
};

export default Contactform;
