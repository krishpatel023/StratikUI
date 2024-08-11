"use client";

import SidebarData from "@/data/Sidebar";
import { useTheme } from "@/hooks/Theme";
import { useInternalState } from "@/hooks/useInternalState";
import { IconProps } from "@/utils/constants";
import { capitalize } from "@/utils/helper";
import { Icons } from "@/utils/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export default function Sidebar() {
  const { sidebar, setSidebar } = useInternalState();
  const [state, setState] = useState<"fixed" | "hover">("fixed");

  function closeSidebarOnMouseLeave() {
    if (state === "hover" && sidebar) {
      setSidebar(false);
    }
  }
  return (
    <>
      {/* Large Screen */}
      <div
        className={twMerge(
          "hidden sm:flex fixed h-full w-[18.25rem] left-0 justify-end",
          state === "hover" && "transition-all duration-500",
          state === "hover" && !sidebar && "-left-full"
        )}
        onMouseLeave={closeSidebarOnMouseLeave}
      >
        <div
          className={twMerge(
            "h-[92%] w-full bg-background ",
            state === "hover" &&
              "rounded-lg h-[calc(100dvh-4.75rem)] w-[17.5rem] border-[2px] border-secondary"
          )}
        >
          <SidebarArrangement />
          <SidebarFooter setState={setState} />
        </div>
      </div>
      <div
        className={twMerge(
          "min-h-full min-w-[18.25rem] hidden sm:block transition-all duration-500",
          state === "fixed" ? "left-0" : "absolute -left-full"
        )}
      />

      {/* Mobile Version */}
      <SidebarSmall sidebar={sidebar} />

      <SidebarDetectors
        state={state}
        setState={setState}
        sidebar={sidebar}
        setSidebar={setSidebar}
      />
    </>
  );
}

function SidebarSmall({ sidebar }: { sidebar: boolean }) {
  const { theme, toggleTheme } = useTheme();
  function sidebarSidebar() {
    if (document.body.clientWidth > 600) return;
    if (sidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  useEffect(() => {
    sidebarSidebar();
  }, [sidebar]);
  return (
    <div
      className={twMerge(
        "w-full h-[calc(100dvh-3.75rem)] bg-neutral-100/95 dark:bg-neutral-950/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-200/80 dark:supports-[backdrop-filter]:bg-neutral-950/99 flex flex-col justify-between sm:hidden fixed top-16 data-[open=false]:-right-full data-[open=true]:right-0 transition-all duration-500"
      )}
      data-open={sidebar}
    >
      <SidebarArrangement />
      <div className="w-full h-14 px-3 py-2 flex justify-between items-center border-t border-outline-secondary">
        <button
          className="w-8 h-10 flex justify-center items-center rounded text-foreground"
          onClick={() => toggleTheme()}
          aria-label="Toggle Theme"
        >
          {theme ? (
            <Icons.moon className="w-5 h-5" />
          ) : (
            <Icons.sun className="w-5 h-5" />
          )}
        </button>

        <span className="h-full flex gap-6 justify-center items-center">
          <Link href="/settings" className="text-foreground">
            <Icons.twitter className="w-4 h-4" />
          </Link>
          <Link href="/settings" className="text-foreground">
            <Icons.gitHub className="w-5 h-5" />
          </Link>
        </span>
      </div>
    </div>
  );
}

function SidebarArrangement() {
  return (
    <div className="h-[calc(100%-3.4rem)] w-full px-8 py-6 overflow-y-auto scrollbar-vertical flex flex-col gap-8">
      {SidebarData.map((item, index) => (
        <>
          {item.type === "title" && item.flag === "default" && (
            <div className="flex flex-col gap-[0.5rem]">
              <h2 className="text-foreground text-base mb-2">
                {capitalize(item.name)}
              </h2>
              {item.children.map((child, index) => (
                <Link
                  href={child.link}
                  className="text-secondary-foreground hover:text-accent-secondary px-3 text-sm  hover:translate-x-2 transition-all duration-300"
                >
                  {item.name !== "hooks" ? capitalize(child.name) : child.name}
                </Link>
              ))}
            </div>
          )}
          {item.type === "default" && (
            <div className="text-secondary-foreground text-sm hover:text-accent-secondary hover:translate-x-2 transition-all duration-300">
              <Link href={item.link}>{item.name}</Link>
            </div>
          )}
        </>
      ))}
    </div>
  );
}

function SidebarDetectors({
  state,
  setState,
  sidebar,
  setSidebar,
}: {
  state: "fixed" | "hover";
  setState: React.Dispatch<React.SetStateAction<"fixed" | "hover">>;
  sidebar: boolean;
  setSidebar: (sidebar: boolean) => void;
}) {
  function handleStateChange(state: "fixed" | "hover") {}

  return (
    <>
      {state === "hover" && !sidebar && (
        <div
          className="w-4 h-full bg-transparent absolute top-0 left-0"
          onMouseEnter={() => setSidebar(true)}
        ></div>
      )}
      {state === "hover" && !sidebar && (
        <Button
          className="hidden sm:flex w-10 h-10 bg-primary border border-outline-secondary text-foreground fixed bottom-4 left-4 rounded-lg  justify-center items-center"
          onPress={() =>
            setState((prevState) => (prevState === "hover" ? "fixed" : "hover"))
          }
        >
          <SidebarIcon className="w-6 h-6" />
        </Button>
      )}
    </>
  );
}

function SidebarFooter({
  setState,
}: {
  setState: React.Dispatch<React.SetStateAction<"fixed" | "hover">>;
}) {
  return (
    <div className="text-foreground w-full h-12 flex justify-end px-4">
      <Button
        className="outline-none"
        onPress={() =>
          setState((state) => (state === "fixed" ? "hover" : "fixed"))
        }
      >
        <SidebarIcon className="w-6 h-6" />
      </Button>
    </div>
  );
}

export const SidebarIcon = (props: IconProps) => (
  <svg
    height="200"
    width="200"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.944 2.25c-1.838 0-3.294 0-4.433.153c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87c-.153 1.14-.153 2.595-.153 4.433v2.112c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.433.153h5.022a.768.768 0 0 0 .072-.001c1.384-.004 2.523-.027 3.451-.152c1.172-.158 2.121-.49 2.87-1.238c.748-.749 1.08-1.698 1.238-2.87c.153-1.14.153-2.595.153-4.433v-2.112c0-1.838 0-3.294-.153-4.433c-.158-1.172-.49-2.121-1.238-2.87c-.749-.748-1.698-1.08-2.87-1.238c-.928-.125-2.067-.148-3.45-.152a.763.763 0 0 0-.073 0l-.91-.001H9.944Zm4.306 1.5H10c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812c-.423.423-.677 1.003-.812 2.009c-.138 1.028-.14 2.382-.14 4.289v2c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008c.423.423 1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4.25V3.75Zm1.5 16.494c1.034-.01 1.858-.042 2.54-.134c1.005-.135 1.585-.389 2.008-.812c.423-.423.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008c-.423-.423-1.003-.677-2.009-.812c-.68-.092-1.505-.123-2.539-.134v16.488Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
