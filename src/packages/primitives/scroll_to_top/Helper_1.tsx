"use client";

import useScrollTo from "@/packages/hooks/code/useScrollTo";
import { IconProps } from "@/utils/constants";
import { twMerge } from "tailwind-merge";

export const ScrollToTop = ({ className }: { className?: string }) => {
  const { isVisible, scroll } = useScrollTo();

  const handleScrollToTop = () => {
    scroll(null);
  };

  return (
    <button
      onClick={handleScrollToTop}
      className={twMerge(
        "p-2 absolute right-4 bottom-4 text-black dark:text-white bg-neutral-200 dark:bg-neutral-800 rounded-lg border border-neutral-400 dark:border-neutral-700",
        isVisible ? "" : "hidden",
        className
      )}
    >
      <UpIcon className="w-6 h-6" />
    </button>
  );
};

export const UpIcon = (props: IconProps) => (
  <svg
    height="200"
    width="200"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06L5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
