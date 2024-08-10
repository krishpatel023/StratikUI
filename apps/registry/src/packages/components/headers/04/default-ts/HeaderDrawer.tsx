"use client";

import useClickOutside from "@registry/hooks/useClickOutside/01/default-ts/useClickOutside";
import { IconProps } from "@/utils/types";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

export interface HeaderDrawerProps {
  direction?: "left" | "right" | "top";
  cover?: "full" | "half";
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

export const HeaderDrawer = ({
  direction = "top",
  cover = "half",
  children,
  open,
  setOpen,
  className,
}: HeaderDrawerProps) => {
  const ref = useRef(null);
  useClickOutside(ref, () => setOpen(false));

  return (
    <div ref={ref}>
      <div
        className={twMerge(
          "flex flex-col justify-center items-center gap-4 border-b absolute z-50 transition-all duration-300 ease-in-out",

          // INITIAL STATES
          direction === "left" &&
            cover === "full" &&
            "w-full h-full top-0 -left-full",
          direction === "left" &&
            cover === "half" &&
            "w-80 h-full top-0 -left-80",
          direction === "right" &&
            cover === "full" &&
            "w-full h-full top-0 -right-full",
          direction === "right" &&
            cover === "half" &&
            "w-80 h-full top-0 -right-80",
          direction === "top" &&
            cover === "half" &&
            "w-full h-80 -top-80 left-0",
          direction === "top" &&
            cover === "full" &&
            "w-full h-full -top-full left-0",

          // OPEN STATES
          direction === "left" && open && "left-0",
          direction === "right" && open && "right-0",
          direction === "top" && open && "top-0",

          className
        )}
      >
        <div className="w-full flex justify-end px-4 py-4 absolute top-0 left-0">
          <button onClick={() => setOpen(false)}>
            <Cross className="h-6 w-6" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

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
