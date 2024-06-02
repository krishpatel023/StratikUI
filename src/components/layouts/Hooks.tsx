import { versionCheck } from "@/scripts/VersionCheck";
import { DataDescription } from "@/utils/constants";
import { Icons } from "@/utils/icons";
import { convertToDashed } from "@/utils/utils";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Implementation from "../Implementation";

export default function HooksLayout({ data }: { data: DataDescription }) {
  return (
    <>
      {data && (
        <div
          className={`w-full mb-16 container-theme-handler mt-10 `}
          id={convertToDashed(data.name)}
        >
          <>
            <div className="w-full flex flex-col py-4 gap-4 rounded-xl mx-auto mt-10">
              {versionCheck(data.version_included) ? (
                <div className="max-w-12 text-center text-xs font-light text-success bg-success/30 rounded-full border-2 border-success">
                  New
                </div>
              ) : null}
              <Link
                href={`#${convertToDashed(data.name)}`}
                className="text-xl font-medium text-black dark:text-gray-200 group/hashtag flex gap-2 relative transition-all duration-300 ease-linear"
                aria-label="Get component specific link"
              >
                {data.name}
                <span
                  className={twMerge(
                    "text-black dark:text-gray-200 hidden absolute top-[0.125rem] -left-8",
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
            <div
              className={`w-full flex flex-col items-center justify-center pt-4 gap-4 rounded-xl mx-auto`}
            >
              <Implementation
                implementation={data.implementation}
                active={true}
              />
              <>
                {data.component ? (
                  <>
                    <h1 className="text-xl font-medium text-textPrimary w-full mt-10">
                      Example
                    </h1>
                    <div className="w-full border-[1px] border-slate-200 dark:border-neutral-900  mt-6 rounded-xl mx-auto relative overflow-hidden">
                      {/* EDITOR */}
                      <div className="w-full overflow-x-auto py-10 flex justify-center @container">
                        {data.component}
                      </div>
                    </div>
                  </>
                ) : null}
              </>
            </div>
          </>
        </div>
      )}
    </>
  );
}
