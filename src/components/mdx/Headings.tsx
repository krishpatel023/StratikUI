import { Icons } from "@/utils/icons";
import { convertToDashed } from "@/utils/utils";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const H1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <Link
      href={`#${convertToDashed(children as string)}`}
      className="text-xl font-medium text-textPrimary group/hashtag flex gap-2 relative transition-all duration-300 ease-linear mt-10"
    >
      {children}
      <span
        className={twMerge(
          "text-gray-800 dark:text-gray-200 hidden absolute top-[0.125rem] -left-8",
          "group-hover/hashtag:inline-block"
        )}
      >
        <Icons.link className="w-6 h-6" />
      </span>
    </Link>
  );
};

export const H2 = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-neutral-800 dark:text-neutral-400 font-normal text-base mt-4">
      {children}
    </p>
  );
};

export const TEXT = ({ ...props }) => {
  return (
    <p className="text-neutral-800 dark:text-neutral-400 font-normal text-base">
      {props.children}
    </p>
  );
};
