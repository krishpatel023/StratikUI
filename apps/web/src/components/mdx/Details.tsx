"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const Details = ({ children }: { children: React.ReactNode }) => {
  const [provider, setProvider] = useState<string>("default");
  return (
    <div
      className="group/details w-full"
      data-provider={
        provider.includes("_") ? provider.replace("_", "") : provider
      }
    >
      {children}
    </div>
  );
};

export const Provider = ({
  tag,
  children,
}: {
  tag: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-8",
        tag === "default" &&
          "hidden group-data-[provider=default]/details:flex flex-col gap-6",
        tag === "react_aria" &&
          "hidden group-data-[provider='reactaria']/details:flex flex-col gap-6"
      )}
    >
      {children}
    </div>
  );
};
