import { twMerge } from "tailwind-merge";

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
      className={twMerge("mt-6 border-l-2 pl-6 italic", className)}
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
      className="text-neuteral-900 dark:text-neutral-200 underline underline-offset-2"
    />
  );
}
