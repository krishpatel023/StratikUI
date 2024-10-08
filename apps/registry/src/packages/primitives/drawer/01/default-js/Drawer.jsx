"use client";

import useClickOutside from "@registry/packages/hooks/useClickOutside/01/default-js/useClickOutside";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

export function Drawer({ active, setActive, direction = "left", children, className }) {
  const ref = useRef(null);
  useClickOutside(ref, () => setActive(false));

  return (
    <>
      <div
        ref={ref}
        className={twMerge(
          "z-[9999] fixed h-full min-w-80 bg-background shadow shadow-outline transition-all duration-300 ease-in-out px-4 overflow-y-auto hidden data-[open=true]:block",
          direction === "left" && "data-[open=true]:left-0 -left-full top-0",
          direction === "right" && "data-[open=true]:right-0 top-0 -right-full",
          className,
        )}
        data-open={active}
      >
        <div className="w-full h-16 flex justify-end items-center">
          <button type="button" onClick={() => setActive(false)}>
            <Icon.Close className="w-6 h-6 text-foreground" />
          </button>
        </div>
        {children}
      </div>
    </>
  );
}

const Icon = {
  Close: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <title>Close</title>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ),
};
