"use client";
import { Text } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function GradientText({ children, className, ...props }) {
  return (
    <Text
      className={twMerge(
        "bg-gradient-to-tr inline-block text-transparent bg-clip-text from-neutral-600 to-neutral-300",
        className,
      )}
      {...props}
    >
      {children}
    </Text>
  );
}
