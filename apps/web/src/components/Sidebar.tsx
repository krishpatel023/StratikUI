"use client";

import SidebarData from "@/data/Sidebar";
import { useTheme } from "@/hooks/Theme";
import { useInternalPostHog } from "@/hooks/useInternalPostHog";
import { useInternalState } from "@/hooks/useInternalState";
import type { IconProps } from "@/utils/constants";
import { capitalize } from "@/utils/helper";
import { Icons } from "@/utils/icons";
import { Links } from "@/utils/utils";
import { usePathname } from "next/navigation";
import type React from "react";
import { Fragment, useEffect, useState } from "react";
import { Button, Link } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export default function Sidebar() {
  const { sidebar, setSidebar } = useInternalState();
  const [state, setState] = useState<"fixed" | "hover">("fixed");

  function closeSidebarOnMouseLeave() {
    if (state === "hover" && sidebar) {
      setSidebar(false);
    }
  }

  const path = usePathname();
  const sidebarVisibilityCondition = path !== "/" && path.split("/")[1] !== "blogs";

  return (
    <>
      {/* Large Screen */}
      {sidebarVisibilityCondition && (
        <>
          <div
            className={twMerge(
              "peer z-[9999] hidden sm:flex fixed h-full w-[18.25rem] left-0 top-16 justify-end",
              state === "hover" && "transition-all duration-[600ms]",
              state === "hover" && !sidebar && "-left-full",
            )}
            onMouseLeave={closeSidebarOnMouseLeave}
            data-sidebar-state={state}
            data-sidebar-open={sidebar}
          >
            <div
              className={twMerge(
                "h-[92%] w-full bg-background",
                state === "hover" && "rounded-lg h-[calc(100dvh-4.75rem)] w-[17.5rem] border-[2px] border-secondary",
              )}
            >
              <SidebarArrangement allowClose={false} setSidebar={setSidebar} pathname={path} />
              <SidebarFooter setState={setState} />
            </div>
          </div>
          <div
            className={twMerge(
              "min-h-full min-w-[18.25rem] hidden sm:block transition-all duration-500",
              state === "fixed" ? "left-0" : "absolute -left-full",
            )}
          />
          <SidebarDetectors state={state} setState={setState} sidebar={sidebar} setSidebar={setSidebar} />
        </>
      )}

      {/* Mobile Version */}
      <SidebarSmall sidebar={sidebar} setSidebar={setSidebar} pathname={path} />
    </>
  );
}

function SidebarSmall({
  sidebar,
  setSidebar,
  pathname,
}: {
  sidebar: boolean;
  setSidebar: (sidebar: boolean) => void;
  pathname: string;
}) {
  const { theme, toggleTheme } = useTheme();
  function sidebarSidebar() {
    if (document.body.clientWidth > 600) return;
    if (sidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  const { VisitedSocials } = useInternalPostHog();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    sidebarSidebar();
  }, [sidebar]);
  return (
    <div
      className={twMerge(
        "peer z-[9999] w-full h-[calc(100dvh-3.75rem)] bg-background flex flex-col justify-between sm:hidden fixed top-16 data-[sidebar-open=false]:-right-full data-[sidebar-open=true]:right-0 transition-all duration-500",
      )}
      data-sidebar-open={sidebar}
    >
      <SidebarArrangement allowClose={true} setSidebar={setSidebar} pathname={pathname} />
      <div className="w-full h-14 px-3 py-2 flex justify-between items-center border-t border-outline-secondary">
        <button
          type="button"
          className="w-8 h-10 flex justify-center items-center rounded text-foreground"
          onClick={() => toggleTheme()}
          aria-label="Toggle Theme"
        >
          {theme ? <Icons.moon className="w-5 h-5" /> : <Icons.sun className="w-5 h-5" />}
        </button>

        <span className="h-full flex gap-6 justify-center items-center">
          <Link
            href={Links.personal.twitter}
            className="text-foreground"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            onPress={() => VisitedSocials("twitter", "personal", "sidebar")}
          >
            <Icons.twitter className="w-4 h-4" />
          </Link>
          <Link
            href={Links.stratikui.github}
            className="text-foreground"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            onPress={() => VisitedSocials("github", "stratikui", "sidebar")}
          >
            <Icons.gitHub className="w-5 h-5" />
          </Link>
        </span>
      </div>
    </div>
  );
}

function SidebarArrangement({
  allowClose,
  setSidebar,
  pathname,
}: {
  allowClose: boolean;
  setSidebar: (sidebar: boolean) => void;
  pathname: string;
}) {
  function handleClick() {
    if (allowClose) setSidebar(false);
  }
  return (
    <div
      className="h-[calc(100%-3.4rem)] w-full px-8 py-6 overflow-y-auto scrollbar-y flex flex-col gap-8"
      style={
        {
          "--sidebar-width": "7px",
        } as React.CSSProperties
      }
    >
      {SidebarData.map((item, i) => (
        <Fragment key={i}>
          {item.type === "title" && item.flag === "default" && (
            <div className="flex flex-col gap-[0.5rem]">
              <h2 className="text-foreground text-base mb-2">{capitalize(item.name)}</h2>
              {item.children.map((child, index) => (
                <Link
                  key={index}
                  href={`/${child.link}`}
                  className={twMerge(
                    "text-secondary-foreground hover:text-accent-secondary mx-3 text-[0.92rem] data-[active=true]:text-accent-secondary outline-none  transition-all duration-500 md:hover:scale-[101%] pressed:animate-press py-0.5 w-max",
                    item.name !== "hooks" && "capitalize",
                  )}
                  onPress={handleClick}
                  data-active={pathname === `/${child.link}`}
                >
                  {child.name.replaceAll("-", " ")}
                </Link>
              ))}
            </div>
          )}
          {item.type === "default" && (
            <Link
              href={`/${item.link}`}
              className={twMerge(
                "text-secondary-foreground hover:text-accent-secondary mx-3 text-[0.92rem] data-[active=true]:text-accent-secondary outline-none  transition-all duration-500 md:hover:scale-[101%] pressed:animate-press py-0.5 w-max",
                item.name !== "hooks" && "capitalize",
              )}
              onPress={handleClick}
              data-active={pathname === `/${item.link}`}
            >
              {item.name}
            </Link>
          )}
        </Fragment>
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
  return (
    <>
      {state === "hover" && !sidebar && (
        <div
          className="z-[9998] w-4 h-full bg-transparent absolute top-0 left-0"
          onMouseEnter={() => setSidebar(true)}
        />
      )}
      {state === "hover" && !sidebar && (
        <Button
          className="z-[9999] hidden sm:flex w-10 h-10 bg-primary border border-outline-secondary text-foreground fixed bottom-4 left-4 rounded-lg  justify-center items-center transition-all duration-300 pressed:scale-95 hover:scale-110"
          onPress={() => {
            setState((prevState) => (prevState === "hover" ? "fixed" : "hover"));
            setSidebar(true);
          }}
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
        className="outline-none hover:scale-110 hover:bg-secondary size-max p-2 rounded-lg pressed:scale-95 transition-all duration-300 hover:border border-outline-secondary"
        onPress={() => setState((state) => (state === "fixed" ? "hover" : "fixed"))}
      >
        <SidebarIcon className="w-6 h-6" />
      </Button>
    </div>
  );
}

export const SidebarIcon = (props: IconProps) => (
  <svg height="200" width="200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Sidebar Icon</title>
    <path
      d="M9.944 2.25c-1.838 0-3.294 0-4.433.153c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87c-.153 1.14-.153 2.595-.153 4.433v2.112c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.433.153h5.022a.768.768 0 0 0 .072-.001c1.384-.004 2.523-.027 3.451-.152c1.172-.158 2.121-.49 2.87-1.238c.748-.749 1.08-1.698 1.238-2.87c.153-1.14.153-2.595.153-4.433v-2.112c0-1.838 0-3.294-.153-4.433c-.158-1.172-.49-2.121-1.238-2.87c-.749-.748-1.698-1.08-2.87-1.238c-.928-.125-2.067-.148-3.45-.152a.763.763 0 0 0-.073 0l-.91-.001H9.944Zm4.306 1.5H10c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812c-.423.423-.677 1.003-.812 2.009c-.138 1.028-.14 2.382-.14 4.289v2c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008c.423.423 1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4.25V3.75Zm1.5 16.494c1.034-.01 1.858-.042 2.54-.134c1.005-.135 1.585-.389 2.008-.812c.423-.423.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008c-.423-.423-1.003-.677-2.009-.812c-.68-.092-1.505-.123-2.539-.134v16.488Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
