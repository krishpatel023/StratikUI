import { DataDescription, ImplementationNode } from "@/utils/constants";
import { twMerge } from "tailwind-merge";

type TooltipWrapperType = {
  children: React.ReactNode;
  className?: string;
};
type TooltipTriggerType = {
  children: React.ReactNode;
};
type TooltipContentType = {
  children: React.ReactNode;
  direction?: "top" | "bottom" | "left" | "right";
  className?: string;
};
function TooltipWrapper({ children, className }: TooltipWrapperType) {
  return (
    <div className={twMerge("group/tooltip relative", className)}>
      {children}
    </div>
  );
}
function TooltipTrigger({ children }: TooltipTriggerType) {
  return <div>{children}</div>;
}

function TooltipContent({
  children,
  direction = "top",
  className,
}: TooltipContentType) {
  return (
    <div
      className={twMerge(
        "hidden group-hover/tooltip:flex group-hover/tooltip:absolute z-50 max-w-80 w-max h-full",
        direction === "top" &&
          "bottom-[115%] left-1/2 -translate-x-1/2 items-end justify-center",
        direction === "bottom" &&
          "top-[115%] left-1/2 -translate-x-1/2 items-start",
        direction === "left" && "right-[110%] top-0 items-center",
        direction === "right" && "left-[110%] top-0 items-center",
        className
      )}
      aria-side={direction}
    >
      <div className="w-max h-max px-4 py-3 text-sm text-s_textSecondary text-center font-semibold shadow-md rounded-md bg-s_background border-[1px] border-neutral-200 dark:border-neutral-800">
        {children}
      </div>
    </div>
  );
}

function Demo() {
  return (
    <div className="w-80 min-h-[30rem] mx-auto flex flex-col justify-center items-center gap-10">
      <TooltipWrapper>
        <TooltipTrigger>
          <button className="text-s_textPrimary font-medium bg-neutral-200 dark:bg-neutral-600 px-4 py-2 rounded-md">
            Hover Me
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <h1>This is a tooltip message</h1>
        </TooltipContent>
      </TooltipWrapper>

      <TooltipWrapper>
        <TooltipTrigger>
          <button className="text-s_textPrimary font-medium bg-neutral-200 dark:bg-neutral-600 px-4 py-2 rounded-md">
            Hover Me
          </button>
        </TooltipTrigger>
        <TooltipContent direction="right">
          <h1>
            This is a tooltip message to demonstrate it can deal with long text
            messages easily. Let's make this message a little bit longer.
          </h1>
        </TooltipContent>
      </TooltipWrapper>

      <TooltipWrapper>
        <TooltipTrigger>
          <button className="text-s_textPrimary font-medium bg-neutral-200 dark:bg-neutral-600 px-4 py-2 rounded-md">
            Hover Me
          </button>
        </TooltipTrigger>
        <TooltipContent direction="left">
          <h1>This is a tooltip</h1>
        </TooltipContent>
      </TooltipWrapper>

      <TooltipWrapper>
        <TooltipTrigger>
          <button className="text-s_textPrimary font-medium bg-neutral-200 dark:bg-neutral-600 px-4 py-2 rounded-md">
            Hover Me
          </button>
        </TooltipTrigger>
        <TooltipContent direction="bottom">
          <h1>
            This is a tooltip message to demonstrate it can deal with long text
            messages easily. Let's make this message a little bit longer.
          </h1>
        </TooltipContent>
      </TooltipWrapper>
    </div>
  );
}

const CodeTsx: string = `type TooltipWrapperType = {
  children: React.ReactNode;
  className?: string;
};
type TooltipTriggerType = {
  children: React.ReactNode;
};
type TooltipContentType = {
  children: React.ReactNode;
  direction?: "top" | "bottom" | "left" | "right";
  className?: string;
};
function TooltipWrapper({ children, className }: TooltipWrapperType) {
  return (
    <div className={twMerge("group/tooltip relative", className)}>
      {children}
    </div>
  );
}
function TooltipTrigger({ children }: TooltipTriggerType) {
  return <div>{children}</div>;
}

function TooltipContent({
  children,
  direction = "top",
  className,
}: TooltipContentType) {
  return (
    <div
      className={twMerge(
        "hidden group-hover/tooltip:flex group-hover/tooltip:absolute z-50 max-w-80 w-max h-full",
        direction === "top" &&
          "bottom-[115%] left-1/2 -translate-x-1/2 items-end justify-center",
        direction === "bottom" &&
          "top-[115%] left-1/2 -translate-x-1/2 items-start",
        direction === "left" && "right-[110%] top-0 items-center",
        direction === "right" && "left-[110%] top-0 items-center",
        className
      )}
      aria-side={direction}
    >
      <div className="w-max h-max px-4 py-3 text-sm text-s_textSecondary text-center font-semibold shadow-md rounded-md bg-s_background border-[1px] border-neutral-200 dark:border-neutral-800">
        {children}
      </div>
    </div>
  );
}`;

const CodeJsx: string = `function TooltipWrapper({ children, className }) {
  return (
    <div className={twMerge("group/tooltip relative", className)}>
      {children}
    </div>
  );
}
function TooltipTrigger({ children }) {
  return <div>{children}</div>;
}

function TooltipContent({
  children,
  direction = "top",
  className,
}) {
  return (
    <div
      className={twMerge(
        "hidden group-hover/tooltip:flex group-hover/tooltip:absolute z-50 max-w-80 w-max h-full",
        direction === "top" &&
          "bottom-[115%] left-1/2 -translate-x-1/2 items-end justify-center",
        direction === "bottom" &&
          "top-[115%] left-1/2 -translate-x-1/2 items-start",
        direction === "left" && "right-[110%] top-0 items-center",
        direction === "right" && "left-[110%] top-0 items-center",
        className
      )}
      aria-side={direction}
    >
      <div className="w-max h-max px-4 py-3 text-sm text-s_textSecondary text-center font-semibold shadow-md rounded-md bg-s_background border-[1px] border-neutral-200 dark:border-neutral-800">
        {children}
      </div>
    </div>
  );
}`;

const DemoString: string = `function Demo() {
  return (
    <div className="w-80 min-h-[30rem] mx-auto flex flex-col justify-center items-center gap-10">
      <TooltipWrapper>
        <TooltipTrigger>
          <button className="text-s_textPrimary font-medium bg-neutral-200 dark:bg-neutral-600 px-4 py-2 rounded-md">
            Hover Me
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <h1>This is a tooltip message</h1>
        </TooltipContent>
      </TooltipWrapper>

      <TooltipWrapper>
        <TooltipTrigger>
          <button className="text-s_textPrimary font-medium bg-neutral-200 dark:bg-neutral-600 px-4 py-2 rounded-md">
            Hover Me
          </button>
        </TooltipTrigger>
        <TooltipContent direction="right">
          <h1>
            This is a tooltip message to demonstrate it can deal with long text
            messages easily. Let's make this message a little bit longer.
          </h1>
        </TooltipContent>
      </TooltipWrapper>

      <TooltipWrapper>
        <TooltipTrigger>
          <button className="text-s_textPrimary font-medium bg-neutral-200 dark:bg-neutral-600 px-4 py-2 rounded-md">
            Hover Me
          </button>
        </TooltipTrigger>
        <TooltipContent direction="left">
          <h1>This is a tooltip</h1>
        </TooltipContent>
      </TooltipWrapper>

      <TooltipWrapper>
        <TooltipTrigger>
          <button className="text-s_textPrimary font-medium bg-neutral-200 dark:bg-neutral-600 px-4 py-2 rounded-md">
            Hover Me
          </button>
        </TooltipTrigger>
        <TooltipContent direction="bottom">
          <h1>
            This is a tooltip message to demonstrate it can deal with long text
            messages easily. Let's make this message a little bit longer.
          </h1>
        </TooltipContent>
      </TooltipWrapper>
    </div>
  );
}`;

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    content: ["tailwind-css", "twMerge"],
  },
  {
    type: "code",
    content: [
      {
        name: "Name",
        content: [
          { language: "tsx", code: CodeTsx },
          { language: "jsx", code: CodeJsx },
        ],
      },
      {
        name: "Implementation",
        content: [
          { language: "tsx", code: DemoString },
          { language: "jsx", code: DemoString },
        ],
      },
    ],
  },
];

const Data: DataDescription = {
  name: "Tooltip",
  description:
    "This can be used to give information about somthing that maybe needed.",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.0.7",
  display: true,
};

export default Data;
