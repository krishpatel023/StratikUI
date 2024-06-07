"use client";

import { IconProps } from "@/utils/constants";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  state?: "default" | "error" | "success" | "disabled";
}
export function InputNumber({
  state = "default",
  className,
  onChange,
  ...props
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIncrement = () => {
    if (inputRef.current) {
      const currentValue = parseInt(inputRef.current.value, 10);
      if (!isNaN(currentValue)) {
        inputRef.current.value = String(currentValue + 1);
      }
    }
  };

  const handleDecrement = () => {
    if (inputRef.current) {
      const currentValue = parseInt(inputRef.current.value, 10);
      if (!isNaN(currentValue)) {
        inputRef.current.value = String(currentValue - 1);
      }
    }
  };

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div className="relative w-max h-max">
      <input
        ref={inputRef}
        type="number"
        {...(state === "disabled" && { disabled: true })}
        {...props}
        className={twMerge(
          "py-2 px-2 pr-20 border dark:border-neutral-700 bg-transparent rounded-md [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none focus:ring-2 placeholder:text-neutral-700 dark:placeholder:text-neutral-400 dark:text-white",
          state === "default" &&
            "focus:border-blue-500 focus:ring-blue-300 dark:focus:ring-blue-700",
          state === "error" &&
            "border-red-500 dark:border-red-500  focus:border-red-500 focus:ring-red-400/90",
          state === "success" &&
            "border-green-500 dark:border-green-500 focus:border-green-500 dark:focus:border-green-700 focus:ring-green-300/70",
          state === "disabled" && "disabled:cursor-not-allowed",
          className
        )}
      />
      <div className="flex gap-2 absolute inset-y-0 right-0 items-center px-2.5 dark:text-white ">
        <button
          onClick={handleDecrement}
          onFocus={handleFocus}
          className="p-1 shadow shadow-neutral-400 dark:shadow-neutral-600 rounded-full w-6 h-6 flex justify-center items-center text-center disabled:cursor-not-allowed"
          {...(state === "disabled" && { disabled: true })}
        >
          <Icons.minus className="h-full w-full" />
        </button>
        <button
          onClick={handleIncrement}
          onFocus={handleFocus}
          className="p-1 shadow shadow-neutral-400 dark:shadow-neutral-600 rounded-full w-6 h-6 flex justify-center items-center text-center disabled:cursor-not-allowed"
          {...(state === "disabled" && { disabled: true })}
        >
          <Icons.plus className="h-full w-full" />
        </button>
      </div>
    </div>
  );
}

const Icons = {
  minus: (props: IconProps) => (
    <svg
      height="200"
      width="200"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6.502 11h11v2h-11v-2Z" fill="currentColor" />
    </svg>
  ),
  plus: (props: IconProps) => (
    <svg
      height="200"
      width="200"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.25 3a.5.5 0 0 1 .5.5v3.75h3.75a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8.75v3.75a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5V8.75H3.5a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5h3.75V3.5a.5.5 0 0 1 .5-.5z"
        fill="currentColor"
      />
    </svg>
  ),
};
