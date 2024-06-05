"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

interface SwitchProps {
  initialValue: boolean;
  onChange?: (value: boolean) => void;
  className?: string;
}

const Switch: React.FC<SwitchProps> = ({
  initialValue,
  onChange,
  className,
}) => {
  const [isOn, setIsOn] = useState<boolean>(initialValue);

  const handleToggle = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <button
      onClick={handleToggle}
      className={twMerge(
        "w-12 h-6 rounded-full overflow-hidden bg-neutral-300 dark:bg-neutral-800 transition-all duration-500 flex justify-start",
        isOn && "bg-blue-500 justify-end dark:bg-blue-700",
        className
      )}
    >
      <div
        className={twMerge(
          "w-1/2 h-full rounded-full  bg-white border-2 border-blue-500 dark:bg-neutral-950 dark:border-blue-700",
          isOn && ""
        )}
      />
    </button>
  );
};

export default Switch;
