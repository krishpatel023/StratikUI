import {
  DataDescription,
  IconProps,
  ImplementationNode,
} from "@/utils/constants";
import Logo from "@/packages/helper/Logo";

function Carousel({ direction = "left" }) {
  const animateInDirection =
    direction === "right"
      ? "animate-infinite-scroll-right"
      : "animate-infinite-scroll-left";
  return (
    <>
      <div className="max-w-[80rem] h-28 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul
          className={`flex items-center justify-center md:justify-start [&_li]:mx-16   ${animateInDirection}`}
        >
          {Logo.map((item, i) => (
            <li key={i} className="p-4 hover:bg-s_secondary rounded-md">
              <item.logo className="w-16 h-16 text-s_primary" />
            </li>
          ))}
        </ul>
        <ul
          className={`flex items-center justify-center md:justify-start [&_li]:mx-16   ${animateInDirection}`}
        >
          {Logo.map((item, i) => (
            <li key={i} className="p-4 hover:bg-s_secondary rounded-md">
              <item.logo className="w-16 h-16 text-s_primary" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function Demo() {
  return (
    <div className="w-full h-[40rem] flex flex-col justify-center items-center gap-8">
      <Carousel direction="left" />
      <Carousel direction="right" />
    </div>
  );
}
const Code: string = `function Carousel({ direction = "left" }) {
  const animateInDirection =
    direction === "right"
      ? "animate-infinite-scroll-right"
      : "animate-infinite-scroll-left";
  return (
    <>
      <div className="max-w-[80rem] h-28 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul
          className={\`flex items-center justify-center md:justify-start [&_li]:mx-16   \${animateInDirection}\`}
        >
          {Logo.map((item, i) => (
            <li key={i}>
              <item.logo className="w-16 h-16 text-s_primary" />
            </li>
          ))}
        </ul>
        <ul
          className={\`flex items-center justify-center md:justify-start [&_li]:mx-16   \${animateInDirection} \`}
        >
          {Logo.map((item, i) => (
            <li key={i}>
              <item.logo className="w-16 h-16 text-s_primary" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}`;

const BackgroundString: string = `const Logo = [
    {
      name: "Apple",
      logo: (props: IconProps) => (
        <svg
          fill="currentColor"
          viewBox="-52.01 0 560.035 560.035"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655"></path>
          </g>
        </svg>
      ),
    },
    // Add others in this format
]`;

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

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    title: "Technology Used",
    content: ["tailwind-css"],
  },
  {
    type: "code",
    title: "Code",
    content: Code,
  },
  {
    type: "code",
    title: "Code",
    content: TailwindConfigString,
  },
  {
    type: "code",
    title: "Code",
    content: DemoString,
  },
  {
    type: "code",
    title: "Background Used in Code",
    content: BackgroundString,
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
