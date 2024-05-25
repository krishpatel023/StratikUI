import { IconProps } from "@/utils/constants";
import { twMerge } from "tailwind-merge";

export const Warning = ({
  className,
  message,
}: {
  className?: string;
  message: string;
}) => {
  return (
    <div
      className={twMerge(
        "max-w-[25rem] px-6 py-4 rounded-lg border border-neutral-700 bg-gradient-to-br from-neutral-900 to-neutral-800 text-neutral-200 flex items-center gap-4 absolute top-6 mx-4 @md:mx-0",
        className
      )}
    >
      <WarningIcon className="w-16 h-16" />
      <p>{message}</p>
    </div>
  );
};

const WarningIcon = (props: IconProps) => (
  <svg
    height="200"
    width="200"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.429 2.746a.5.5 0 0 0-.858 0L1.58 12.743a.5.5 0 0 0 .429.757h11.984a.5.5 0 0 0 .43-.757L8.428 2.746Zm-2.144-.77C7.06.68 8.939.68 9.715 1.975l5.993 9.996c.799 1.333-.161 3.028-1.716 3.028H2.008C.453 15-.507 13.305.292 11.972l5.993-9.997ZM9 11.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-.25-5.75a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-3Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
