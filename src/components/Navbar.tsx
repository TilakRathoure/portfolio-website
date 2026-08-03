"use client";

import { useContext, useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { FiMoon, FiSun } from "react-icons/fi";
import Contextfirst from "@/Theme";
import { NavItem } from "@/types";

const navItems: NavItem[] = [
  { title: "Home", href: "#home" },
  { title: "Experience", href: "#experience" },
  { title: "Publications", href: "#publications" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Education", href: "#education" },
];

const Navbar = () => {
  const { mode, Setmode } = useContext(Contextfirst)!;
  const [side, Setside] = useState<boolean>(false);
  const [scroll, Setscroll] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => Setscroll(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = side ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [side]);

  return (
    <nav>
      <div
        className={`fixed inset-x-0 top-0 z-50 h-[5.5rem] transition-[background-color,backdrop-filter,border-color] duration-300 ${
          scroll
            ? "bg-background/70 backdrop-blur-lg border-b border-border"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-5 sm:px-10 lg:px-16 xl:px-28">
          <a
            href="#home"
            className="font-ovo text-3xl tracking-tight shrink-0"
          >
            Tilak
            <span className="text-accent">.</span>
          </a>

          <ul className="hidden md:flex items-center gap-1 lg:gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="px-2.5 lg:px-3 py-1.5 text-base font-normal text-foreground/85 transition-colors hover:text-accent"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              aria-label="Toggle theme"
              className="cursor-pointer p-1 text-foreground transition-opacity hover:opacity-70"
              onClick={() =>
                Setmode((prev) => (prev === "light" ? "dark" : "light"))
              }
            >
              {mode === "light" ? <FiMoon size={22} /> : <FiSun size={22} />}
            </button>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => Setside(true)}
              className="md:hidden cursor-pointer p-1"
            >
              <RxHamburgerMenu size={26} />
            </button>

            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1 text-base font-normal border-b border-foreground/40 pb-0.5 transition-colors hover:border-accent hover:text-accent"
            >
              Contact
              <MdArrowOutward size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* spacer for fixed nav */}
      <div className="h-[5.5rem]" />

      {side && (
        <>
          <button
            type="button"
            aria-label="Close menu overlay"
            className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm md:hidden"
            onClick={() => Setside(false)}
          />
          <ul className="fixed right-0 top-0 z-[60] flex h-full w-[min(80vw,20rem)] flex-col gap-5 bg-background px-8 pt-24 shadow-xl md:hidden animate-fade-rise">
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => Setside(false)}
              className="absolute top-7 right-5 cursor-pointer"
            >
              <RxCross2 size={28} />
            </button>
            {navItems.map((item) => (
              <li key={item.href} onClick={() => Setside(false)}>
                <a href={item.href} className="text-xl underline-hover">
                  {item.title}
                </a>
              </li>
            ))}
            <li onClick={() => Setside(false)}>
              <a href="#contact" className="text-xl underline-hover">
                Contact
              </a>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
};

export default Navbar;
