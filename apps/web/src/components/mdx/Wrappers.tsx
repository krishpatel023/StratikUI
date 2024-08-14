"use client";

import React, { useState } from "react";
import { HeaderToggle } from "./HeaderToggle";
import { twMerge } from "tailwind-merge";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="group/wrapper w-full flex flex-col gap-4 mb-20 mt-8">
      {children}
    </div>
  );
};

export const WrapperToggle = ({
  children,
  viewHeader = true,
}: {
  children: React.ReactNode;
  viewHeader?: boolean;
}) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div
      className="group/wrapperToggle w-full flex flex-col gap-4"
      data-mode={active ? "implementation" : "preview"}
    >
      {viewHeader && <HeaderToggle getState={(val) => setActive(val)} />}
      {children}
    </div>
  );
};

export const Implementation = ({
  children,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <div className="w-full flex-col gap-8 group-data-[mode=implementation]/wrapperToggle:flex hidden">
      {children}
    </div>
  );
};

export const Preview = ({
  children,
  id = "Preview",
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <div
      id={id}
      className="w-full flex-col gap-10 group-data-[mode=preview]/wrapperToggle:block hidden"
    >
      {children}
    </div>
  );
};

export const PARTITION = ({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={twMerge("min-w-full min-h-10", className)}>{children}</div>
  );
};
