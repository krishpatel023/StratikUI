"use client";

import type { IconProps } from "@/utils/constants";
import { useState } from "react";
import { Button, type ButtonProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export interface CopyButtonProps extends ButtonProps {
  text: string;
}

export function CopyButton({ text, className, ...props }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function copyToClipboard() {
    navigator.clipboard.writeText(text);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <Button
      className={twMerge(
        "group/copy pressed:animate-press hover:scale-110 text-foreground outline-none transition-all duration-300 relative",
        className as string,
      )}
      data-copied={copied}
      {...props}
      aria-label="Copy to clipboard"
      onPress={copyToClipboard}
    >
      <Icons.tick className="absolute w-5 h-5 group-data-[copied=true]/copy:text-green-500 text-transparent transition-all duration-300" />
      <Icons.copy className="absolute w-5 h-5 group-data-[copied=true]/copy:text-transparent transition-all duration-200" />
      <div className="min-w-5 min-h-5" />
    </Button>
  );
}

const Icons = {
  tick: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15" {...props}>
      <title>Tick Icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.707 3L5.5 12.207L.293 7L1 6.293l4.5 4.5l8.5-8.5l.707.707Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  copy: (props: IconProps) => (
    <svg height="200" width="200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Copy Icon</title>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z" />
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
      </g>
    </svg>
  ),
};
