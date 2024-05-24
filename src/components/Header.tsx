"use client";
import useClickOutside from "@/hooks/ClickOutside";
import { useTheme } from "@/hooks/Theme";
import { useInternalState } from "@/hooks/useInternalState";
import { IconProps } from "@/utils/constants";
import { Icons } from "@/utils/icons";
import { Logo } from "@/utils/logo";
import { CURRENT_VERSION } from "@/utils/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [inDocs, setInDocs] = useState(false);
  const { sidebar, setSidebar } = useInternalState();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const url = usePathname();

  useClickOutside(ref, () => {
    if (open) setOpen(false);
  });

  useEffect(() => {
    if (url.includes("/docs")) setInDocs(true);
    else setInDocs(false);
  }, [url]);

  return (
    <div
      className={`w-full sticky top-0 z-50  ${open ? "bg-background" : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"}`}
      ref={ref}
    >
      <div
        className={`w-full h-16 flex justify-between px-2 sm:px-6 md:px-10 items-center ${open ? "" : "border-b border-border/40"}`}
      >
        <div className="flex h-full min-w-[10rem] items-center justify-start sm:justify-center ">
          {inDocs && (
            <button
              className="w-10 h-10 rounded flex justify-center items-center dark:text-white border dark:border-neutral-700 hover:bg-neutral-200/30 dark:hover:bg-neutral-700/30 ml-2 md:ml-0"
              onClick={() => {
                setSidebar(!sidebar);
              }}
            >
              <Icons.bars className="h-6 w-6" />
            </button>
          )}
          <Link
            href="/"
            className="flex h-full items-center justify-center gap-1 font-semibold text-2xl text-textPrimary"
          >
            {theme ? (
              <Logo.dark className="h-16 w-16" />
            ) : (
              <Logo.light className="h-16 w-16" />
            )}
            <span className="hidden sm:block">Stratik / UI</span>
            <span className="ml-4 justify-center items-center text-center px-3 py-[2px] rounded-full text-accent bg-accent/80 border-2 border-accent text-xs font-normal hidden sm:flex">
              v {CURRENT_VERSION}
            </span>
          </Link>
        </div>
        <div className="flex gap-6 items-center">
          <span
            className={
              open ? "hidden" : "h-full items-center gap-6 hidden md:flex"
            }
          >
            <LinkSection />
          </span>
          <div className="flex justify-center items-center gap-4">
            <a
              href="https://github.com/krishpatel023/StratikUI"
              target="_blank"
              className="w-8 h-10 flex justify-center items-center rounded hover:bg-secondary text-textPrimary"
            >
              <Icons.twitter className="w-6 h-4" />
            </a>

            {theme ? (
              <button
                className="w-8 h-10 flex justify-center items-center rounded hover:bg-secondary text-textPrimary"
                onClick={() => toggleTheme()}
              >
                <Icons.moon className="w-6 h-6" />
              </button>
            ) : (
              <button
                className="w-8 h-10 flex justify-center items-center rounded hover:bg-secondary text-textPrimary"
                onClick={() => toggleTheme()}
              >
                <Icons.sun className="w-6 h-6" />
              </button>
            )}
          </div>
          {!inDocs && (
            <button
              className="w-10 h-10 md:hidden hover:bg-secondary rounded flex justify-center items-center relative text-textPrimary"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {open ? (
                <Icons.cross className="h-6 w-6" />
              ) : (
                <Icons.bars className="h-6 w-6" />
              )}
            </button>
          )}
        </div>
      </div>
      {open ? (
        <div className="absolute bg-background min-h-80 w-full top-16 left-0 flex flex-col justify-center border-b-2 border-textSecondary px-6  h-full items-center gap-6">
          <LinkSection />
        </div>
      ) : null}
    </div>
  );
};
export default Header;

const LinkSection = () => {
  return (
    <>
      <Link
        href="/components"
        className="text-textSecondary hover:text-textPrimary"
      >
        Components
      </Link>
      <Link
        href="/premitives"
        className="text-textSecondary hover:text-textPrimary"
      >
        Premitives
      </Link>
      <Link
        href="/feedback"
        className="text-textSecondary hover:text-textPrimary"
      >
        Feedback
      </Link>
    </>
  );
};
