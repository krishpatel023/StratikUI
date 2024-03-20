"use client";
import { useTheme } from "@/hooks/Theme";
import { Icons } from "@/utils/icons";
import { CURRENT_VERSION } from "@/utils/utils";
import Link from "next/link";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-between h-16 px-8">
        <div className="flex h-full min-w-[10rem] items-center justify-center">
          <Link
            href="/"
            className="flex h-full items-center justify-center gap-2 font-semibold text-xl text-textPrimary"
          >
            <Icons.logo className="h-6" />
            Stratik / UI
            <span className="ml-4 flex justify-center items-center text-center px-3 py-[2px] rounded-full text-accent bg-accent/80 border-2 border-accent text-xs font-normal">
              v {CURRENT_VERSION}
            </span>
          </Link>
        </div>
        <div className="flex h-full items-center gap-8">
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
          {/* <Link
          href="/docs"
          className="text-textSecondary hover:text-textPrimary"
        >
          Templates
        </Link> */}
          <div className="flex justify-center items-center gap-4">
            <a
              href="https://github.com/krishpatel023/Atlantic-UI"
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
        </div>
      </div>
    </>
  );
};

export default Header;
