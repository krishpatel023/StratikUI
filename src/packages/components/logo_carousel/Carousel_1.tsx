import { DataDescription, ImplementationNode } from "@/utils/constants";
import Logo, { LogoStringJsx, LogoStringTsx } from "@/packages/helper/Logo";
import { BackgroundString } from "@/packages/helper/Background";

export function Carousel({
  direction = "left",
}: {
  direction?: "left" | "right";
}) {
  const animateInDirection =
    direction === "right"
      ? "animate-infinite-scroll-right"
      : "animate-infinite-scroll-left";
  return (
    <>
      <div className="max-w-[80rem] h-28 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul
          className={`flex items-center justify-center md:justify-start [&_li]:mx-8 @md:[&_li]:mx-16  ${animateInDirection}`}
        >
          {Logo.map((item, i) => (
            <li key={i} className="p-4 hover:bg-s_secondary rounded-md">
              <item.logo className="w-10 h-10 text-s_primary" />
            </li>
          ))}
        </ul>
        <ul
          className={`flex items-center justify-center md:justify-start [&_li]:mx-8 @md:[&_li]:mx-16   ${animateInDirection}`}
        >
          {Logo.map((item, i) => (
            <li key={i} className="p-4 hover:bg-s_secondary rounded-md">
              <item.logo className="w-10 h-10 text-s_primary" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export const CarouselStringTsx: string = `export function Carousel({
  direction = "left",
}: {
  direction?: "left" | "right";
}) {
  const animateInDirection =
    direction === "right"
      ? "animate-infinite-scroll-right"
      : "animate-infinite-scroll-left";
  return (
    <>
      <div className="max-w-[80rem] h-28 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul
          className={\`flex items-center justify-center md:justify-start [&_li]:mx-8 @md:[&_li]:mx-16  \${animateInDirection}\`}
        >
          {Logo.map((item, i) => (
            <li key={i} className="p-4 hover:bg-s_secondary rounded-md">
              <item.logo className="w-10 h-10 text-s_primary" />
            </li>
          ))}
        </ul>
        <ul
          className={\`flex items-center justify-center md:justify-start [&_li]:mx-8 @md:[&_li]:mx-16   \${animateInDirection}\`}
        >
          {Logo.map((item, i) => (
            <li key={i} className="p-4 hover:bg-s_secondary rounded-md">
              <item.logo className="w-10 h-10 text-s_primary" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}`;

export const CarouselStringJsx: string = `export function Carousel({
  direction = "left",
}) {
  const animateInDirection =
    direction === "right"
      ? "animate-infinite-scroll-right"
      : "animate-infinite-scroll-left";
  return (
    <>
      <div className="max-w-[80rem] h-28 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul
          className={\`flex items-center justify-center md:justify-start [&_li]:mx-8 @md:[&_li]:mx-16  \${animateInDirection}\`}
        >
          {Logo.map((item, i) => (
            <li key={i} className="p-4 hover:bg-s_secondary rounded-md">
              <item.logo className="w-10 h-10 text-s_primary" />
            </li>
          ))}
        </ul>
        <ul
          className={\`flex items-center justify-center md:justify-start [&_li]:mx-8 @md:[&_li]:mx-16   \${animateInDirection}\`}
        >
          {Logo.map((item, i) => (
            <li key={i} className="p-4 hover:bg-s_secondary rounded-md">
              <item.logo className="w-10 h-10 text-s_primary" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}`;

function Demo() {
  return (
    <div className="w-full h-[40rem] flex flex-col justify-center items-center gap-8">
      <Carousel direction="left" />
      <Carousel direction="right" />
    </div>
  );
}

const DemoString: string = `function Demo() {
  return (
    <div className="w-full h-[40rem] flex justify-center items-center">
      <Carousel direction="left"/>
    </div>
  );
}`;

const TailwindConfigString: string = `import type { Config } from "tailwindcss";
const config: Config = {
  //...
  theme: {
    extend: {
      //...
      animation: {
        "infinite-scroll-left": "infinite-scroll-left 50s linear infinite",
        "infinite-scroll-right": "infinite-scroll-right 50s linear infinite",
      },
      keyframes: {
        "infinite-scroll-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scroll-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0%)" },
        },
      },
    },
  },
};
export default config;`;

const TailwindConfigStringJsx: string = `const config = {
  //...
  theme: {
    extend: {
      //...
      animation: {
        "infinite-scroll-left": "infinite-scroll-left 50s linear infinite",
        "infinite-scroll-right": "infinite-scroll-right 50s linear infinite",
      },
      keyframes: {
        "infinite-scroll-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scroll-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0%)" },
        },
      },
    },
  },
};
export default config;`;

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    content: ["tailwind-css"],
  },
  {
    type: "code",
    content: [
      {
        name: "Carousel",
        content: [
          {
            code: CarouselStringTsx,
            language: "tsx",
          },
          {
            code: CarouselStringJsx,
            language: "jsx",
          },
        ],
      },
      {
        name: "tailwind.config",
        content: [
          {
            code: TailwindConfigString,
            language: "tsx",
          },
          {
            code: TailwindConfigStringJsx,
            language: "jsx",
          },
        ],
      },
      {
        name: "Demo",
        content: [
          {
            code: DemoString,
            language: "tsx",
          },
          {
            code: DemoString,
            language: "jsx",
          },
        ],
      },
      {
        name: "Logo",
        content: [
          {
            code: LogoStringTsx,
            language: "tsx",
          },
          {
            code: LogoStringJsx,
            language: "jsx",
          },
        ],
      },
    ],
  },
];

const Data: DataDescription = {
  name: "Logo Carousel",
  description:
    "This is an infinite logo Carousel developed using only tailwind",
  implementation: Implementation,
  component: Demo(),
  version_included: "0.0.3",
  display: true,
};
export default Data;
