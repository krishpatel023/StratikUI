"use client";

import { twMerge } from "tailwind-merge";

export function Banner({ open, type = "default", children, className }) {
  return (
    <div
      className={twMerge(
        "w-full transition-all duration-300 ease-in-out",
        type === "default" && (open ? "" : "absolute -top-full"),
        type === "sticky" && (open ? "sticky top-0" : "absolute -top-full"),
        type === "fixed" && (open ? "fixed top-0" : "absolute -top-full"),
        className,
      )}
    >
      {children}
    </div>
  );
}
