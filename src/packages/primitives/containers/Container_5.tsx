import {
  DataDescription,
  IconProps,
  ImplementationNode,
} from "@/utils/constants";
import { HighlightGroup, HighlighterItem } from "./Container_3_Helper";
import ArrowHeading from "@/components/ui/ArrowHeading";
import { twMerge } from "tailwind-merge";
function Container({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "relative flex rounded-md border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-black text-white overflow-hidden",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="left-1/2 right-1 top-0 w-[300px] sm:left-auto user-select-none center pointer-events-none absolute h-px max-w-full  -translate-y-1/2 bg-gradient-to-r from-transparent via-neutral-900 dark:via-neutral-400 to-transparent"
      ></div>
      <div
        aria-hidden="true"
        className="hidden dark:block -top-1 left-1/2 right-1 h-[300px] w-[320px] sm:left-auto user-select-none center pointer-events-none absolute max-w-full -translate-y-1/2"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, #00000000 50%, #000 50%),radial-gradient(rgba(200,200,200,0.1) 0%, transparent 80%)",
        }}
      ></div>
      <div
        aria-hidden="true"
        className="dark:hidden -top-4 left-1/2 right-1 h-[300px] w-[320px] sm:left-auto user-select-none center pointer-events-none absolute max-w-full -translate-y-1/2 bg-red-500"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, #ffffff00 50%, #fff 50%),radial-gradient(#D6E1FF90 0%, transparent 80%)",
        }}
      ></div>
      {children}
    </div>
  );
}

const CodeTsx = `function Container({
    children,
    direction = "clockwise",
  }: {
    direction: "clockwise" | "anticlockwise";
    children?: React.ReactNode;
  }) {
    return (
      <div className="h-60 w-60 p-[2px] relative overflow-hidden rounded-2xl bg-neutral-300 dark:bg-slate-800 -z-10">
        <span
          className={twMerge(
            "bg-[conic-gradient(var(--tw-gradient-stops))] absolute left-[-25%] top-[-25%] min-h-[150%] min-w-[150%] animate-border-spin-anticlockwise -z-[5]",
            direction === "clockwise"
              ? "from-transparent via-transparent to-blue-600 dark:to-purple-600 animate-border-spin-clockwise"
              : "from-blue-600 dark:from-purple-600 via-transparent to-transparent animate-border-spin-anticlockwise"
          )}
        ></span>
        <div className="min-w-full min-h-full z-20 rounded-[inherit] bg-neutral-100 dark:bg-slate-800">
          {children}
        </div>
      </div>
    );
  };`;

const CodeJsx = `function Container({
    children,
    direction = "clockwise",
  }) {
    return (
      <div className="h-60 w-60 p-[2px] relative overflow-hidden rounded-2xl bg-neutral-300 dark:bg-slate-800 -z-10">
        <span
          className={twMerge(
            "bg-[conic-gradient(var(--tw-gradient-stops))] absolute left-[-25%] top-[-25%] min-h-[150%] min-w-[150%] animate-border-spin-anticlockwise -z-[5]",
            direction === "clockwise"
              ? "from-transparent via-transparent to-blue-600 dark:to-purple-600 animate-border-spin-clockwise"
              : "from-blue-600 dark:from-purple-600 via-transparent to-transparent animate-border-spin-anticlockwise"
          )}
        ></span>
        <div className="min-w-full min-h-full z-20 rounded-[inherit] bg-neutral-100 dark:bg-slate-800">
          {children}
        </div>
      </div>
    );
  }`;

const Demo = () => {
  return (
    <div>
      <Container>
        <div className="px-10 py-20 text-s_textPrimary flex flex-col justify-center items-start gap-2 max-w-80 @md:max-w-[30rem]">
          <h1>
            This entire component has been made with TailwindCSS and is a part
            of Stratik UI Library.
          </h1>
          <button className="text-s_accent mt-4">
            Check out other components
          </button>
        </div>
      </Container>
    </div>
  );
};

const DemoString = `const Demo = () => {
    return (
      <div>
        <Container direction="clockwise">
          <div className="w-full h-full flex justify-center items-center text-center">
            <h1 className="text-2xl font-semibold text-white">
              This is a rotating border container
            </h1>
          </div>
        </Container>
      </div>
    );
  };`;

const TailwindConfigTsx: string = `import type { Config } from "tailwindcss";
  const config: Config = {
    //...
    theme: {
      extend: {
        //other code
        animation: {
          "border-spin-clockwise": "border-spin-clockwise 7s linear infinite",
          "border-spin-anticlockwise":
            "border-spin-anticlockwise 7s linear infinite",
        },
        keyframes: {
          // For @/packages/components/logo-carousel/Carousel_1.tsx
          "infinite-scroll-left": {
            from: { transform: "translateX(0)" },
            to: { transform: "translateX(-100%)" },
          },
          "infinite-scroll-right": {
            from: { transform: "translateX(-100%)" },
            to: { transform: "translateX(0%)" },
          },
          // For @/packages/components/logo-carousel/Container_4.tsx
          "border-spin-clockwise": {
            "100%": {
              transform: "rotate(360deg)",
            },
          },
          "border-spin-anticlockwise": {
            "100%": {
              transform: "rotate(-360deg)",
            },
          },
        },
      },
    },
    //...
  };
  export default config;`;

const TailwindConfigJsx: string = `const config = {
    //...
    theme: {
      extend: {
        //other code
        animation: {
          "border-spin-clockwise": "border-spin-clockwise 7s linear infinite",
          "border-spin-anticlockwise":
            "border-spin-anticlockwise 7s linear infinite",
        },
        keyframes: {
          // For @/packages/components/logo-carousel/Carousel_1.tsx
          "infinite-scroll-left": {
            from: { transform: "translateX(0)" },
            to: { transform: "translateX(-100%)" },
          },
          "infinite-scroll-right": {
            from: { transform: "translateX(-100%)" },
            to: { transform: "translateX(0%)" },
          },
          // For @/packages/components/logo-carousel/Container_4.tsx
          "border-spin-clockwise": {
            "100%": {
              transform: "rotate(360deg)",
            },
          },
          "border-spin-anticlockwise": {
            "100%": {
              transform: "rotate(-360deg)",
            },
          },
        },
      },
    },
    //...
  };
  export default config;`;

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    content: ["tailwind-css", "twMerge"],
  },
  {
    type: "code",
    content: [
      {
        name: "Container",
        content: [
          {
            language: "tsx",
            code: CodeTsx,
          },
          {
            language: "jsx",
            code: CodeJsx,
          },
        ],
      },
      {
        name: "Implementation",
        content: [
          {
            language: "tsx",
            code: DemoString,
          },
          {
            language: "jsx",
            code: DemoString,
          },
        ],
      },
      {
        name: "tailwind.config",
        content: [
          {
            language: "tsx",
            code: TailwindConfigTsx,
          },
          {
            language: "jsx",
            code: TailwindConfigJsx,
          },
        ],
      },
    ],
  },
];

const Data: DataDescription = {
  name: "Container With Conic Gradient Background",
  description: "Use this with buttons, divs, etc.",
  implementation: Implementation,
  component: Demo(),
  version_included: "0.1.3",
  display: true,
};
export default Data;
