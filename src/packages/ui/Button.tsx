import { MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  children: React.ReactNode;
  className?: string;
}
export function Button({ onClick, children, className }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "rounded border border-neutral-400 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-900 py-2 px-4 text-s_textPrimary h-max",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
