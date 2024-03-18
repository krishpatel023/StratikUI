"use client";
import { versionCheck } from "@/scripts/VersionCheck";
// import { versionCheck } from "@/packages";
import { FileData } from "@/utils/constants";
import { useParams, usePathname } from "next/navigation";
import { Fragment } from "react";

export default function Sidebar(params: { params: { data: FileData[] } }) {
  const param = usePathname();

  console.log(param);

  return (
    <div className="w-60 left-0 fixed overflow-y-auto h-full border-r-2 border-border">
      <div>
        {params.params.data.map((item: FileData, i: number) => (
          <Fragment key={i}>
            {Array.isArray(item.content) && item.content.length > 0 && (
              <div className="w-full px-6 mt-6">
                <h1 className="text-textPrimary font-semibold text-base capitalize">
                  {item.name}
                </h1>

                {Array.isArray(item.content) &&
                  item?.content?.map((item: FileData, j: number) => (
                    <div className="w-full px-6 text-wrap" key={j}>
                      <h1 className="text-textSecondary font-normal text-sm capitalize  mt-3 flex justify-start items-center gap-2 hover:text-accent hover:cursor-pointer hover:ml-2 transition-all ease-linear duration-150">
                        {item.name}
                        {item.version && versionCheck(item.version) && (
                          <div className="bg-success px-2 text-xs font-light text-green-900 bg-green-100 rounded-full border-2 border-green-500">
                            New
                          </div>
                        )}
                      </h1>

                      {/* {Array.isArray(item.content) &&
                    item.content.map((item: FileData) => (
                      <div>
                        {!Array.isArray(item.content) && item.content.name}
                      </div>
                    ))} */}
                    </div>
                  ))}
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}