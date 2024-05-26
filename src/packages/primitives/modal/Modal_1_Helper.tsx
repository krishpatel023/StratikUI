"use client";

import useClickOutside from "@/hooks/ClickOutside";
import { Button } from "@/packages/ui/Button";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ContainerGlassEffect } from "../containers/Container_6";
import useDisableScroll from "@/packages/hooks/code/useDisableScroll";

export function Modal({
  children,
  active,
  setActive,
  position = "center",
  className,
  blurBg = true,
}: {
  children: React.ReactNode;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  position?: "center" | "top" | "bottom";
  className?: string;
  blurBg?: boolean;
}) {
  const ref = useRef(null);
  useClickOutside(ref, () => setActive(false));

  useDisableScroll(active);

  return (
    <>
      {active && (
        <ContainerGlassEffect
          className={twMerge(
            "w-full h-full fixed top-0 left-0 z-50 flex justify-center",
            !blurBg &&
              "bg-transparent dark:bg-transparent backdrop-blur-none supports-[backdrop-filter]:bg-transparent dark:supports-[backdrop-filter]:bg-transparent"
          )}
        >
          <div
            ref={ref}
            className={twMerge(
              "hidden absolute rounded-md px-6 py-6 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-black dark:text-white",
              active && "flex flex-col",
              position === "center" && "top-1/2 -translate-y-1/2",
              position === "top" && "top-6",
              position === "bottom" && "bottom-6",
              className
            )}
          >
            {children}
          </div>
        </ContainerGlassEffect>
      )}
    </>
  );
}

export const ModalImplementation = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div className="min-h-[35rem] flex justify-center items-center">
      <Modal active={active} setActive={setActive} className="min-w-[30rem]">
        <h1>
          This is a modal that can be used in multiple places in your website.
          Also you can click outside to close it. Do you agree to style it the
          best?
        </h1>
        <span className="mt-4">
          <button
            onClick={() => setActive(false)}
            className="bg-s_foreground rounded-md text-s_textComplementary px-4 py-1 font-semibold"
          >
            Agree
          </button>
        </span>
      </Modal>
      <Button onClick={() => setActive(true)}>Open Modal</Button>
    </div>
  );
};
