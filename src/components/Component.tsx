"use client";
import { DataDescription } from "@/utils/constants";
import { Icons } from "@/utils/icons";
import { DEFAULT_MODE } from "@/utils/utils";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Implementation from "./Implementation";
import ResizableContainer from "./Resizable";
import { useTheme } from "@/hooks/Theme";
import { versionCheck } from "@/scripts/VersionCheck";
import { Skeleton } from "./ui/Skeleton";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

export default function Component({ data }: { data: DataDescription }) {
  const { theme, setTheme } = useTheme();
  // const [mode, setMode] = useState<boolean>(DEFAULT_MODE);
  const [active, setActive] = useState<boolean>(false);
  const [screen, setScreen] = useState<"sm" | "md" | "lg">("sm");

  const router = useRouter();
  const param = usePathname();
  const tempSplit = param?.split("/");
  const pageType = tempSplit[2].split("#")[0];
  const pageName = tempSplit[2].split("#")[1];

  const sizeRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState<number>();
  const [divWidth, setDivWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (sizeRef.current) {
        setDivWidth(sizeRef.current.offsetWidth);
        setWindowWidth(window.innerWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    if (sizeRef.current) {
      setDivWidth(sizeRef.current.offsetWidth);
    }
  }, []);

  const convertToDashed = (str: string) => {
    const convertToArray = str.toLowerCase().split(" ");
    return convertToArray.join("-");
  };

  return (
    <>
      {data ? (
        <div
          className={`w-full container-theme-handler mt-10 ${theme ? "darkComponent" : ""}`}
          id={convertToDashed(data.name)}
        >
          <div className="w-[90%] flex flex-col py-4 gap-4 rounded-xl mx-auto mt-10">
            {versionCheck(data.version_included) ? (
              <div className="max-w-12 text-center text-xs font-light text-success bg-success/30 rounded-full border-2 border-success">
                New
              </div>
            ) : null}
            <Link
              href={`#${convertToDashed(data.name)}`}
              className="text-xl font-medium text-textPrimary group/hashtag flex gap-2 relative transition-all duration-300 ease-linear"
            >
              {data.name}
              <span
                className={twMerge(
                  "text-gray-800 dark:text-gray-200 hidden absolute top-[0.125rem] -left-8",
                  "group-hover/hashtag:inline-block"
                )}
              >
                <Icons.link className="w-6 h-6" />
              </span>
            </Link>
            <p className="text-textSecondary font-normal text-base">
              {data.description}
            </p>
          </div>
          {pageType === "primitives" && (
            <>
              <div className="w-[90%] flex flex-col items-center border-[1px] border-border pt-4 gap-4 rounded-xl mx-auto">
                <div className="w-[95%] h-12 flex justify-between items-center ">
                  <div>
                    <button
                      onClick={() => setTheme(!theme)}
                      className="h-12 w-10 rounded border-[1px] border-border flex justify-center items-center text-textPrimary"
                    >
                      {theme ? (
                        <Icons.moon className="w-6 h-6" />
                      ) : (
                        <Icons.sun className="w-6 h-6" />
                      )}
                    </button>
                  </div>
                  {/* <div className="flex justify-center gap-4 items-center">
                    <button
                      className={`h-12 w-10 rounded border-[1px] ${screen === "sm" ? "border-primary" : "border-border"} flex justify-center items-center text-textPrimary`}
                      onClick={() => setScreen("sm")}
                    >
                      <Icons.mobile className="w-6 h-6" />
                    </button>
                    <button
                      className={`h-12 w-10 rounded border-[1px] ${screen === "md" ? "border-primary" : "border-border"} flex justify-center items-center text-textPrimary  `}
                      onClick={() => setScreen("md")}
                    >
                      <Icons.tablet className="w-[1.25rem] h-6" />
                    </button>
                    <button
                      className={`h-12 w-10 rounded border-[1px] ${screen === "lg" ? "border-primary" : "border-border"} flex justify-center items-center text-textPrimary`}
                      onClick={() => setScreen("lg")}
                    >
                      <Icons.desktop className="w-6 h-6" />
                    </button>
                  </div> */}
                </div>
                <div
                  className="w-full py-10 border-t-[1px] border-border relative flex justify-center items-center"
                  // ref={sizeRef}
                >
                  {/* EDITOR */}
                  <div
                    className={`mx-auto`}
                    // data-darkcomponent={mode ? "dark" : "light"}
                  >
                    {data.component}
                  </div>
                  {/* BACKGROUND */}
                  {theme ? (
                    <div className="bg-slate-950 -z-10 absolute bottom-0 left-0 right-0 top-0 rounded-b-xl bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                  ) : (
                    <div className="bg-blue-100/40 -z-10 absolute bottom-0 left-0 right-0 top-0 rounded-b-xl "></div>
                  )}
                </div>
              </div>
            </>
          )}
          {pageType === "components" && (
            <div
              className={`w-[90%] flex flex-col items-center pt-4 gap-4 rounded-xl mx-auto`}
              ref={sizeRef}
            >
              <div className="w-full h-12 flex justify-between items-center ">
                <div>
                  <button
                    onClick={() => setTheme(!theme)}
                    className="h-10 px-4 rounded border-[1px] border-border flex justify-center items-center gap-4 text-center text-textPrimary"
                  >
                    {theme ? (
                      <>
                        <Icons.moon className="w-6 h-6" /> Dark
                      </>
                    ) : (
                      <>
                        <Icons.sun className="w-6 h-6" /> Light
                      </>
                    )}
                  </button>
                </div>
              </div>
              {divWidth && divWidth !== 0 ? (
                <>
                  <ResizableContainer
                    maxWidth={divWidth - 15}
                    minWidth={400}
                    initialWidth={0}
                  >
                    {data.component}
                  </ResizableContainer>
                </>
              ) : (
                <div className="flex w-full min-h-[800px]">
                  <Skeleton className="min-h-full min-w-[calc(100%-1rem)] rounded-lg" />
                  <div className="w-4 flex justify-center items-center cursor-col-resize z-10">
                    <div className="min-h-8 bg-primary rounded-full min-w-[0.25rem]"></div>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="w-[90%] flex flex-col py-4 gap-4 rounded-xl mx-auto items-start mb-4">
            <button
              className="text-accent flex justify-center items-center gap-2 text-center"
              onClick={() => setActive(!active)}
            >
              {active ? (
                <>
                  <Icons.arrow className="-rotate-90" /> Hide Implementation
                </>
              ) : (
                <>
                  See Implementation <Icons.arrow className="rotate-90" />
                </>
              )}
            </button>
          </div>
          <Implementation
            implementation={data.implementation}
            active={active}
          />
        </div>
      ) : (
        router.push("/")
      )}
    </>
  );
}

const LinkHashtag = ({ className }: { className?: string }) => {
  const convertToDashed = (str: string) => {
    const convertToArray = str.toLowerCase().split(" ");
    return convertToArray.join("-");
  };
  return (
    <span
      className={twMerge(
        "text-gray-800 dark:text-gray-200 hidden absolute top-[0.125rem] -left-8",
        className
      )}
    >
      <Icons.link className="w-6 h-6" />
    </span>
  );
};
