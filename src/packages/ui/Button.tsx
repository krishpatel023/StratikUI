import { MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  onClick?: () => void; // Change this line
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export function Button({
  onClick,
  children,
  className,
  disabled,
}: ButtonProps) {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (onClick) onClick(); // Call onClick only if it's defined
  };

  return (
    <button
      className={twMerge(
        "rounded border border-neutral-400 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-900 py-2 px-4 text-s_textPrimary h-max hover:cursor-pointer",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
