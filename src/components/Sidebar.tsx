"use client";
import { versionCheck } from "@/scripts/VersionCheck";
// import { versionCheck } from "@/packages";
import { FileData } from "@/utils/constants";
import { useParams, usePathname, useRouter } from "next/navigation";
import { Fragment } from "react";

export default function Sidebar(params: { params: { data: FileData[] } }) {
  const param = usePathname();
  var splitParams = param?.split("/");
  const router = useRouter();

  return (
    <div className="w-60 left-0 fixed overflow-y-auto h-full border-r-2 border-border scrollbar-vertical">
      {params.params.data.map((item: FileData, i: number) => (
        <Fragment key={i}>
          {Array.isArray(item.content) && item.content.length > 0 && (
            <div className="w-full pl-6 mt-6">
              <h1 className="text-textPrimary font-semibold text-base capitalize">
                {item.name}
              </h1>

              {Array.isArray(item.content) &&
                item?.content?.map((subitem: FileData, j: number) => {
                  const isNew =
                    subitem.version && versionCheck(subitem.version);

                  return (
                    <button
                      className="w-full pl-4 text-wrap"
                      key={j}
                      onClick={() =>
                        router.push(`/docs/${item.name}/${subitem.name} `)
                      }
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
                  );
                })}
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
