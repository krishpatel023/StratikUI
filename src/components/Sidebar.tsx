"use client";
import useClickOutside from "@/hooks/ClickOutside";
import { versionCheck } from "@/scripts/VersionCheck";
// import { versionCheck } from "@/packages";
import { FileData } from "@/utils/constants";
import { Icons } from "@/utils/icons";
import { useParams, usePathname, useRouter } from "next/navigation";
import { Fragment, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Sidebar(params: { params: { data: FileData[] } }) {
  const param = usePathname();
  var splitParams = param?.split("/");
  const router = useRouter();

  const [active, setActive] = useState<boolean>(false);
  const ref = useRef(null);
  useClickOutside(ref, () => {
    if (active) setActive(false);
  });
  return (
    <>
      <div
        className={`w-[18rem] fixed h-[calc(100dvh-3.5rem)] overflow-y-auto border-r-2 border-border scrollbar-vertical transition-all duration-300 ease-linear z-[9999] bg-background ${active ? "left-0" : "-left-[18rem]"}`}
        ref={ref}
      >
        {params.params.data.map((item: FileData, i: number) => (
          <Fragment key={i}>
            {Array.isArray(item.content) &&
              item.content.length > 0 &&
              item.display && (
                <div className="w-full pl-6 mt-6">
                  <h1 className="text-textPrimary font-semibold text-base capitalize">
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
                                // setActive(false);
                                router.push(
                                  `/docs/${item.name}/${subitem.name} `
                                );
                              }}
                            >
                              <h1
                                className={` font-normal text-sm capitalize  mt-3 flex justify-start items-center flex-wrap gap-4  ${splitParams[3] === subitem.name ? "text-accent" : "text-textSecondary hover:text-accent hover:cursor-pointer hover:ml-2 transition-all ease-linear duration-150"}`}
                              >
                                {subitem.name.replace(/-/g, " ")}
                                {subitem.version && isNew && (
                                  <div className="px-2 text-xs font-light text-success bg-success/30 rounded-full border-2 border-success">
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
      <div
        className={twMerge(
          "h-full fixed text-textPrimary w-6 flex justify-center items-center left-0 transition-all ease-linear z-[9999]",
          active && "hidden"
        )}
      >
        <button
          className="w-6 h-16 border-r-2 border-t-2 border-b-2 border-border rounded-r-lg text-center bg-background"
          onClick={() => setActive(!active)}
        >
          <Icons.chevron className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}
