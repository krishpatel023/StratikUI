import { IconProps } from "@/utils/constants";
import { twMerge } from "tailwind-merge";

export default function ArrowHeading({
  className,
  text,
}: {
  className?: string;
  text: string;
}) {
  return (
    <>
      <h1
        className={twMerge(
          "text-foreground flex gap-2 items-center",
          className
        )}
      >
        {text} <ArrowIcon className="mt-4" />
      </h1>
    </>
  );
}

const ArrowIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 14 14"
    {...props}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m11.5 10.5l-3 3l-3-3"></path>
      <path d="M2.5.5h2a4 4 0 0 1 4 4v9"></path>
    </g>
  </svg>
);
