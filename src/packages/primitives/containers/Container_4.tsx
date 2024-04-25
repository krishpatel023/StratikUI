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
      <Container direction="clockwise">
        <div className="w-full h-full flex justify-center items-center text-center">
          <h1 className="text-2xl font-semibold text-s_textSecondary">
            This is a rotating border container
          </h1>
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
  name: "Rotating Border Animation",
  description: "Use this with buttons, divs, etc.",
  implementation: Implementation,
  component: Demo(),
  version_included: "0.0.3",
  display: true,
};
export default Data;
