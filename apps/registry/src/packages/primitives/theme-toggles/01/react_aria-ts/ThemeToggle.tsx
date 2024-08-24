"use client";

import type { IconProps } from "@registry/utils/types";
import { useState } from "react";
import { Button, type ButtonProps, Group } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export interface ToggleButtonProps extends ButtonProps {
  isActive?: boolean;
}

export function ToggleButton({ isActive, className, children, ...props }: ToggleButtonProps) {
  return (
    <Button
      className={twMerge(
        "h-8 w-8 rounded-full flex justify-center items-center hover:bg-secondary text-primary-foreground transition-all duration-300 ease-linear pressed:scale-[0.90] ",
        isActive &&
          "border-2 border-blue-600 bg-blue-100 hover:bg-blue-100 dark:bg-blue-600/40 dark:hover:bg-blue-600/40 dark:border-blue-600 focus:outline-none",
        className as string,
      )}
      data-focused={isActive}
      {...props}
    >
      {children}
    </Button>
  );
}

export function ThemeToggle({
  defaultTheme = "light",
}: {
  defaultTheme?: "light" | "dark" | "system";
}) {
  const [theme, setTheme] = useState<"light" | "dark" | "system">(defaultTheme);

  return (
    <Group className="flex gap-3">
      <ToggleButton isActive={theme === "light"} onPress={() => setTheme("light")}>
        <Icon.light className="w-5 h-5" />
      </ToggleButton>
      <ToggleButton isActive={theme === "dark"} onPress={() => setTheme("dark")}>
        <Icon.dark className="w-5 h-5" />
      </ToggleButton>
      <ToggleButton isActive={theme === "system"} onPress={() => setTheme("system")}>
        <Icon.system className="w-5 h-5" />
      </ToggleButton>
    </Group>
  );
}

const Icon = {
  light: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 21 21" {...props}>
      <title>Light theme icon</title>
      <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M10.5 14.5c2.219 0 4-1.763 4-3.982a4.003 4.003 0 0 0-4-4.018c-2.219 0-4 1.781-4 4c0 2.219 1.781 4 4 4zM4.136 4.136L5.55 5.55m9.9 9.9l1.414 1.414M1.5 10.5h2m14 0h2M4.135 16.863L5.55 15.45m9.899-9.9l1.414-1.415M10.5 19.5v-2m0-14v-2"
          opacity=".3"
        />
        <g transform="translate(-210 -1)">
          <path d="M220.5 2.5v2m6.5.5l-1.5 1.5" />
          <circle cx="220.5" cy="11.5" r="4" />
          <path d="m214 5l1.5 1.5m5 14v-2m6.5-.5l-1.5-1.5M214 18l1.5-1.5m-4-5h2m14 0h2" />
        </g>
      </g>
    </svg>
  ),
  dark: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56" {...props}>
      <title>Dark theme icon</title>
      <path
        fill="currentColor"
        d="M41.242 36.121c-12.937 0-20.953-7.781-20.953-20.273c0-3.563.61-6.703 1.477-8.391c.351-.68.398-1.008.398-1.476c0-.774-.703-1.688-1.687-1.688c-.188 0-.633.07-1.313.328c-8.648 3.516-14.742 12.656-14.742 22.5c0 14.227 10.313 24.586 24.539 24.586c10.219 0 18.469-5.344 22.29-14.11c.257-.609.327-1.124.327-1.382c0-.961-.843-1.617-1.547-1.617c-.398 0-.656.023-1.218.234c-1.922.773-4.782 1.29-7.57 1.29m-33.14-9.164c0-7.289 3.773-14.227 9.867-18.047c-.75 2.18-1.172 4.594-1.172 7.266c0 14.648 8.93 23.367 23.906 23.367c2.39 0 4.453-.281 6.375-.96c-3.562 5.882-10.43 9.468-17.953 9.468c-12.164 0-21.023-8.86-21.023-21.094"
      />
    </svg>
  ),
  system: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <title>System theme icon</title>
      <path
        fill="currentColor"
        d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-7v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2H4a2 2 0 0 1-2-2V5zm18 11V5H4v11h16z"
      />
    </svg>
  ),
};
