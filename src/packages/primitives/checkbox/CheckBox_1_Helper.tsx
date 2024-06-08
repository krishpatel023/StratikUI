"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  className?: string;
}
export const CheckBox = ({
  name,
  className,
  onChange,
  ...props
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleClick = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);

    // Create a synthetic event to pass to the onChange handler
    if (onChange) {
      const syntheticEvent = {
        target: { checked: newCheckedState },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(syntheticEvent);
    }
  };

  return (
    <>
      <input
        type="checkbox"
        id="checkbox"
        name={name}
        className="hidden"
        checked={isChecked}
        aria-label="hidden"
        readOnly
        {...props}
      />
      <button
        className={twMerge(
          "w-5 h-5 rounded-full border border-neutral-500 dark:border-neutral-700 flex justify-center items-center focus:ring-2  focus:ring-blue-600 dark:focus:ring-blue-800",
          className
        )}
        onClick={handleClick}
        aria-label="checkbox"
      >
        <div
          className={twMerge(
            "min-w-3 min-h-3 rounded-full bg-blue-600 dark:bg-blue-800",
            isChecked ? "block" : "hidden"
          )}
        />
      </button>
    </>
  );
};

export function Demo() {
  return (
    <div className="w-full flex justify-center">
      <CheckBox />
    </div>
  );
}
