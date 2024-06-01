"use client";

import { useInternalState } from "@/hooks/useInternalState";
import { useSearch } from "@/hooks/useSearch";
import useClickOutside from "@/packages/hooks/code/useClickOutside";
import useDisableScroll from "@/packages/hooks/code/useDisableScroll";
// import { ContainerGlassEffect } from "@/packages/primitives/containers/Container_6";

const ContainerGlassEffect = dynamic(() =>
  import("@/packages/primitives/containers/Container_6").then(
    (mod) => mod.ContainerGlassEffect
  )
);

import {
  KeyListener,
  KeyListenerDisplay,
} from "@/packages/primitives/key_listener/KeyListener_Helper";
import { IconProps } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { FlattenedItem } from "./FlattenData";
import dynamic from "next/dynamic";

// WRAPPER COMPONENT
export function CommandPaletteImplementation({
  data,
}: {
  data: FlattenedItem[];
}) {
  // CONTROLS MODAL STATE

  const { searchbar, setSearchbar } = useInternalState();

  // SEARCH FUNCTIONALITY
  const [query, setQuery] = useState("");
  const results = useSearch(query, data, { limit: 5 });

  // FOCUS ON INPUT WHEN MODAL IS OPENED
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
    setQuery("");
  }, [searchbar]);

  // HANDLE FOCUS
  const router = useRouter();
  const handleSocial = [
    {
      name: "Docs",
      link: "/docs/components/hero-section",
      placeholder: "View our components",
      external: false,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/stratikui",
      placeholder: "Follow us on Twitter",
      external: true,
    },
    {
      name: "Feedback",
      link: "https://github.com/stratik-ui",
      placeholder: "Send us a feedback",
      external: false,
    },
    {
      name: "Bug",
      link: "https://github.com/stratik-ui",
      placeholder: "Report a bug",
      external: false,
    },
  ];
  const itemLimit = handleSocial.length + results.length;
  const [focus, setFocus] = useState<number | null>(null);

  const handleFocusIncrement = () => {
    if (focus === null) setFocus(0);
    else if (focus < itemLimit - 1) setFocus(focus + 1);
  };

  const handleFocusDecrement = () => {
    if (!focus) return;
    if (focus > 0) setFocus(focus - 1);
  };

  const handleFocusReset = () => {
    setFocus(null);
    setQuery("");
    // setSearchbar(false);
  };

  const handleEnter = () => {
    if (!focus) return;
    if (focus > results.length) {
      const link = handleSocial[focus - results.length].link;
      if (handleSocial[focus - results.length].external)
        window.open(link, "_blank", "noopener,noreferrer");
      else router.push(link);
    } else {
      const { group, category, hash } = results[focus];
      const link = `/docs/${group}/${category}#${hash}`;
      router.push(link);
    }

    setSearchbar(false);
  };

  return (
    <Modal
      searchbar={searchbar}
      setSearchbar={setSearchbar}
      className="h-[25rem] w-[20rem] md:min-w-[40rem] px-0 py-0"
    >
      <KeyListener
        onKeyDown={() => {
          setSearchbar(false);
        }}
        keys={["Esc"]}
      />
      <div className="w-full h-full flex flex-col">
        <input
          type="text"
          className="my-1 w-full bg-transparent text-black dark:text-white py-2 px-4 rounded-md  border-none focus:outline-none"
          placeholder="Search"
          ref={inputRef}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="min-w-full border-[0.5px] border-neutral-200 dark:border-neutral-800"></div>
        <div className="w-full h-[23rem] px-2 overflow-y-auto scrollbar-vertical py-2">
          {results.map((item, index) => {
            return (
              <Item
                key={index}
                category={item.group}
                placeholder={item.name}
                id={index}
                focus={focus}
                handleEnter={handleEnter}
                setFocus={setFocus}
              />
            );
          })}

          <span className="ml-3 text-sm font-medium">Connect</span>

          {handleSocial.map((item, index) => {
            return (
              <Item
                key={index}
                category={item.name}
                placeholder={item.placeholder}
                id={index + results.length}
                focus={focus}
                handleEnter={handleEnter}
                setFocus={setFocus}
              />
            );
          })}
        </div>
        <div className="w-full h-8 bg-white dark:bg-neutral-950 flex justify-end items-center gap-4 pr-4 rounded-[inherit]">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-200 text-sm">
            <KeyListenerDisplay
              keys={["Enter"]}
              className="py-0 px-0 w-6 h-5 flex justify-center items-center"
            />
            <h1>Search</h1>
            <KeyListener onKeyDown={() => handleEnter()} keys={["Enter"]} />
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-200 text-sm">
            <KeyListenerDisplay
              keys={["Down"]}
              className="py-0 px-0 w-6 h-5 flex justify-center items-center"
            />
            <h1>Next</h1>
            <KeyListener
              onKeyDown={() => handleFocusIncrement()}
              keys={["Down"]}
            />
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-200 text-sm">
            <KeyListenerDisplay
              keys={["Up"]}
              className="py-0 px-0 w-6 h-5 flex justify-center items-center"
            />
            <h1>Prev</h1>
            <KeyListener
              onKeyDown={() => handleFocusDecrement()}
              keys={["Up"]}
            />
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-200 text-sm">
            <KeyListenerDisplay
              keys={["Esc"]}
              className="py-0 px-0 w-6 h-5 flex justify-center items-center"
            />
            <h1>Close</h1>
            <KeyListener onKeyDown={() => handleFocusReset()} keys={["Esc"]} />
          </div>
        </div>
      </div>
    </Modal>
  );
}

// INITIAL INPUT - COTROLLED FROM WRAPPER

function Modal({
  children,
  searchbar,
  setSearchbar,
  position = "center",
  className,
  blurBg = true,
}: {
  children: React.ReactNode;
  searchbar: boolean;
  setSearchbar: (open: boolean) => void;
  position?: "center" | "top" | "bottom";
  className?: string;
  blurBg?: boolean;
}) {
  const ref = useRef(null);
  useClickOutside(ref, () => setSearchbar(false));

  useDisableScroll(searchbar, "theme-toggle");

  return (
    <>
      {searchbar && (
        <ContainerGlassEffect
          className={twMerge(
            "w-full h-screen flex justify-center items-center absolute z-[9999]",
            !blurBg &&
              "bg-transparent dark:bg-transparent backdrop-blur-none supports-[backdrop-filter]:bg-transparent dark:supports-[backdrop-filter]:bg-transparent"
          )}
        >
          <div
            ref={ref}
            className={twMerge(
              "rounded-md px-6 py-6 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-black dark:text-white",
              className
            )}
          >
            {children}
          </div>
        </ContainerGlassEffect>
      )}
    </>
  );
}

const Item = ({
  category,
  placeholder,
  id,
  focus,
  handleEnter,
  setFocus,
}: {
  category: string;
  placeholder: string;
  id: number;
  focus: number | null;
  handleEnter: () => void;
  setFocus: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (focus === id) ref.current.focus();
    else ref.current.blur();
  }, [focus, id]);
  return (
    <button
      className={twMerge(
        "w-full h-16 px-2 @md:px-4 rounded-md flex justify-between items-center gap-6 text-base dark:focus:bg-neutral-900  group transition-all duration-300 ease-linear outline-none data-[focus=true]:bg-neutral-100 data-[focus=true]:dark:bg-neutral-900"
      )}
      ref={ref}
      aria-label={placeholder}
      data-focus={focus === id}
      onMouseEnter={() => setFocus(id)}
      // onMouseLeave={() => setFocus(null)}
      onClick={handleEnter}
    >
      <span className="ml-2 flex justify-start items-center gap-6">
        {category === "components" && <Icons.components className="w-4 h-4" />}
        {category === "primitives" && <Icons.primitive className="w-4 h-4" />}
        {category === "hooks" && <Icons.hooks className="w-4 h-4" />}
        {category === "Twitter" && <Icons.twitter className="w-4 h-4" />}
        {category === "Docs" && <Icons.guide className="w-4 h-4" />}
        {category === "Feedback" && <Icons.feedback className="w-4 h-4" />}
        {category === "Bug" && <Icons.bug className="w-4 h-4" />}
      </span>
      <span className="w-full ml-2 flex flex-col items-start  overflow-hidden">
        <span className="text-base">{placeholder}</span>
        {(category === "components" ||
          category === "primitives" ||
          category === "hooks") && (
          <span className="text-sm capitalize text-neutrral-800 dark:text-neutral-200">
            {category}
          </span>
        )}
      </span>
      <span
        data-focus={focus === id}
        className="w-4 h-4 opacity-0 data-[focus=true]:opacity-100 mr-2 delay-100"
      >
        <Icons.arrow className="w-4 h-4" />
      </span>
    </button>
  );
};

const Icons = {
  components: (props: IconProps) => (
    <svg
      height="200"
      width="200"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 2h20v20H2V2Zm2 2v7h7V4H4Zm9 0v16h7V4h-7Zm-2 16v-7H4v7h7Z"
        fill="currentColor"
      />
    </svg>
  ),
  primitive: (props: IconProps) => (
    <svg
      height="200"
      width="200"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="none" stroke="currentColor">
        <path d="M20.54 8.676v6.876a.694.694 0 0 1-.355.644l-7.132 4.024a2.096 2.096 0 0 1-2.056.002L3.82 16.197a.694.694 0 0 1-.355-.66V8.694a.694.694 0 0 1 .345-.654l7.156-4.172a2.097 2.097 0 0 1 2.117.002l7.112 4.17a.693.693 0 0 1 .344.636Z" />
        <path d="M3.82 9.253a.699.699 0 0 1-.01-1.213l7.156-4.172a2.097 2.097 0 0 1 2.117.002l7.112 4.17a.699.699 0 0 1-.01 1.212l-7.132 4.024a2.096 2.096 0 0 1-2.056.003z" />
      </g>
    </svg>
  ),
  hooks: (props: IconProps) => (
    <svg
      height="200"
      width="200"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm4.78 1.97a.75.75 0 0 1 0 1.06L5.81 8l.97.97a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06l1.5-1.5a.75.75 0 0 1 1.06 0m2.44 1.06a.75.75 0 0 1 1.06-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.97-.97z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ),
  arrow: (props: IconProps) => (
    <svg
      height="200"
      width="200"
      viewBox="0 0 15 15"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z"
        fill="currentColor"
      />
    </svg>
  ),
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
      height="200"
      width="200"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m22.903 11.728l-4.528-1.697V4.945a1.69 1.69 0 0 0-1.097-1.58l-4.687-1.757a1.668 1.668 0 0 0-1.186 0L6.717 3.366a1.687 1.687 0 0 0-1.097 1.58v5.085l-4.528 1.697A1.69 1.69 0 0 0 0 13.308v5.16c0 .638.36 1.224.933 1.51l4.687 2.344a1.68 1.68 0 0 0 1.51 0L12 19.884l4.87 2.438a1.68 1.68 0 0 0 1.51 0l4.687-2.344a1.69 1.69 0 0 0 .933-1.51v-5.16c0-.703-.436-1.331-1.097-1.58zm-6.122-1.66l-3.984 1.496V8.367l3.984-1.734zM7.22 4.88L12 3.09l4.781 1.79v.028L12 6.848l-4.781-1.94Zm3.937 13.645l-3.984 1.992V16.81l3.984-1.818zm0-5.25l-4.781 1.94l-4.781-1.94v-.028l4.781-1.79l4.781 1.79zm11.25 5.25l-3.984 1.992V16.81l3.984-1.818zm0-5.25l-4.781 1.94l-4.781-1.94v-.028l4.781-1.79l4.781 1.79z"
        fill="currentColor"
      />
    </svg>
  ),
  bug: (props: IconProps) => (
    <svg
      height="200"
      width="200"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 14h2a1 1 0 0 0 0-2h-2v-1a5.15 5.15 0 0 0-.21-1.36A5 5 0 0 0 22 5a1 1 0 0 0-2 0a3 3 0 0 1-2.14 2.87A5 5 0 0 0 16 6.4a2.58 2.58 0 0 0 0-.4a4 4 0 0 0-8 0a2.58 2.58 0 0 0 0 .4a5 5 0 0 0-1.9 1.47A3 3 0 0 1 4 5a1 1 0 0 0-2 0a5 5 0 0 0 3.21 4.64A5.15 5.15 0 0 0 5 11v1H3a1 1 0 0 0 0 2h2v1a7 7 0 0 0 .14 1.38A5 5 0 0 0 2 21a1 1 0 0 0 2 0a3 3 0 0 1 1.81-2.74a7 7 0 0 0 12.38 0A3 3 0 0 1 20 21a1 1 0 0 0 2 0a5 5 0 0 0-3.14-4.62A7 7 0 0 0 19 15Zm-8 5.9A5 5 0 0 1 7 15v-4a3 3 0 0 1 3-3h1ZM10 6a2 2 0 0 1 4 0Zm7 9a5 5 0 0 1-4 4.9V8h1a3 3 0 0 1 3 3Z"
        fill="currentColor"
      />
    </svg>
  ),
};
