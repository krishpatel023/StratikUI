import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";
import { convertToDashed } from "@/utils/utils";
import Link from "next/link";
import { Icons } from "@/utils/icons";

export const UL = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul className={twMerge("my-6 ml-10 list-disc", className)} {...props} />
  );
};

export const OL = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLOListElement>) => {
  return (
    <ol className={twMerge("my-6 ml-10 list-decimal ", className)} {...props} />
  );
};

export const LI = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <li
      className={twMerge("mt-2 text-sm dark:text-neutral-300", className)}
      {...props}
    />
  );
};

export const BLOCK_QUOTE = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <blockquote
      className={twMerge("border-l-2 pl-6 italic", className)}
      {...props}
    />
  );
};

export const HR = ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => {
  return <hr className="my-4 md:my-8" {...props} />;
};

export function Break(height: number) {
  return <div className="min-w-full" style={{ height: `${height}rem` }}></div>;
}

export function Anchor({ ...props }) {
  return (
    <a
      {...props}
      target="_blank"
      rel="noreferrer"
      className="text-neuteral-900 dark:text-neutral-200 underline underline-offset-2"
    />
  );
}

export function ImageComponent({ ...props }) {
  return (
    <>
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    </>
  );
}

export const H1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <Link
      href={`#${convertToDashed(children as string)}`}
      className="text-xl font-medium text-foreground group/hashtag flex gap-2 relative transition-all duration-300 ease-linear"
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
    <p className="text-neutral-800 dark:text-neutral-200 font-semibold text-lg">
      {children}
    </p>
  );
};

export const H3 = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-neutral-800 dark:text-neutral-400 font-normal text-base">
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

export const BACKTICK = ({ ...props }) => {
  return (
    <code
      className="py-1 px-2 bg-neutral-200 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 rounded-lg"
      {...props}
    />
  );
};
