"use client";
import { DataDescription } from "@/utils/constants";
import { Icons } from "@/utils/icons";
import { DEFAULT_MODE } from "@/utils/utils";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Implementation from "./Implementation";
import ResizableContainer from "./Resizable";

export default function Component({ data }: { data: DataDescription }) {
  const [mode, setMode] = useState<boolean>(DEFAULT_MODE);
  const [active, setActive] = useState<boolean>(false);
  const [screen, setScreen] = useState<"sm" | "md" | "lg">("sm");

  const router = useRouter();
  const param = usePathname();
  var splitParams = param?.split("/");

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

  useEffect(() => {
    if (!mode) {
      document.getElementById("container")?.classList.remove("darkComponent");
    } else {
      document.getElementById("container")?.classList.add("darkComponent");
    }
  }, [mode]);

  return (
    <>
      {data ? (
        <>
          <div className="w-[90%] flex flex-col py-4 gap-4 rounded-xl mx-auto">
            <h1 className="text-xl font-medium text-textPrimary">
              {data.name}
            </h1>
            <p className="text-textSecondary font-normal text-base">
              {data.description}
            </p>
          </div>
          {splitParams[2] === "primitives" && (
            <>
              <div className="w-[90%] flex flex-col items-center border-[1px] border-border pt-4 gap-4 rounded-xl mx-auto">
                <div className="w-[95%] h-12 flex justify-between items-center ">
                  <div>
                    <button
                      onClick={() => setMode(!mode)}
                      className="h-12 w-10 rounded border-[1px] border-border flex justify-center items-center text-textPrimary"
                    >
                      {mode ? (
                        <Icons.moon className="w-6 h-6" />
                      ) : (
                        <Icons.sun className="w-6 h-6" />
                      )}
                    </button>
                  </div>
                  <div className="flex justify-center gap-4 items-center">
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
                  </div>
                </div>
                <div
                  className="w-full py-10 border-t-[1px] border-border relative"
                  ref={sizeRef}
                >
                  {/* EDITOR */}
                  <div
                    className={`h-full mx-auto bg-secondary @container ${screen === "sm" && "w-[420px] h-[860px] overflow-y-auto scrollbar-vertical"} ${screen === "md" && "w-[720px] h-[860px] overflow-y-auto scrollbar-vertical"} ${screen === "lg" && "min-w-[920px] h-[860px] overflow-y-auto scrollbar-vertical"}`}
                  >
                    {data.component}
                  </div>
                  {/* BACKGROUND */}
                  {mode ? (
                    <div className="bg-slate-950 -z-10 absolute bottom-0 left-0 right-0 top-0 rounded-b-xl bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                  ) : (
                    <div className="absolute inset-0 -z-10 rounded-b-xl h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                  )}
                </div>
              </div>
            </>
          )}
          {splitParams[2] === "components" && (
            <div
              className="w-[90%] flex flex-col items-center pt-4 gap-4 rounded-xl mx-auto"
              ref={sizeRef}
            >
              <div className="w-full h-12 flex justify-between items-center ">
                <div>
                  <button
                    onClick={() => setMode(!mode)}
                    className="h-10 px-4 rounded border-[1px] border-border flex justify-center items-center gap-4 text-center text-textPrimary"
                  >
                    {mode ? (
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
                <ResizableContainer
                  maxWidth={divWidth - 15}
                  minWidth={400}
                  initialWidth={0}
                >
                  {data.component}
                </ResizableContainer>
              ) : null}
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
        </>
      ) : (
        router.push("/")
      )}
    </>
  );
}
