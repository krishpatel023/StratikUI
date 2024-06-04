"use client";

// Usage example in a component:
import React from "react";
import { useOS } from "../../code/useOS";

const OSComponent: React.FC = () => {
  const os = useOS();

  return (
    <div className="w-full h-80 flex flex-col justify-center items-center dark:text-white">
      <p>Your operating system is: {os}</p>
    </div>
  );
};

export default OSComponent;
