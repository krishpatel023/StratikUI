"use client";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import {
  Key,
  KeyListener,
  KeyListenerDisplay,
} from "../key_listener/KeyListener_Helper";
import { Modal } from "../modal/Modal_1_Helper";
import { IconProps } from "@/utils/constants";
import { twMerge } from "tailwind-merge";

export function IconInput({
  placeholder,
  props,
  icon,
  setActive,
}: {
  placeholder: string;
  props?: any;
  icon?: any;
  setActive: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div>
      <div className="w-80 @md:w-[25rem] relative text-s_primary">
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5">
          {icon ? icon : null}
        </div>
        <input
          type="text"
          className="my-1 w-full  text-s_textPrimary placeholder:text-s_textSecondary py-2 pr-24 pl-4 rounded-md bg-white dark:bg-neutral-900 border-[2px] border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-500 shadow-sm"
          placeholder={placeholder}
          {...props}
          onFocus={() => setActive(true)}
        />
      </div>
    </div>
  );
}

export function CommandPaletteImplementation() {
  const [active, setActive] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [active]);

  return (
    <div>
      <IconInput
        placeholder="Search"
        icon={<KeyListenerDisplay keys={["Control", "k"]} />}
        setActive={setActive}
      />
      <KeyListener onKeyDown={() => setActive(true)} keys={["Control", "k"]} />
      <Modal
        active={active}
        setActive={setActive}
        className="h-[25rem] w-[20rem] @md:min-w-[40rem] px-0 py-0 overflow-y-auto"
      >
        <KeyListener
          onKeyDown={() => {
            setActive(false);
          }}
          keys={["Esc"]}
        />
        <input
          type="text"
          className="my-1 w-full bg-transparent text-s_textPrimary placeholder:text-s_textSecondary py-2 px-4 rounded-md  border-none focus:outline-none"
          placeholder="Search"
          ref={inputRef}
        />
        <div className="min-w-full border-[0.5px] border-neutral-200 dark:border-neutral-700"></div>
        <div className="w-full h-full flex flex-col px-2 py-1">
          <Item
            placeholder="Add a new design"
            keys={["Alt", "a"]}
            icon={<Icons.add />}
          />
          <span className="ml-4 mt-6 mb-2 text-sm font-medium">Connect</span>
          <Item
            placeholder="Give us a feedback"
            keys={["Alt", "f"]}
            icon={<Icons.feedback />}
          />
          <Item
            placeholder="Contact the creator"
            keys={["Alt", "c"]}
            icon={<Icons.support />}
          />
          <Item
            placeholder="Talk about us on X"
            keys={["Control", "t"]}
            icon={<Icons.twitter />}
          />
          <Item
            placeholder="Follow us"
            keys={["Alt", "s"]}
            icon={<Icons.twitter />}
          />
          <Item
            placeholder="Refer Docs"
            keys={["Alt", "d"]}
            icon={<Icons.support />}
          />
        </div>
      </Modal>
    </div>
  );
}

const Item = ({
  icon,
  placeholder,
  keys,
}: {
  icon?: any;
  placeholder: string;
  keys: Key[];
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  const handleFocus = () => {
    removeFocusFromOthersIfAny();
    if (ref.current) ref.current.focus();
  };

  const removeFocusFromOthersIfAny = () => {
    const focusedElements = document.getElementsByClassName(
      "FOCUS_IDENTIFIER_CLASSNAME"
    );

    Array.from(focusedElements).map((item) => {
      if (item instanceof HTMLButtonElement) {
        item.blur();
      }
    });
  };

  return (
    <button
      className="FOCUS_IDENTIFIER_CLASSNAME w-full h-12 px-2 @md:px-4 rounded-md flex justify-between items-center text-base focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-900"
      ref={ref}
    >
      <span className="ml-2 flex justify-start items-center gap-6">
        {icon}
        <span className="ml-2 overflow-hidden">{placeholder}</span>
      </span>
      <KeyListener onKeyDown={() => handleFocus()} keys={keys} />
      <KeyListenerDisplay keys={keys} />
    </button>
  );
};

const Icons = {
  add: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1z"
      ></path>
    </svg>
  ),
  feedback: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20Zm0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20Z"
      ></path>
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"
      ></path>
    </svg>
  ),
  support: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.95 3.684L8.637 8.912a1 1 0 0 1-1.276 0l-6.31-5.228A.999.999 0 0 0 1 4v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a.999.999 0 0 0-.05-.316M2 2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m-.21 1l5.576 4.603a1 1 0 0 0 1.27.003L14.268 3z"
      ></path>
    </svg>
  ),
  guide: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M6.5 16.038q1.31 0 2.547.301q1.238.301 2.453.98V7.508q-1.083-.773-2.387-1.16Q7.81 5.962 6.5 5.962q-.9 0-1.576.107q-.676.108-1.5.4q-.232.077-.328.221Q3 6.835 3 7.008v9.015q0 .27.192.394q.193.125.423.03q.548-.185 1.267-.297q.718-.112 1.618-.112Zm6 1.281q1.215-.679 2.453-.98q1.237-.3 2.547-.3q.9 0 1.618.111q.719.112 1.267.296q.23.096.423-.029q.192-.125.192-.394V7.008q0-.173-.096-.308t-.327-.23q-.825-.293-1.501-.4q-.676-.108-1.576-.108q-1.31 0-2.613.386q-1.304.387-2.387 1.16v9.811Zm-.5 1.137q-.235 0-.432-.059t-.376-.15q-1.09-.595-2.27-.902q-1.182-.307-2.422-.307q-.78 0-1.534.131q-.753.131-1.466.42q-.544.217-1.022-.131T2 16.496V6.831q0-.371.195-.689q.195-.317.547-.442q.881-.388 1.833-.563q.952-.175 1.925-.175q1.47 0 2.866.423q1.397.423 2.634 1.23q1.237-.807 2.634-1.23q1.397-.423 2.866-.423q.973 0 1.925.175t1.833.563q.352.125.547.442q.195.318.195.689v9.665q0 .614-.516.942q-.517.33-1.1.112q-.694-.27-1.418-.39q-.724-.122-1.466-.122q-1.24 0-2.421.307t-2.271.901q-.18.092-.376.151q-.197.059-.432.059Zm-4.75-6.94Z"
      ></path>
    </svg>
  ),
};
