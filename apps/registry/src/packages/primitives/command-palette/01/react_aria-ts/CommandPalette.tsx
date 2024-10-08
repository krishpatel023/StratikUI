"use client";

import {
  type Key,
  KeyListener,
  KeyListenerDisplay,
} from "@registry/packages/primitives/key-listener/01/default-ts/KeyListener";
import { Modal, ModalTrigger } from "@registry/packages/primitives/modals/01/react_aria-ts/Modal";
import type { IconProps } from "@registry/utils/types";
import { type Dispatch, type KeyboardEvent, type SetStateAction, useEffect, useRef, useState } from "react";
import {
  Button,
  type ButtonProps,
  Group,
  type GroupProps,
  Input,
  type InputProps,
  SearchField,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export interface CommandPaletteTriggerProps extends InputProps {
  keys?: Key[];
  setActive: Dispatch<SetStateAction<boolean>>;
}

export function CommandPaletteTrigger({ keys, setActive, className, ...props }: CommandPaletteTriggerProps) {
  const ref = useRef<HTMLInputElement>(null);

  function handleFocus() {
    setActive((prevState) => !prevState);
    ref.current?.blur();
  }

  return (
    <div className="relative text-foreground w-max">
      {keys && (
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5">
          <KeyListenerDisplay keys={keys} />
          <KeyListener onKeyDown={handleFocus} keys={keys} />
        </div>
      )}
      <Input
        type="text"
        className={twMerge(
          " w-80 md:w-[25rem] my-1 text-primary-foreground placeholder:text-secondary-foreground py-2 pr-24 pl-4 rounded-md bg-primary border-[2px] hover:border-outline border-outline-secondary focus:outline-none",
          className as string,
        )}
        ref={ref}
        onFocus={handleFocus}
        {...props}
      />
    </div>
  );
}

export interface CommandPaletteItemProps extends ButtonProps {}

export function CommandPaletteItem({ children, className, ...props }: CommandPaletteItemProps) {
  return (
    <Button
      className={twMerge(
        "w-full h-12 px-2 md:px-4 rounded-md flex justify-between items-center text-base focus:outline-none focus:bg-secondary hover:bg-secondary",
        className as string,
      )}
      data-menu-item
      {...props}
    >
      {children}
    </Button>
  );
}

export interface CommandPaletteProps {
  isOpen: boolean;
  onOpenChange?: (val: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

export function CommandPalette({ isOpen, onOpenChange, children, className }: CommandPaletteProps) {
  return (
    <ModalTrigger isOpen={isOpen} onOpenChange={onOpenChange}>
      <Modal className={twMerge("h-[25rem] w-80 md:w-[30rem] p-0", className as string)} isDismissable>
        {children}
      </Modal>
    </ModalTrigger>
  );
}

export interface CommandPaletteMenuProps extends GroupProps {
  children: React.ReactNode;
  isLoading?: boolean;
  isEmpty?: boolean;
}

export function CommandPaletteMenu({ children, isLoading, isEmpty, className, ...props }: CommandPaletteMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuItems, setMenuItems] = useState<HTMLElement[]>([]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Both are necessary
  useEffect(() => {
    if (menuRef.current) {
      const menuItemsFound = menuRef.current.querySelectorAll("[data-menu-item]") as NodeListOf<HTMLElement>;
      const arr = Array.from(menuItemsFound);

      setMenuItems(arr);
    }
  }, [children, menuRef.current]);

  function moveFocusToNextElement() {
    const currentIndex = menuItems.indexOf(document.activeElement as HTMLElement);

    if (currentIndex >= 0 && currentIndex < menuItems.length - 1) {
      menuItems[currentIndex + 1].focus();
    }

    if (currentIndex === -1) menuItems[0].focus();
  }

  function moveFocusToPreviousElement() {
    const currentIndex = menuItems.indexOf(document.activeElement as HTMLElement);

    if (currentIndex > 0 && currentIndex <= menuItems.length - 1) {
      menuItems[currentIndex - 1].focus();
    }
  }
  return (
    <Group
      className={twMerge(
        "w-full h-[calc(100%-3.25rem)] z-10 p-2 overflow-y-auto scrollbar-x scrollbar-y",
        className as string,
      )}
      ref={menuRef}
      {...props}
    >
      <KeyListener onKeyDown={moveFocusToNextElement} keys={["Down"]} />
      <KeyListener onKeyDown={moveFocusToPreviousElement} keys={["Up"]} />
      {isLoading && <CommandPaletteLoading />}
      {isEmpty && <CommandPaletteEmpty />}
      {!isLoading && !isEmpty && children}
    </Group>
  );
}

export interface CommandPaletteSearchBarProps extends InputProps {}

export function CommandPaletteSearchBar({ className, ...props }: CommandPaletteSearchBarProps) {
  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      const menuItemsFound = document.querySelectorAll("[data-menu-item]") as NodeListOf<HTMLElement>;
      const arr = Array.from(menuItemsFound);

      arr[0].focus();
      event.preventDefault();
      arr[0].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  }

  return (
    <SearchField aria-label="Search">
      <Input
        type="text"
        className={twMerge(
          "my-1 w-full bg-transparent text-foreground py-2 px-4 rounded-md border-none focus:outline-none",
          className as string,
        )}
        aria-label="Search box"
        onKeyDown={(e) => handleKeyDown(e)}
        autoFocus
        {...props}
      />
    </SearchField>
  );
}

export interface CommandPaletteGroupProps {
  children: React.ReactNode;
  heading?: string;
  className?: string;
}
export function CommandPaletteGroup({ heading, children, className }: CommandPaletteGroupProps) {
  return (
    <div className={twMerge("w-full flex flex-col", className)}>
      {heading && (
        <div>
          <h1 className="ml-2 mt-4 mb-3 text-sm font-medium underline underline-offset-1">{heading}</h1>
        </div>
      )}
      {children}
    </div>
  );
}

export function CommandPaletteLoading() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="text-center text-sm font-medium text-foreground">
        <Icons.loading className="animate-spin w-8 h-8 mx-auto" />
      </div>
    </div>
  );
}

export function CommandPaletteEmpty() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="text-center text-sm font-medium text-foreground">No results found</div>
    </div>
  );
}

export function CommandPaletteDivider({ className }: { className?: string }) {
  return <div className={twMerge("min-w-full border-[0.5px] border-outline", className)} />;
}

const Icons = {
  loading: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <title>Loading</title>
      <path fill="currentColor" d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3Z" />
    </svg>
  ),
};
