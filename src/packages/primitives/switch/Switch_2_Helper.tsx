"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

interface SwitchProps {
  value: boolean;
  toggleValue: () => void;
  className?: string;
}

const Switch: React.FC<SwitchProps> = ({ value, className, toggleValue }) => {
  return (
    <button
      onClick={toggleValue}
      className={twMerge(
        "w-12 h-6 rounded-full overflow-hidden bg-neutral-300 dark:bg-neutral-800 transition-all duration-500 flex justify-start",
        value && "bg-blue-500 justify-end dark:bg-blue-700",
        className
      )}
    >
      <div
        className={twMerge(
          "w-1/2 h-full rounded-full  bg-white border-2 border-blue-500 dark:bg-neutral-950 dark:border-blue-700",
          value && ""
        )}
      />
    </button>
  );
};

export default Switch;

export function Demo() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="w-full h-40 flex justify-center items-center">
      <Switch value={isOn} toggleValue={() => setIsOn(!isOn)} />
    </div>
  );
}
