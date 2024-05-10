"use client";

import useClickOutside from "@/hooks/ClickOutside";
import { Button } from "@/packages/ui/Button";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export function Modal({
  children,
  active,
  setActive,
  position = "center",
  className,
}: {
  children: React.ReactNode;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  position?: "center" | "top" | "bottom";
  className?: string;
}) {
  const ref = useRef(null);
  useClickOutside(ref, () => setActive(false));
  return (
    <div
      ref={ref}
      className={twMerge(
        "hidden absolute rounded-md px-6 py-6 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-black dark:text-white",
        active && "flex flex-col",
        position === "center" &&
          "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        position === "top" && "top-6 left-1/2 -translate-x-1/2",
        position === "bottom" && "bottom-6 left-1/2 -translate-x-1/2",
        className
      )}
    >
      {children}
    </div>
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
