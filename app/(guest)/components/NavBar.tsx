"use client";

import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import colors from "@/lib/constants/colors";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { useState } from "react";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Project",
    route: "/projects",
  },
  {
    label: "Contact",
    route: "/contact",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full h-15 shadow-[#00000010] bg-[#1A0B2E]">
      <nav className="flex items-center justify-between h-full w-full md:w-2/3 mx-auto px-4         md:px-8 lg:px-16">
        <Logo />
        {/* Desktop Menu */}
        <div className="w-2/3 hidden md:block">
          <ul className="flex items-center justify-between w-full">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.route}
                style={{ color: colors.white }}
                className={`font-semibold text-[16px]`}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>

        {/* Mobile toggle icon */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="block md:hidden"
        >
          {isOpen ? (
            <XIcon size={30} color={colors.white} />
          ) : (
            <ListIcon size={30} color={colors.white} />
          )}
        </button>
      </nav>
      {/* mobile menu */}

      <div
        className={`absolute top-20 left-0 z-1000 w-full bg-[#1A0B2E] md:hidden
        transition-all duration-300 ease-in-out
        ${
        isOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-2 opacity-0 invisible"
        }`}
        >
        <ul className="flex flex-col gap-5 px-6 py-6">
          {links.map((link, key) => (
            <li key={key}>
              <Link
                href={link.route}
                style={{ color: colors.white }}
                className="block font-semibold text-[18px]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
