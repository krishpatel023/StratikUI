"use client";

import type React from "react";
import { type ButtonHTMLAttributes, type DetailedHTMLProps, useRef } from "react";
import { twMerge } from "tailwind-merge";

import type { IconProps } from "@registry/utils/types";
import { createRoot } from "react-dom/client";

export interface CircularAnimationProps {
  width: number;
  height: number;
  top: number;
  left: number;
  className?: string;
  variant: ButtonProps["variant"];
}

export function CircularAnimation({ width, height, top, left, className, variant }: CircularAnimationProps) {
  return (
    <div
      className={twMerge(
        "absolute rounded-full animate-circleGrow",
        variant === "primary" && "bg-secondary",
        variant === "secondary" && "bg-primary",
        variant === "destructive" && "bg-error-secondary",
        variant === "outline" && "bg-secondary",
        variant === "ghost" && "bg-primary",
        variant === "accent" && "bg-accent-secondary",
        variant === "complementary" && "bg-primary-foreground",
        className,
      )}
      style={{ width, height, top, left }}
    />
  );
}

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  animationClassName?: string;
  isProcessing?: boolean;
  isDisabled?: boolean;
  variant?: "primary" | "secondary" | "destructive" | "outline" | "ghost" | "accent" | "complementary";
}

export function Button({
  children,
  className,
  animationClassName,
  onClick,
  isProcessing = false,
  variant = "primary",
  isDisabled,
  ...props
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    addElementToDOM({ x, y });
  };

  const addElementToDOM = ({ x, y }: { x: number; y: number }) => {
    if (buttonRef.current && !isProcessing) {
      const buttonWidth = buttonRef.current.offsetWidth;
      const buttonHeight = buttonRef.current.offsetHeight;
      const maxRadius = Math.max(buttonWidth, buttonHeight);

      const dimensions = {
        width: maxRadius * 2,
        height: maxRadius * 2,
        top: y - maxRadius,
        left: x - maxRadius,
      };

      // Addition of the animation container to the button
      const animationContainer = document.createElement("div");
      buttonRef.current.appendChild(animationContainer);
      const root = createRoot(animationContainer);
      root.render(<CircularAnimation {...dimensions} className={animationClassName} variant={variant} />);

      // Removal of the animation container after 400ms
      setTimeout(() => {
        if (buttonRef.current && animationContainer) buttonRef.current.removeChild(animationContainer);
      }, 400);
    }
  };

  return (
    <button
      className={twMerge(
        "relative focus:outline-none overflow-hidden :scale-[0.98] p-2 rounded text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50",
        variant === "primary" && "bg-primary  border border-outline text-primary-foreground",
        variant === "secondary" && "bg-secondary  border border-outline text-secondary-foreground",
        variant === "destructive" && "bg-error text-error-foreground",
        variant === "outline" && "border border-outline-secondary text-foreground bg-transparent",
        variant === "ghost" && " text-foreground",
        variant === "accent" && "bg-accent text-accent-foreground",
        variant === "complementary" && "bg-foreground text-primary border border-secondary-foreground font-medium",
        isProcessing && "cursor-not-allowed",
        className as string,
      )}
      ref={buttonRef}
      onClick={handleClick}
      disabled={isDisabled}
      {...props}
    >
      {isProcessing ? (
        <Loader className="animate-spin w-6 h-6 mx-auto" />
      ) : (
        <span className="relative z-50">{children}</span>
      )}
    </button>
  );
}

const Loader = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <title>Loader</title>
      <path fill="currentColor" d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3Z" />
    </svg>
  );
};
