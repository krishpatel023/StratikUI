"use client";
import { Icons } from "@/utils/icons";
import { CURRENT_VERSION } from "@/utils/utils";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex h-16 w-full items-center justify-between border-b-[1px] border-border bg-background px-12">
      <div className="flex h-full min-w-[10rem] items-center justify-center">
        <Link
          href="/"
          className="flex h-full items-center justify-center gap-2 font-semibold text-xl"
        >
          <Icons.logo className="h-6" />
          Stratik / UI
          <span className="ml-4 flex justify-center items-center text-center px-3 py-[2px] rounded-full text-blue-800 bg-blue-100 border-2 border-blue-600 text-xs font-normal">
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
            className="w-8 h-10 flex justify-center items-center rounded hover:bg-secondary"
          >
            <Icons.twitter className="w-6 h-4" />
          </a>

          <button className="w-8 h-10 flex justify-center items-center rounded hover:bg-secondary">
            <Icons.sun className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
