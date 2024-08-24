"use client";

import { Checkbox as ReactAriaCheckbox } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export default function Checkbox({ children, className, ...props }) {
  return (
    <ReactAriaCheckbox
      className={twMerge("group text-foreground hover:cursor-pointer flex gap-2 ", className)}
      {...props}
    >
      <>
        <div className="mt-[0.125rem] min-w-5 max-w-5 min-h-5 max-h-5 flex items-start justify-center border border-outline rounded group-data-[selected=true]:bg-accent group-data-[focused=true]:ring-2 group-data-[focused=true]:ring-accent transition-all duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            aria-hidden="true"
            className="w-full h-full fill-none group-data-[selected=true]:fill-accent-foreground"
          >
            <path
              fillRule="evenodd"
              d="M13.488 3.43a.75.75 0 0 1 .081 1.058l-6 7a.75.75 0 0 1-1.1.042l-3.5-3.5A.75.75 0 0 1 4.03 6.97l2.928 2.927l5.473-6.385a.75.75 0 0 1 1.057-.081Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {children}
      </>
    </ReactAriaCheckbox>
  );
}
