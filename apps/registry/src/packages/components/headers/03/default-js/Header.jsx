"use client";

import { ContainerGlassEffect } from "@registry/packages/primitives/containers/06/default-js/container";
import { useAnimate } from "framer-motion";
import { useState } from "react";
import { HeaderDrawer } from "./HeaderDrawer";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const tabs = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "Newsletter",
      href: "#",
    },
    {
      title: "Blogs",
      href: "#",
    },
    {
      title: "About",
      href: "#",
    },
  ];
  return (
    <>
      {/* ANIMATED ONE FOR LARGE SCREEN */}
      <ContainerGlassEffect className="w-[45rem] mx-auto hidden @md:flex h-16 px-10 border border-outline-secondary rounded-full  sticky top-10 items-center gap-16 justify-evenly">
        <a href="/" className="text-foreground">
          LOGO
        </a>
        <div className="h-full flex gap-6">
          {tabs.map((tab, i) => {
            return <AnimatedAnchor title={tab.title} key={i} />;
          })}
        </div>
        <AnimatedButton />
      </ContainerGlassEffect>
      {/* SMALL SCREEN */}
      <HeaderDrawer
        open={open}
        setOpen={setOpen}
        className="@md:hidden bg-background border-b text-foreground border-outline-secondary"
      >
        {tabs.map((tab, i) => (
          <a key={i} href="/" className="text-foreground hover:text-accent-secondary font-medium">
            {tab.title}
          </a>
        ))}
      </HeaderDrawer>
      <div className="@md:hidden w-full h-16  flex justify-between px-6 @md:px-10 items-center">
        <a href="/" className="text-foreground font-semibold text-lg bg-background">
          LOGO
        </a>

        <button
          className="w-10 h-10 @md:hidden hover:bg-secondary rounded flex justify-center items-center relative text-secondary-foreground"
          onClick={() => {
            setOpen(!open);
          }}
          type="button"
        >
          {open ? <Cross className="h-6 w-6" /> : <Bars className="h-6 w-6" />}
        </button>
      </div>
    </>
  );
};

const AnimatedAnchor = ({ title }) => {
  const [scope, animate] = useAnimate();

  const handleMouseEnter = () => {
    animate(
      scope.current,
      {
        y: ["0%", "-50%"],
      },
      {
        duration: 0.3,
        ease: "easeInOut",
        type: "spring",
        damping: 10,
      },
    );
  };

  const handleMouseLeave = () => {
    animate(
      scope.current,
      {
        y: ["-50%", "0%"],
      },
      {
        duration: 0.3,
        ease: "easeInOut",
        type: "spring",
        damping: 10,
      },
    );
  };
  return (
    <div
      className="h-full flex items-start justify-center overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-[200%] flex flex-col justify-center items-center" ref={scope}>
        <span className="h-full flex items-center">
          <a href="/" className=" text-primary-foreground">
            {title}
          </a>
        </span>

        <span className="h-full flex items-center">
          <a href="/" className=" text-accent-secondary">
            {title}
          </a>
        </span>
      </div>
    </div>
  );
};

const AnimatedButton = () => {
  const [scope, animate] = useAnimate();

  const handleMouseEnter = () => {
    animate(
      scope.current,
      {
        y: ["0%", "-30%"],
      },
      {
        duration: 0.5,
        ease: "easeInOut",
      },
    );
  };

  const handleMouseLeave = () => {
    animate(
      scope.current,
      {
        y: ["-30%", "0%"],
      },
      {
        duration: 0.4,
      },
    );
  };
  return (
    <button
      className="relative bg-foreground text-background w-full @md:w-auto py-2 @md:px-4 rounded-full flex justify-center items-center overflow-hidden group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      type="button"
    >
      <h1 className="text-background font-semibold z-20 group-hover:text-primary-foreground">Join the waitlist</h1>
      <div className="min-w-60 min-h-60 absolute top-full rounded-full bg-primary text-foreground" ref={scope} />
    </button>
  );
};

const Bars = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <title>Menu</title>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    />
  </svg>
);

const Cross = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
    <title>Close</title>
    <path
      fill="currentColor"
      d="M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781l1.44 1.439L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z"
    />
  </svg>
);
