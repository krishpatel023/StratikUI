"use client";

import { Logo } from "./Hero_5_Helper";

import useMousePosition from "@/packages/primitives/containers/Container_3";
import { useEffect, useRef, useState } from "react";
import {
  Button as ReactAriaButton,
  ButtonProps as ReactAriaButtonProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function BorderAnimationButton({
  children,
  className,
}: ReactAriaButtonProps) {
  const { x, y } = useMousePosition();
  const [relativeX, setRelativeX] = useState(0);

  const containerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();

      const dist = x - rect.left;
      if (y > rect.top && y < rect.bottom && dist > 0 && dist < rect.width)
        setRelativeX(dist);
    }
  }, [x]);

  return (
    <ReactAriaButton
      className="group relative  rounded-full text-foreground overflow-hidden p-0.5"
      ref={containerRef}
    >
      <div
        className={twMerge(
          "z-10 bg-background relative rounded-[inherit]",
          className as string
        )}
      >
        <>{children}</>
      </div>
      <div
        className="z-0 m-1 mx-auto my-auto w-full h-full  absolute top-0 -left-1/2   bg-gradient-to-r from-transparent via-accent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500"
        style={{ translate: relativeX ? `${relativeX}px` : "50%" }}
      />
    </ReactAriaButton>
  );
}

export function HeroSection() {
  return (
    <div className="w-full min-h-screen overflow-hidden flex flex-col @md:flex-row gap-2 @md:gap-0 justify-center items-center bg-background  relative">
      <div className="w-full my-24 flex flex-col justify-center items-center text-center gap-8 z-10">
        <BorderAnimationButton className="text-primary-foreground flex gap-2 rounded-full @lg:px-6 px-4 py-1 ">
          New Layouts Weekly
        </BorderAnimationButton>
        <h1 className="text-5xl font-bold  w-[90%] @lg:w-1/2 text-primary-foreground">
          The best library for Tailwind Components.
        </h1>
        <span className="text-lg font-medium w-[30rem] max-w-[90%] text-secondary-foreground">
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Developer Friendly.
        </span>
        <div className="flex gap-8">
          <button className="px-4 h-10 rounded-md bg-accent hover:bg-accent-secondary text-accent-foreground font-semibold">
            Create Free Account
          </button>
          <button className="text-primary-foreground">View Plans</button>
        </div>
      </div>
      <LogoBackground />
    </div>
  );
}

const LogoBackground = () => {
  return (
    <div className="@lg:absolute top-0 left-0 w-full h-full flex @lg:justify-center gap-4 @lg:gap-[35%] items-center flex-col @lg:flex-row @lg:items-end text-s_textComplementary">
      <div className="grid grid-cols-4 @lg:grid-cols-3 gap-12 @lg:gap-6">
        <div className="@lg:col-span-3 ">
          <Logo.airbnb className="w-12 h-12 @lg:w-24 @lg:h-24" />
        </div>
        <div className="@lg:col-span-3 @lg:col-start-2">
          <Logo.loom className="w-12 h-12 @lg:w-24 @lg:h-24" />
        </div>{" "}
        <div className="@lg:col-span-1">
          <Logo.spotify className="w-12 h-12 @lg:w-24 @lg:h-24" />
        </div>{" "}
        <div className="@lg:col-span-1 @lg:col-start-3">
          <Logo.dribbble className="w-12 h-12 @lg:w-24 @lg:h-24" />
        </div>
      </div>
      <div className="grid grid-cols-4 @lg:grid-cols-3 gap-12 @lg:gap-6">
        <div className="@lg:col-span-1 @lg:col-start-3">
          <Logo.podcast className="w-12 h-12 @lg:w-24 @lg:h-24" />
        </div>
        <div className="@lg:col-span-3 @lg:col-start-2">
          <Logo.trello className="w-12 h-12 @lg:w-24 @lg:h-24" />
        </div>{" "}
        <div className="@lg:col-span-1">
          <Logo.uber className="w-12 h-12 @lg:w-24 @lg:h-24 rounded-md" />
        </div>{" "}
        <div className="@lg:col-span-1 @lg:col-start-3">
          <Logo.dailymotion className="w-12 h-12 @lg:w-24 @lg:h-24 rounded-md" />
        </div>
      </div>
    </div>
  );
};