"use client";

import { Button } from "@/packages/ui/Button";
import useDelay from "./useDelay";
import { useRef, useState } from "react";
import useClickOutside from "@/hooks/ClickOutside";
import { ContainerGlassEffect } from "@/packages/primitives/containers/Container_6";
import { twMerge } from "tailwind-merge";

function Modal({
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

export function Helper() {
  const { isDelaying, delay, clearDelay } = useDelay();

  const [active, setActive] = useState<boolean>(false);

  // This way you can use it with async-await or .then
  const handleDelay = async () => {
    await delay(2000);
    setActive(true);
  };

  // This way you can use it without async-await or .then
  const handleDelayWithAction = () => {
    delay(2000, () => {
      setActive(true);
    });
  };

  const handleClearDelay = () => {
    clearDelay();
  };

  return (
    <div className="min-h-[35rem] flex flex-col justify-center items-center gap-6 text-center">
      <Modal active={active} setActive={setActive} className="max-w-[30rem]">
        <h1>This is the delayed action of your click.</h1>
        <span className="mt-4">
          <button
            onClick={() => setActive(false)}
            className="bg-s_foreground rounded-md text-s_textComplementary px-4 py-1 font-semibold"
          >
            Close
          </button>
        </span>
      </Modal>
      <h1 className="text-2xl text-black dark:text-white">
        {isDelaying ? "Delaying" : "Click to see the delayed action"}
      </h1>
      <div className="flex gap-4 flex-col @md:flex-row">
        <Button onClick={handleDelay}>Delay with Async</Button>
        <Button onClick={handleDelayWithAction}>Delay without Async</Button>
        <Button onClick={handleClearDelay}>Clear Delay</Button>
      </div>
    </div>
  );
}
