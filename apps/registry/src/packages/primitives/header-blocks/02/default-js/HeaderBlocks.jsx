"use client";

import { useEffect, useState } from "react";
import { Button } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function Header({ className, children, ...props }) {
  return (
    <header className={twMerge("h-full", className)} {...props}>
      {children}
    </header>
  );
}

export function HeaderItem({
  open = false,
  onChange,
  className,
  children,
  onPress,
  onHoverStart,
  onHoverEnd,
  onFocus,
  onBlur,
  ...props
}) {
  const [internalOpen, setInternalOpen] = useState(open);

  useEffect(() => {
    onChange && onChange(internalOpen);
  }, [internalOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Button
      className={twMerge(
        "relative flex flex-col justify-center text-center items-center gap-4 group/headerItem h-full text-foreground",
        className
      )}
      {...props}
      data-open={internalOpen}
      onPress={(e) => {
        setInternalOpen(!open);
        onPress && onPress(e);
      }}
      onHoverStart={(e) => {
        onHoverStart && onHoverStart(e);
        setInternalOpen(true);
      }}
      onHoverEnd={(e) => {
        onHoverEnd && onHoverEnd(e);
        setInternalOpen(false);
      }}
      onFocus={(e) => {
        onFocus && onFocus(e);
        setInternalOpen(true);
      }}
      onBlur={(e) => {
        onBlur && onBlur(e);
        setInternalOpen(false);
      }}
    >
      {children}
    </Button>
  );
}

export function HeaderDropdown({ className, children, ...props }) {
  return (
    <div className="w-max transition-all duration-300 ease-linear group-data-[open=false]/headerItem:hidden absolute top-full">
      <div
        className={twMerge(
          "bg-primary text-primary-foreground p-4 rounded border border-outline-secondary mt-2",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}
