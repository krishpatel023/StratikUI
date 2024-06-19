"use client";

import useScrollbar from "@/packages/hooks/useScrollbar/useScrollbar";
import { ContainerGlassEffect } from "@/packages/primitives/containers/Container_6";
import { NavbarGroup } from "@/packages/primitives/header_blocks/Header_Continuous_Dropdown_Animated_Helper";
import { IconProps } from "@/utils/constants";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { HeaderDrawer } from "./Header_Drawer_Helper";

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

  const elem = document.getElementById("targetElem");
  const { directionY, scrollPosition } = useScrollbar("targetElem");

  return (
    <>
      {/* ANIMATED ONE FOR LARGE SCREEN */}
      <ContainerGlassEffect
        className={twMerge(
          "w-[45rem] mx-auto hidden @md:flex h-16 px-10 border border-neutral-400 dark:border-neutral-700 rounded-full  sticky  items-center gap-16 justify-evenly transition-all duration-500 ease-linear",
          directionY === false || scrollPosition.y === 0
            ? "top-10"
            : "-top-full"
        )}
      >
        <a href="#" className="text-s_textPrimary">
          LOGO
        </a>
        <NavbarGroup headings={navHeadings} />
        <GradientBackground>
          <button className="relative z-10 bg-white text-black dark:bg-black dark:text-white py-2 @md:px-4 rounded-lg hidden @md:block">
            Get Started
          </button>
        </GradientBackground>
      </ContainerGlassEffect>
      {/* SMALL SCREEN */}
      <HeaderDrawer
        open={open}
        setOpen={setOpen}
        className="@md:hidden bg-white border-b dark:bg-neutral-950 dark:text-white dark:border-neutral-200"
      >
        {navHeadings.map((tab, i) => (
          <a
            key={i}
            href="#"
            className="text-s_textPrimary hover:text-s_accent font-medium"
          >
            {tab.title}
          </a>
        ))}
      </HeaderDrawer>
      <div className="@md:hidden w-full h-16  flex justify-between px-6 @md:px-10 items-center">
        <a
          href="#"
          className="text-s_textPrimary font-semibold text-lg bg-s_background"
        >
          LOGO
        </a>

        <button
          className="w-10 h-10 @md:hidden hover:bg-s_secondary rounded flex justify-center items-center relative text-s_textPrimary"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? <Cross className="h-6 w-6" /> : <Bars className="h-6 w-6" />}
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

const Cross = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="currentColor"
      d="M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781l1.44 1.439L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z"
    ></path>
  </svg>
);
