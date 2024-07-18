"use client";

import { useInternalState } from "@/hooks/useInternalState";
import {
  KeyListener,
  KeyListenerDisplay,
} from "@/packages/primitives/key_listener/KeyListener";
import { IconProps } from "@/utils/constants";

export function SearchField() {
  const { setSearchbar } = useInternalState();
  return (
    <>
      <IconInput
        placeholder="Search"
        icon={<KeyListenerDisplay keys={["Control", "k"]} />}
        setSearchbar={setSearchbar}
      />
      <KeyListener
        onKeyDown={() => setSearchbar(true)}
        keys={["Control", "k"]}
      />
    </>
  );
}

function IconInput({
  placeholder,
  props,
  icon,
  setSearchbar,
}: {
  placeholder: string;
  props?: any;
  icon?: any;
  setSearchbar: (open: boolean) => void;
}) {
  return (
    <div>
      <div className="hidden md:block w-80 relative text-s_primary">
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5">
          {icon ? icon : null}
        </div>
        <input
          type="text"
          className="my-1 w-full text-black dark:text-white placeholder:text-neutral-800 dark:placeholder:text-neutral-300 py-2 pr-24 pl-4 rounded-md bg-white dark:bg-neutral-950 border-[2px] border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-500 shadow-sm"
          placeholder={placeholder}
          {...props}
          onFocus={() => setSearchbar(true)}
          aria-label="Search"
        />
      </div>
      <div className="md:hidden h-full flex items-center justify-center">
        <button
          className="text-neutral-800 dark:text-neutral-200"
          onClick={() => setSearchbar(true)}
          aria-label="Search"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

const Search = (props: IconProps) => (
  <svg
    height="200"
    width="200"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.195 0c4.527 0 8.196 3.62 8.196 8.084a7.989 7.989 0 0 1-1.977 5.267l5.388 5.473a.686.686 0 0 1-.015.98a.71.71 0 0 1-.993-.014l-5.383-5.47a8.23 8.23 0 0 1-5.216 1.849C3.67 16.169 0 12.549 0 8.084C0 3.62 3.67 0 8.195 0Zm0 1.386c-3.75 0-6.79 2.999-6.79 6.698c0 3.7 3.04 6.699 6.79 6.699s6.791-3 6.791-6.699c0-3.7-3.04-6.698-6.79-6.698Z"
      fill="currentColor"
    />
  </svg>
);
