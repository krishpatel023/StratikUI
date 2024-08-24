"use client";

import type { IconProps } from "@/utils/constants";
import { Button, Input, type InputProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { KeyListener, KeyListenerDisplay, type Key } from "../ui/KeyListener";
import { useRef } from "react";

export interface CommandPaletteTriggerProps extends InputProps {
  keys: Key[];
  searchbar: boolean;
  setSearchbar: (open: boolean) => void;
}

export function SearchField({ keys, className, searchbar, setSearchbar, ...props }: CommandPaletteTriggerProps) {
  const ref = useRef<HTMLInputElement>(null);

  function handleFocus() {
    setSearchbar(true);
    ref.current?.blur();
  }

  return (
    <div className="relative text-foreground w-max">
      {keys && (
        <div className="hidden md:flex pointer-events-none absolute inset-y-0 right-0 items-center pr-2.5">
          <KeyListenerDisplay keys={keys} />
          <KeyListener onKeyDown={handleFocus} keys={keys} />
        </div>
      )}
      <Input
        type="text"
        className={twMerge(
          "hidden md:block w-80 my-1 text-primary-foreground placeholder:text-secondary-foreground py-2 pr-24 pl-4 rounded-lg bg-neutral-200/30 dark:bg-neutral-900/50 border-[2px] hover:border-outline border-outline-secondary focus:outline-none",
          className as string,
        )}
        placeholder="Search"
        ref={ref}
        onFocus={handleFocus}
        {...props}
      />
      <div className="md:hidden h-full flex items-center justify-center">
        <Button className="text-primary-foreground" onPress={() => setSearchbar(true)} aria-label="Search">
          <SearchIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}

const SearchIcon = (props: IconProps) => (
  <svg height="200" width="200" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Search Icon</title>
    <path
      d="M8.195 0c4.527 0 8.196 3.62 8.196 8.084a7.989 7.989 0 0 1-1.977 5.267l5.388 5.473a.686.686 0 0 1-.015.98a.71.71 0 0 1-.993-.014l-5.383-5.47a8.23 8.23 0 0 1-5.216 1.849C3.67 16.169 0 12.549 0 8.084C0 3.62 3.67 0 8.195 0Zm0 1.386c-3.75 0-6.79 2.999-6.79 6.698c0 3.7 3.04 6.699 6.79 6.699s6.791-3 6.791-6.699c0-3.7-3.04-6.698-6.79-6.698Z"
      fill="currentColor"
    />
  </svg>
);
