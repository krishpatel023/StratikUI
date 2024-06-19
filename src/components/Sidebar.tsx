"use client";

import useClickOutside from "@/hooks/ClickOutside";
import { useInternalState } from "@/hooks/useInternalState";
import { versionCheck } from "@/scripts/VersionCheck";
import { FileData } from "@/utils/constants";
import { Icons } from "@/utils/icons";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, useRef } from "react";

export default function Sidebar(params: { params: { data: FileData[] } }) {
  const param = usePathname();
  var splitParams = param?.split("/");
  const router = useRouter();

  const { sidebar, setSidebar } = useInternalState();
  const ref = useRef(null);
  useClickOutside(ref, () => {
    if (sidebar) setSidebar(false);
  });
  return (
    <>
      <div
        className={`w-[18rem] fixed h-full top-0 overflow-y-auto border-r-2 border-r-outline scrollbar-vertical transition-all duration-300 ease-linear z-[9999] bg-background ${sidebar ? "left-0" : "-left-[18rem]"}`}
        ref={ref}
      >
        <div className="w-full flex justify-end items-center mt-4 px-4">
          <button onClick={() => setSidebar(false)} aria-label="Close Sidebar">
            <Icons.cross className="w-6 h-6 text-black dark:text-white" />
          </button>
        </div>
        {params.params.data.map((item: FileData, i: number) => (
          <Fragment key={i}>
            {Array.isArray(item.content) &&
              item.content.length > 0 &&
              item.display && (
                <div className="w-full pl-6 mt-6">
                  <h1 className="text-foreground font-semibold text-base capitalize">
                    {item.name}
                  </h1>

                  {Array.isArray(item.content) &&
                    item?.content?.map((subitem: FileData, j: number) => {
                      const isNew =
                        subitem.version && versionCheck(subitem.version);

                      return (
                        <Fragment key={j}>
                          {subitem.display ? (
                            <button
                              className="w-full pl-4 text-wrap"
                              onClick={() => {
                                setSidebar(false);
                                router.push(
                                  `/docs/${item.name}/${subitem.name} `
                                );
                              }}
                              aria-label={`Go to ${subitem.name}'s documentaion`}
                            >
                              <h1
                                className={` font-normal text-sm ${item.name !== "hooks" && "capitalize"}  mt-3 flex justify-start items-center flex-wrap gap-4  ${splitParams[3] === subitem.name ? "text-accent-secondary" : "text-neutral-600 dark:text-neutral-400   hover:text-accent-secondary hover:cursor-pointer hover:ml-2 transition-all ease-linear duration-150"}`}
                              >
                                {subitem.name.replace(/-/g, " ")}
                                {subitem.version && isNew && (
                                  <div className="px-2 text-xs font-light text-success dark:text-success-secondary bg-success/30 rounded-full border-2 border-success-secondary">
                                    New
                                  </div>
                                )}
                              </h1>
                            </button>
                          ) : null}
                        </Fragment>
                      );
                    })}
                </div>
              )}
          </Fragment>
        ))}
        <div className="min-w-full min-h-8"></div>
      </div>
    </>
  );
}
