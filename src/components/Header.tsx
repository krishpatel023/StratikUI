"use client";
import { useTheme } from "@/hooks/Theme";
import { useInternalState } from "@/hooks/useInternalState";
import { Icons } from "@/utils/icons";
import { Logo } from "@/utils/logo";
import { CURRENT_VERSION } from "@/utils/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FlattenedItem } from "../scripts/FlattenData";
import { SearchField } from "./search/SearchField";
import dynamic from "next/dynamic";
import useHash from "@/hooks/useHash";
import useScrollToSection from "@/hooks/useScrollToSection";

const CommandPaletteImplementation = dynamic(() =>
  import("./search/Search").then((mod) => mod.CommandPaletteImplementation)
);

export const Header = ({ data }: { data: FlattenedItem[] }) => {
  const { theme, toggleTheme } = useTheme();
  const [inDocs, setInDocs] = useState(false);
  const { sidebar, setSidebar } = useInternalState();

  const url = usePathname();

  useEffect(() => {
    if (url.includes("/docs")) setInDocs(true);
    else setInDocs(false);
  }, [url]);

  // Reading the hashed version
  const hash = useHash();
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    if (hash) scrollToSection(hash);
  }, [hash]);

  return (
    <div className="sticky top-0 z-[999]">
      <CommandPaletteImplementation data={data} />

      <div
        className={`w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-16 flex justify-between px-2 sm:px-6 md:px-10 items-center border-b dark:border-neutral-900`}
      >
        <div className="flex h-full min-w-[10rem] items-center justify-start sm:justify-center ">
          {inDocs && (
            <button
              className="w-10 h-10 rounded flex justify-center items-center dark:text-white border dark:border-neutral-700 hover:bg-neutral-200/30 dark:hover:bg-neutral-700/30 ml-2 md:ml-0"
              onClick={() => {
                setSidebar(!sidebar);
              }}
              aria-label="Open Sidebar"
            >
              <Icons.bars className="h-6 w-6" />
            </button>
          )}
          <Link
            href="/"
            className="flex h-full items-center justify-center gap-1 font-semibold text-2xl text-textPrimary"
            aria-label="Home"
          >
            {theme ? (
              <Logo.dark className="h-16 w-16" />
            ) : (
              <Logo.light className="h-16 w-16" />
            )}
            <span className="hidden sm:block ">Stratik / UI</span>
            <span className="ml-4 justify-center items-center text-center px-3 py-[2px] rounded-full text-accent bg-accent/80 border-2 border-accent text-xs font-normal hidden lg:flex">
              v {CURRENT_VERSION}
            </span>
          </Link>
        </div>
        <div className="flex gap-6 items-center">
          {/* PLACEHOLDER */}
          <SearchField />

          <div className="flex justify-center items-center gap-4">
            <a
              href="https://github.com/krishpatel023/StratikUI"
              target="_blank"
              className="w-8 h-10 flex justify-center items-center rounded hover:bg-secondary text-textPrimary"
              rel="noreferrer"
              aria-label="Twitter Account Link"
            >
              <Icons.twitter className="w-6 h-4" />
            </a>

            <button
              className="w-8 h-10 flex justify-center items-center rounded hover:bg-secondary text-textPrimary"
              onClick={() => toggleTheme()}
              aria-label="Toggle Theme"
            >
              {theme ? (
                <Icons.moon className="w-6 h-6" />
              ) : (
                <Icons.sun className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
