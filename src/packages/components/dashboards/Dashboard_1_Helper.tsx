"use client";

import DummyImage from "@/assets/Images/Image_3.jpg";
import { IconProps } from "@/utils/constants";

import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function SettingDropDown({
  direction = "bottom-left",
  children,
}: {
  direction?: "top-right" | "bottom-right" | "top-left" | "bottom-left";
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)}>{children} </button>
      {open && (
        <div
          className={twMerge(
            "absolute w-52 rounded border text-textPrimary dark:border-neutral-600 bg-white dark:bg-neutral-900 flex flex-col gap-1 transition-all duration-300 ease py-1",
            direction === "top-right" && "bottom-[110%] left-0",
            direction === "top-left" && "bottom-[110%] right-0",
            direction === "bottom-left" && "top-[110%] right-0",
            direction === "bottom-right" && "top-[110%] left-0"
          )}
        >
          <div className="flex items-center py-1 px-3 m-1 rounded-md gap-4">
            <Image className="h-8 w-8 rounded-full" src={DummyImage} alt="" />
            <span>
              <h1 className="text-sm">John Doe</h1>
              <h3 className="text-xs font-light">@avg_dev</h3>
            </span>
          </div>
          <div className="w-full min-h-[1px] bg-border"></div>
          <button className="min-h-10 flex items-center py-1 px-3 m-1 rounded-md gap-4 dark:hover:bg-neutral-700 hover:cursor-pointer hover:bg-neutral-100">
            <Icon.Card className="h-5 w-5" />
            <h3 className="text-sm font-light">Billing</h3>
          </button>
          <button className="min-h-10 flex items-center py-1 px-3 m-1 rounded-md gap-4 dark:hover:bg-neutral-700 hover:cursor-pointer hover:bg-neutral-100">
            <Icon.Setting className="h-5 w-5" />
            <h3 className="text-sm font-light">Settings</h3>
          </button>{" "}
          <button className="min-h-10 flex items-center py-1 px-3 m-1 rounded-md gap-4 dark:hover:bg-neutral-700 hover:cursor-pointer hover:bg-neutral-100">
            <Icon.Account className="h-5 w-5" />
            <h3 className="text-sm font-light">My Account</h3>
          </button>
          <div className="w-full min-h-[1px] bg-border"></div>
          <button className="min-h-10 flex items-center py-1 px-3 m-1 rounded-md gap-4 dark:hover:bg-neutral-700 hover:cursor-pointer hover:bg-neutral-100">
            <Icon.Signout className="h-5 w-5" />
            <h3 className="text-sm font-light">Sign Out</h3>
          </button>
        </div>
      )}
    </div>
  );
}

export function ShareButtonDropDown({
  direction = "bottom-left",
  children,
}: {
  direction?: "top-right" | "bottom-right" | "top-left" | "bottom-left";
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="rounded border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-900 py-1 px-4 "
      >
        {children}{" "}
      </button>
      {open && (
        <div
          className={twMerge(
            "absolute w-[18rem] @md:w-[25rem] rounded border text-textPrimary dark:border-neutral-600 dark:bg-neutral-900 flex flex-col gap-6 transition-all duration-300 ease bg-s_background py-4",
            direction === "top-right" && "bottom-[110%] left-0",
            direction === "top-left" && "bottom-[110%] right-0",
            direction === "bottom-left" && "top-[110%] right-0",
            direction === "bottom-right" && "top-[110%] left-0"
          )}
        >
          <div className="px-4">
            <h5 className="text-sm">Invite</h5>
            <span className="flex items-center gap-2 mt-2">
              <input
                type="email"
                className="w-full bg-transparent text-[#000000] dark:text-[#f0f0f0] py-2 px-4 rounded-md border-[1px] border-border focus:border-blue-500 dark:focus:border-blue-300 focus:outline-none focus:ring-2"
                placeholder="Add via email"
              />{" "}
              <button className="h-full py-2 px-4 rounded bg-blue-600 text-white">
                Send
              </button>
            </span>
          </div>
          <div className="min-w-full min-h-[1px] bg-border"></div>
          <div className="px-4">
            <h5 className="text-sm">Invite via link</h5>
            <span className="flex items-center gap-2 mt-2 h-10">
              <input
                type="email"
                className="w-full bg-transparent text-[#000000] dark:text-[#f0f0f0] py-2 px-4 rounded-md border-[1px] border-border focus:border-blue-500 dark:focus:border-blue-300 focus:outline-none focus:ring-2"
                placeholder="Add via email"
                value={
                  "https://www.figma.com/community/file/1179068859697769656"
                }
              />
              <button className="h-full w-12 flex justify-center items-center rounded dark:bg-neutral-700 bg-neutral-200  hover:bg-neutral-100 dark:hover:bg-neutral-800 text-s_textPrimary">
                <Icon.Copy className="h-5 w-5" />
              </button>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <DashboardSidebar active={open} setActive={() => setOpen(false)} />
      <div className="w-full bg-s_background shadow dark:shadow-neutral-600 shadow-neutral-200 h-16 flex justify-between items-center text-textPrimary px-4">
        <span className="flex justify-center items-center gap-4">
          <button
            className="border border-neutral-200 dark:border-neutral-700 p-2 rounded-md text-s_textPrimary hover:text-s_textSecondary"
            onClick={() => setOpen(!open)}
          >
            <Icon.Menu className="w-5 h-5" />
          </button>
          <h1 className="text-md @md:text-xl font-semibold">Stratik / UI</h1>
        </span>
        <span className="flex justify-center items-center gap-6">
          <ShareButtonDropDown direction="bottom-left">
            Share
          </ShareButtonDropDown>
          <SettingDropDown>
            <Image className="h-10 w-10 rounded-full" src={DummyImage} alt="" />
          </SettingDropDown>
        </span>
      </div>
    </>
  );
}

export function DashboardSidebar({
  active,
  setActive,
}: {
  active: boolean;
  setActive: Function;
}) {
  return (
    <>
      <div
        className={twMerge(
          "z-50 absolute h-full min-w-80 bg-s_background shadow dark:shadow-neutral-600 shadow-neutral-200 transition-all duration-300 ease-in-out px-4 overflow-y-hidden",
          active ? "left-0 top-0" : " -left-80 top-0"
        )}
      >
        <div className="w-full h-16 flex justify-end items-center ">
          <button onClick={() => setActive()}>
            <Icon.Close className="w-6 h-6 text-s_textPrimary hover:text-s_textSecondary" />
          </button>
        </div>
        <div className="h-[calc(100%-4rem)] w-full rounded-lg border dark:border-neutral-700 border-neutral-300 bg-white dark:bg-neutral-900 p-2 mx-auto">
          <div className="min-h-full min-w-full rounded-[inherit] border dark:border-neutral-700 border-neutral-300 bg-[linear-gradient(45deg,rgba(0,0,0,.05)_7.14%,transparent_7.14%,transparent_50%,rgba(0,0,0,.05)_50%,rgba(0,0,0,.05)_57.14%,transparent_57.14%,transparent);] dark:bg-[linear-gradient(45deg,rgba(0,0,0,.4)_7.14%,transparent_7.14%,transparent_50%,rgba(0,0,0,.4)_50%,rgba(0,0,0,.4)_57.14%,transparent_57.14%,transparent);] bg-[length:10px_10px]"></div>
        </div>
      </div>
    </>
  );
}

const Icon = {
  Card: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.5 2.25h-11a1 1 0 0 0-1 1v7.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-7.5a1 1 0 0 0-1-1m-12 3.5h13m-4 3.5H11"
      ></path>
    </svg>
  ),
  Setting: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 1024 1024"
      {...props}
    >
      <path
        fill="currentColor"
        d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088l-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36l-116.224-25.088l-65.28 113.152l79.68 88.192l-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136l-79.808 88.192l65.344 113.152l116.224-25.024l22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152l24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296l116.288 25.024l65.28-113.152l-79.744-88.192l1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136l79.808-88.128l-65.344-113.152l-116.288 24.96l-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384a192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256a128 128 0 0 0 0-256z"
      ></path>
    </svg>
  ),
  Account: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M11.5 14c4.14 0 7.5 1.57 7.5 3.5V20H4v-2.5c0-1.93 3.36-3.5 7.5-3.5m6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S5 16.12 5 17.5V19h13v-1.5M11.5 5A3.5 3.5 0 0 1 15 8.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8 8.5A3.5 3.5 0 0 1 11.5 5m0 1A2.5 2.5 0 0 0 9 8.5a2.5 2.5 0 0 0 2.5 2.5A2.5 2.5 0 0 0 14 8.5A2.5 2.5 0 0 0 11.5 6Z"
      ></path>
    </svg>
  ),
  Signout: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4 12a.5.5 0 0 0 .5.5h8.793l-2.647 2.646a.5.5 0 1 0 .707.708l3.5-3.5a.5.5 0 0 0 0-.707l-3.5-3.5a.5.5 0 0 0-.707.707l2.647 2.646H4.5a.5.5 0 0 0-.5.5zM17.5 2h-11A2.502 2.502 0 0 0 4 4.5v4a.5.5 0 0 0 1 0v-4A1.5 1.5 0 0 1 6.5 3h11A1.5 1.5 0 0 1 19 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5v-4a.5.5 0 0 0-1 0v4A2.502 2.502 0 0 0 6.5 22h11a2.502 2.502 0 0 0 2.5-2.5v-15A2.502 2.502 0 0 0 17.5 2z"
      ></path>
    </svg>
  ),
  Copy: (props: IconProps) => (
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
        d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
      ></path>
    </svg>
  ),
  Menu: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.5 6.5h15M4.5 12h15m-15 5.5h15"
      ></path>
    </svg>
  ),
  Close: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  ),
};
