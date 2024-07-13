"use client";

import { Warning } from "@/packages/ui/Warning";
import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react";
import { Button, ButtonProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export function Header({ className, children, ...props }: HeaderProps) {
  return (
    <header
      className={twMerge(
        "h-16 border border-neutral-400 dark:border-neutral-800 px-10 rounded-lg",
        className
      )}
      {...props}
    >
      {children}
    </header>
  );
}

export interface HeaderItemProps extends ButtonProps {
  className?: string;
  open?: boolean;
  onChange?: (open: boolean) => void;
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
}: HeaderItemProps) {
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

export interface HeaderDropdownProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export function HeaderDropdown({
  className,
  children,
  ...props
}: HeaderDropdownProps) {
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

export function HeaderBlocksImplementation() {
  return (
    <div className="w-full min-h-[25rem] flex flex-col justify-center items-center">
      <Warning message="This component is made for computers and not for mobile views. Please view on a larger screen to see its functionality." />
      <Header className="flex justify-center items-center gap-4">
        <HeaderItem className="hover:text-accent">Home</HeaderItem>
        <HeaderItem className="hover:text-accent">Pricing</HeaderItem>
        <HeaderItem className="hover:text-accent">
          Products
          <HeaderDropdown className="flex flex-col items-start">
            <span>View Best Sellers</span>
            <span>Electronics</span>
            <span>Clothing</span>
            <span>Books</span>
          </HeaderDropdown>
        </HeaderItem>
        <HeaderItem className="hover:text-accent">
          Services
          <HeaderDropdown className="flex flex-col items-start">
            <span>Web Design</span>
            <span>Web Development</span>
            <span>Mobile Development</span>
            <span>Other Services</span>
          </HeaderDropdown>
        </HeaderItem>
        <HeaderItem className="hover:text-accent">
          About
          <HeaderDropdown className="flex flex-col items-start">
            <span>About Us</span>
            <span>Careers</span>
            <span>Contact Us</span>
          </HeaderDropdown>
        </HeaderItem>
      </Header>
    </div>
  );
}
