"use client";

import { IconProps } from "@/utils/constants";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { HeaderDrawer } from "./Header_Drawer_Helper";
import { NavbarGroup } from "@/packages/primitives/header_blocks/Header_Continuous_Dropdown_Animated_Helper";
import {
  Key,
  KeyListener,
  KeyListenerDisplay,
} from "@/packages/primitives/key_listener/KeyListener";
import useClickOutside from "@/packages/hooks/useClickOutside/useClickOutside";
import useDisableScroll from "@/packages/hooks/useDisableScroll/useDisableScroll";
import { ContainerGlassEffect } from "@/packages/primitives/containers/Container_6";

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState(false);
  const navHeadings = [
    {
      title: "Home",
      link: "#",
      content: null,
    },
    {
      title: "Pricing",
      link: "#",
      content: null,
    },
    {
      title: "Products",
      content: (
        <div>
          <h4 className="font-semibold text-sm mb-4">Categories</h4>
          <ul className="text-sm text-neutral-950 dark:text-neutral-300 flex flex-col gap-2">
            <li className="hover:text-blue-500 hover:cursor-pointer">
              Electronics
            </li>
            <li className="hover:text-blue-500 hover:cursor-pointer">
              Clothing
            </li>
            <li className="hover:text-blue-500 hover:cursor-pointer">Books</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Services",
      content: (
        <div className="px-4">
          <h4 className="font-semibold text-lg mb-4">Our Services</h4>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="min-w-40 h-28 bg-neutral-800 rounded-lg"></div>
              <div className="min-w-60">
                <h1>Product 1</h1>
                <p className="text-sm text-neutral-400 mt-2">
                  This is the most fabulous product in the world. The popularity
                  of it is endless.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="min-w-40 h-28 bg-neutral-800 rounded-lg"></div>
              <div className="min-w-60">
                <h1>Product 2</h1>
                <p className="text-sm text-neutral-400 mt-2">
                  This is the most fabulous product in the world. The popularity
                  of it is endless.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="min-w-40 h-28 bg-neutral-800 rounded-lg"></div>
              <div className="min-w-60">
                <h1>Product 3</h1>
                <p className="text-sm text-neutral-400 mt-2">
                  This is the most fabulous product in the world. The popularity
                  of it is endless.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "About",
      content: (
        <div>
          <h4 className="font-semibold text-sm mb-4">About Our Company</h4>
          <p className="text-sm text-neutral-950 dark:text-neutral-300">
            We are a leading provider of innovative solutions for businesses of
            all sizes. Our team of experts has years of experience in nothing{" "}
            {":)"}
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <HeaderDrawer
        open={open}
        setOpen={setOpen}
        className="bg-white border-b dark:bg-neutral-950 dark:text-white dark:border-neutral-200"
      >
        {navHeadings.map((heading) => (
          <a
            key={heading.title}
            href="#"
            className="text-s_textPrimary hover:text-s_accent font-medium"
          >
            {heading.title}
          </a>
        ))}
      </HeaderDrawer>
      <div className="w-full h-16  flex justify-between px-6 @md:px-10 items-center bg-neutral-50/20 dark:bg-neutral-950">
        <a href="#" className="text-s_textPrimary font-semibold text-lg">
          LOGO
        </a>
        <NavbarGroup headings={navHeadings} className="hidden @lg:flex" />
        <span className="gap-8 items-center justify-center hidden @lg:flex">
          <CommandPaletteImplementation />
          <button
            className="w-8 h-10 flex justify-center items-center rounded hover:bg-neutral-200 dark:hover:bg-neutral-700 text-black dark:text-white"
            onClick={() => setTheme(!theme)}
          >
            {theme ? (
              <Icons.sun className="w-6 h-6" />
            ) : (
              <Icons.moon className="w-6 h-6" />
            )}
          </button>

          <GradientBackground>
            <button className="relative z-10 bg-white text-black dark:bg-black dark:text-white py-2 @md:px-4 rounded-lg hidden @md:block">
              Get Started
            </button>
          </GradientBackground>
        </span>
        <button
          className="w-10 h-10 @lg:hidden hover:bg-s_secondary rounded flex justify-center items-center relative text-s_textPrimary"
          onClick={() => {
            setOpen(true);
          }}
        >
          <Icons.Bars className="h-6 w-6" />
        </button>
      </div>
    </>
  );
};

function GradientBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="relative group/gradient_bg w-max">
      {children}
      <div
        className={twMerge(
          "absolute z-0 -inset-0.5 bg-gradient-to-r from-blue-600 to-red-600 rounded-lg blur opacity-75 group-hover/gradient_bg:opacity-100 duration-200 transition-all",
          className
        )}
      ></div>
    </div>
  );
}

function Modal({
  children,
  active,
  setActive,
  position = "center",
  className,
  blurBg = true,
}: {
  children: React.ReactNode;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  position?: "center" | "top" | "bottom";
  className?: string;
  blurBg?: boolean;
}) {
  const ref = useRef(null);
  useClickOutside(ref, () => setActive(false));

  useDisableScroll(active, "targetElem2648389");

  return (
    <>
      {active && (
        <ContainerGlassEffect
          className={twMerge(
            "w-full h-full fixed top-0 left-0 z-50 flex justify-center",
            !blurBg &&
              "bg-transparent dark:bg-transparent backdrop-blur-none supports-[backdrop-filter]:bg-transparent dark:supports-[backdrop-filter]:bg-transparent"
          )}
        >
          <div
            ref={ref}
            className={twMerge(
              "hidden absolute rounded-md px-6 py-6 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-black dark:text-white",
              active && "flex flex-col",
              position === "center" && "top-1/2 -translate-y-1/2",
              position === "top" && "top-6",
              position === "bottom" && "bottom-6",
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

function IconInput({
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
      <div className="w-80 relative text-s_primary">
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

function CommandPaletteImplementation() {
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
  Bars: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  sun: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.3em"
      height="1.3em"
      viewBox="0 0 21 21"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M10.5 14.5c2.219 0 4-1.763 4-3.982a4.003 4.003 0 0 0-4-4.018c-2.219 0-4 1.781-4 4c0 2.219 1.781 4 4 4zM4.136 4.136L5.55 5.55m9.9 9.9l1.414 1.414M1.5 10.5h2m14 0h2M4.135 16.863L5.55 15.45m9.899-9.9l1.414-1.415M10.5 19.5v-2m0-14v-2"
          opacity=".3"
        ></path>
        <g transform="translate(-210 -1)">
          <path d="M220.5 2.5v2m6.5.5l-1.5 1.5"></path>
          <circle cx="220.5" cy="11.5" r="4"></circle>
          <path d="m214 5l1.5 1.5m5 14v-2m6.5-.5l-1.5-1.5M214 18l1.5-1.5m-4-5h2m14 0h2"></path>
        </g>
      </g>
    </svg>
  ),
  moon: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 56 56"
      {...props}
    >
      <path
        fill="currentColor"
        d="M41.242 36.121c-12.937 0-20.953-7.781-20.953-20.273c0-3.563.61-6.703 1.477-8.391c.351-.68.398-1.008.398-1.476c0-.774-.703-1.688-1.687-1.688c-.188 0-.633.07-1.313.328c-8.648 3.516-14.742 12.656-14.742 22.5c0 14.227 10.313 24.586 24.539 24.586c10.219 0 18.469-5.344 22.29-14.11c.257-.609.327-1.124.327-1.382c0-.961-.843-1.617-1.547-1.617c-.398 0-.656.023-1.218.234c-1.922.773-4.782 1.29-7.57 1.29m-33.14-9.164c0-7.289 3.773-14.227 9.867-18.047c-.75 2.18-1.172 4.594-1.172 7.266c0 14.648 8.93 23.367 23.906 23.367c2.39 0 4.453-.281 6.375-.96c-3.562 5.882-10.43 9.468-17.953 9.468c-12.164 0-21.023-8.86-21.023-21.094"
      ></path>
    </svg>
  ),
};
