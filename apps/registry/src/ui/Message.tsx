import { IconProps } from "@/utils/types";
import { twMerge } from "tailwind-merge";

export default function Message({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={twMerge(
        "px-4 py-3 rounded-md bg-primary border border-outline-secondary text-secondary-foreground flex items-start justify-start text-start gap-4",
        className
      )}
    >
      <MousePointerClick className="min-w-6 min-h-6 w-6 h-6" />
      <div>{children}</div>
    </div>
  );
}

export const MessageIcon = (props: IconProps) => (
  <svg
    height="200"
    width="200"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m20.34 9.32l-14-7a3 3 0 0 0-4.08 3.9l2.4 5.37a1.06 1.06 0 0 1 0 .82l-2.4 5.37A3 3 0 0 0 5 22a3.14 3.14 0 0 0 1.35-.32l14-7a3 3 0 0 0 0-5.36Zm-.89 3.57l-14 7a1 1 0 0 1-1.35-1.3l2.39-5.37a2 2 0 0 0 .08-.22h6.89a1 1 0 0 0 0-2H6.57a2 2 0 0 0-.08-.22L4.1 5.41a1 1 0 0 1 1.35-1.3l14 7a1 1 0 0 1 0 1.78Z"
      fill="currentColor"
    />
  </svg>
);

export const DirectionUp = (props: IconProps) => (
  <svg
    height="200"
    width="200"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.832 17.493L6.32 20.678a2.142 2.142 0 0 1-3-2.756L9.947 4.039a2.142 2.142 0 0 1 3.885 0l6.827 14.083a2.142 2.142 0 0 1-3.057 2.756l-4.713-3.385a2.144 2.144 0 0 0-2.057 0"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

export const PointerRightFill = (props: IconProps) => (
  <svg
    height="200"
    width="200"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.9 4.2A3 3 0 0 0 15.5 3h-11a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h11a3 3 0 0 0 2.4-1.2l4.5-6a3 3 0 0 0 0-3.6l-4.5-6Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const MousePointerClick = (props: IconProps) => (
  <svg
    height="200"
    width="200"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m9 9l5 12l1.774-5.226L21 14L9 9zm7.071 7.071l4.243 4.243M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);
