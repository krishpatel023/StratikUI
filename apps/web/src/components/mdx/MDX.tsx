import Image, { type ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";
import { convertToDashed } from "@/utils/utils";
import Link from "next/link";
import { Icons } from "@/utils/icons";

export const UL = ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => {
  return <ul className={twMerge("my-6 ml-10 list-disc", className)} {...props} />;
};

export const OL = ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => {
  return <ol className={twMerge("my-6 ml-10 list-decimal ", className)} {...props} />;
};

export const LI = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
  return <li className={twMerge("mt-2 text-secondary-foreground", className)} {...props} />;
};

export const BLOCK_QUOTE = ({ ...props }: React.HTMLAttributes<HTMLElement>) => {
  const children = props.children as JSX.Element;
  const childrenArray = Array.isArray(children) ? children : [children];

  const msg = childrenArray[1].props.children.split("|");
  const category = msg.length > 1 ? msg[0].toLowerCase() : "";
  const content = category !== "" ? msg[1] : msg[0];

  return (
    <blockquote
      className={twMerge(
        "border-l-[3px] pl-6 border-neutral-700 bg-neutral-400/20 text-secondary-foreground py-2",
        category === "error" && "border-error bg-red-500/20 text-red-950 dark:text-red-300",
        category === "alert" && "border-alert-secondary text-yellow-900 dark:text-yellow-500 bg-yellow-300/20",
        category === "success" && "border-success bg-green-300/20 text-green-900 dark:text-green-400",
        category === "info" && "border-blue-600 bg-blue-500/20 text-blue-900 dark:text-blue-400",
      )}
      {...props}
    >
      {content}
    </blockquote>
  );
};

export const HR = ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => {
  return <hr className="my-4 md:my-8" {...props} />;
};

export function Break(height: number) {
  return <div className="min-w-full" style={{ height: `${height}rem` }} />;
}

export function Anchor({ ...props }) {
  return (
    <a {...props} target="_blank" rel="noreferrer" className="text-primary-foreground underline underline-offset-2" />
  );
}

export function ImageComponent({ ...props }) {
  return (
    <>
      <Image sizes="100vw" style={{ width: "100%", height: "auto" }} {...(props as ImageProps)} />
    </>
  );
}

export const Title = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <Link
      href={`#${convertToDashed(children as string)}`}
      className={twMerge(
        "text-2xl font-medium text-foreground group/hashtag flex gap-2 relative transition-all duration-300 ease-linear",
        className,
      )}
    >
      {children}
      <span
        className={twMerge(
          "text-gray-800 dark:text-gray-200 hidden absolute h-full justify-center items-center -left-8",
          "group-hover/hashtag:flex",
        )}
      >
        <Icons.link className="size-6" />
      </span>
    </Link>
  );
};

export const H1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-4xl font-medium text-foreground group/hashtag flex gap-2 relative transition-all duration-300 ease-linear">
      {children}
    </h1>
  );
};

export const H2 = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-2xl text-primary-foreground font-semibold">{children}</p>;
};

export const H3 = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-secondary-foreground font-normal text-base">{children}</p>;
};

export const TEXT = ({ ...props }) => {
  return <p className="text-secondary-foreground font-normal text-base">{props.children}</p>;
};

export const BACKTICK = ({ ...props }) => {
  return (
    <span
      className="py-1 px-2 bg-neutral-200 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 rounded-lg"
      {...props}
    />
  );
};
