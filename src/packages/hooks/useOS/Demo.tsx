"use client";

// Usage example in a component:
import React from "react";
import { useOS } from "./useOS";

export const Demo: React.FC = () => {
  const os = useOS();

  return (
    <div className="w-full h-80 flex flex-col justify-center items-center dark:text-white">
      <p>Your operating system is: {os}</p>
    </div>
  );
};
