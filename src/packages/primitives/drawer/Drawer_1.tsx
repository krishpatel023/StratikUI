"use client";

import useClickOutside from "@/hooks/ClickOutside";
import { Button } from "@/packages/ui/Button";
import { IconProps } from "@/utils/constants";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export function Drawer({
  active,
  setActive,
  direction = "left",
  children,
  className,
}: {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  direction?: "left" | "right";
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  useClickOutside(ref, () => setActive(false));

  return (
    <>
      <div
        ref={ref}
        className={twMerge(
          "z-[9999] absolute h-full min-w-80 bg-background shadow shadow-outline transition-all duration-300 ease-in-out px-4 overflow-y-auto",
          direction === "left" && "data-[open=true]:left-0 -left-full top-0",
          direction === "right" && "data-[open=true]:right-0 top-0 -right-full",
          className
        )}
        data-open={active}
      >
        <div className="w-full h-16 flex justify-end items-center">
          <button onClick={() => setActive(false)}>
            <Icon.Close className="w-6 h-6 text-foreground" />
          </button>
        </div>
        {children}
      </div>
    </>
  );
}

const Icon = {
  Close: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  ),
};

export function DrawerImplementation() {
  const [openLeft, setOpenLeft] = useState<boolean>(false);
  const [openRight, setOpenRight] = useState<boolean>(false);

  return (
    <div className="relative -my-10 w-full min-h-[35rem] flex justify-center items-center gap-10 overflow-x-hidden z-0 ">
      <Drawer active={openLeft} setActive={setOpenLeft}>
        <DummyBG />
      </Drawer>
      <Drawer active={openRight} setActive={setOpenRight} direction="right">
        <DummyBG />
      </Drawer>
      <Button onClick={() => setOpenLeft(true)}>Left Sidebar</Button>
      <Button onClick={() => setOpenRight(true)}>Right Sidebar</Button>
    </div>
  );
}

function DummyBG() {
  return (
    <div className="h-[calc(100%-4rem)] w-full rounded-lg border dark:border-neutral-700 border-neutral-300 bg-white dark:bg-neutral-900 p-2 mx-auto">
      <div className="min-h-full min-w-full rounded-[inherit] border dark:border-neutral-700 border-neutral-300 bg-[linear-gradient(45deg,rgba(0,0,0,.05)_7.14%,transparent_7.14%,transparent_50%,rgba(0,0,0,.05)_50%,rgba(0,0,0,.05)_57.14%,transparent_57.14%,transparent);] dark:bg-[linear-gradient(45deg,rgba(0,0,0,.4)_7.14%,transparent_7.14%,transparent_50%,rgba(0,0,0,.4)_50%,rgba(0,0,0,.4)_57.14%,transparent_57.14%,transparent);] bg-[length:10px_10px]"></div>
    </div>
  );
}
