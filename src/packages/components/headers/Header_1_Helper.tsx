"use client";

import { IconProps } from "@/utils/constants";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { HeaderDrawer } from "./Header_Drawer_Helper";
import { log } from "console";

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
        <NavbarGroup headings={navHeadings} />
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

const NavbarGroup = ({
  headings,
}: {
  headings: { title: string; content: React.ReactNode | null; link?: string }[];
}) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const nullRef = useRef(null);
  const nullArray = new Array(headings.length).fill(nullRef);
  const dropdownRefs = useRef<(HTMLElement | null)[]>(nullArray);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [shiftX, setShiftX] = useState(0);

  const changePosition = () => {
    if (
      open &&
      activeIndex &&
      containerRef &&
      containerRef.current &&
      dropdownRefs.current[activeIndex]
    ) {
      const outerBoxLength = containerRef.current.getBoundingClientRect();
      const innerBoxLength =
        dropdownRefs.current[activeIndex]?.getBoundingClientRect();
      if (!innerBoxLength) return;

      setShiftX(
        innerBoxLength.left + innerBoxLength.width / 2 - outerBoxLength.left
      );
    }
  };

  useEffect(() => {
    changePosition();
  }, [activeIndex]);

  return (
    <div
      ref={containerRef}
      className="relative h-full transition-all duration-300 hidden @md:block"
      onMouseLeave={() => setActiveIndex(null)}
    >
      {/* NAV LINKS */}
      <div className="h-full flex justify-center items-center gap-4">
        {headings.map(({ title, link }, index) => (
          <a
            key={index}
            {...(link ? { href: link } : {})}
            onMouseEnter={() => {
              setActiveIndex(index);
              setOpen(true);
            }}
            ref={(ref) => (dropdownRefs.current[index] = ref)}
            className="text-black dark:text-white hover:text-blue-500 font-medium"
          >
            {title}
          </a>
        ))}
      </div>
      {/* ANIMATED MENU */}
      {open && activeIndex && headings[activeIndex]?.content && shiftX !== 0 ? (
        <div
          className="absolute top-full left-0"
          style={{ transform: `translateX(${shiftX}px)` }}
        >
          <NavbarDropDown content={headings[activeIndex]?.content} />
        </div>
      ) : null}
    </div>
  );
};

const NavbarDropDown = ({ content }: { content: React.ReactNode }) => {
  return (
    <>
      {content && (
        <div
          className="px-6 py-4 rounded-lg bg-neutral-100 text-black border-neutral-400 dark:bg-neutral-950 dark:text-white border dark:border-neutral-700"
          style={{ transform: `translateX(-50%)` }}
        >
          {content}
        </div>
      )}
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
