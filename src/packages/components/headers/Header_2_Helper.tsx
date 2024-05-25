"use client";

import { IconProps } from "@/utils/constants";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { HeaderDrawer } from "./Header_Drawer_Helper";
import { NavbarGroup } from "@/packages/primitives/header_blocks/Header_Continuous_Dropdown_Animated_Helper";

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  const navHeadings = [
    {
      title: "Home",
      link: "#",
      content: null,
    },
    {
      title: "Pricing",
      link: "#",
      content: null,
    },
    {
      title: "Products",
      content: (
        <div>
          <h4 className="font-semibold text-sm mb-4">Categories</h4>
          <ul className="text-sm text-neutral-950 dark:text-neutral-300 flex flex-col gap-2">
            <li className="hover:text-blue-500 hover:cursor-pointer">
              Electronics
            </li>
            <li className="hover:text-blue-500 hover:cursor-pointer">
              Clothing
            </li>
            <li className="hover:text-blue-500 hover:cursor-pointer">Books</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Services",
      content: (
        <div>
          <h4 className="font-semibold text-sm mb-4">Our Services</h4>
          <ul className="text-sm text-neutral-950 dark:text-neutral-300 flex flex-col gap-2">
            <li className="hover:text-blue-500 hover:cursor-pointer">
              Web Development
            </li>
            <li className="hover:text-blue-500 hover:cursor-pointer">
              Mobile App Development
            </li>
            <li className="hover:text-blue-500 hover:cursor-pointer">
              IT Consulting
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "About",
      content: (
        <div>
          <h4 className="font-semibold text-sm mb-4">About Our Company</h4>
          <p className="text-sm text-neutral-950 dark:text-neutral-300">
            We are a leading provider of innovative solutions for businesses of
            all sizes. Our team of experts has years of experience in nothing{" "}
            {":)"}
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <HeaderDrawer
        open={open}
        setOpen={setOpen}
        className="bg-white border-b dark:bg-neutral-950 dark:text-white dark:border-neutral-200"
      >
        {navHeadings.map((heading) => (
          <a
            key={heading.title}
            href="#"
            className="text-s_textPrimary hover:text-s_accent font-medium"
          >
            {heading.title}
          </a>
        ))}
      </HeaderDrawer>
      <div className="w-full h-16  flex justify-between px-6 @md:px-10 items-center bg-neutral-50/20 dark:bg-neutral-950">
        <a href="#" className="text-s_textPrimary font-semibold text-lg">
          LOGO
        </a>
        <NavbarGroup headings={navHeadings} className="hidden @md:block" />
        <GradientBackground>
          <button className="relative z-10 bg-white text-black dark:bg-black dark:text-white py-2 @md:px-4 rounded-lg hidden @md:block">
            Get Started
          </button>
        </GradientBackground>
        <button
          className="w-10 h-10 @md:hidden hover:bg-s_secondary rounded flex justify-center items-center relative text-s_textPrimary"
          onClick={() => {
            setOpen(true);
          }}
        >
          <Bars className="h-6 w-6" />
        </button>
      </div>
    </>
  );
};

function GradientBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="relative group/gradient_bg w-max">
      {children}
      <div
        className={twMerge(
          "absolute z-0 -inset-0.5 bg-gradient-to-r from-blue-600 to-red-600 rounded-lg blur opacity-75 group-hover/gradient_bg:opacity-100 duration-200 transition-all",
          className
        )}
      ></div>
    </div>
  );
}

const Bars = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    ></path>
  </svg>
);
