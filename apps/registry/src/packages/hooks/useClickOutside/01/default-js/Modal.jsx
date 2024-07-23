// !code-highlight: [18-23]
"use client";

import useClickOutside from "@/packages/hooks/useClickOutside/01/default-js/useClickOutside";
import { ContainerGlassEffect } from "@/packages/primitives/containers/06/default-js/container";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

export function Modal({
  children,
  isOpen,
  setOpen,
  position = "center center",
  className,
  isBGBlur = true,
  isDismissable = true,
}) {
  const ref = useRef(null);
  useClickOutside(ref, () => {
    if (isDismissable) {
      setOpen(false);
    }
  });

  return (
    <ContainerGlassEffect
      className={twMerge(
        "w-full h-full fixed top-0 left-0 z-50",
        !isBGBlur &&
          "bg-transparent dark:bg-transparent backdrop-blur-none supports-[backdrop-filter]:bg-transparent dark:supports-[backdrop-filter]:bg-transparent",
        !isOpen && "hidden"
      )}
    >
      <div
        ref={ref}
        className={twMerge(
          "hidden absolute rounded-md px-6 py-6 border border-outline-secondary bg-primary text-foreground",
          isOpen && "flex flex-col",
          position === "center center" &&
            "top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",
          position === "center top" && "top-6 left-1/2 -translate-x-1/2",
          position === "center bottom" && "bottom-6 left-1/2 -translate-x-1/2",
          position === "left top" && "top-6 left-6",
          position === "left center" && "top-1/2 left-6 -translate-y-1/2",
          position === "left bottom" && "bottom-6 left-6",
          position === "right top" && "top-6 right-6",
          position === "right bottom" && "bottom-6 right-6",
          position === "right center" && "top-1/2 right-6 -translate-y-1/2",
          className
        )}
      >
        {children}
      </div>
    </ContainerGlassEffect>
  );
}
