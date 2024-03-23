import { useEffect } from "react";
import { DataDescription, ImplementationNode } from "@/utils/constants";
import StringCleaner from "@/scripts/StringCleaner";

function Hero_1() {
  return (
    <div
      className={`w-full h-[calc(100vh-4rem)] flex flex-col justify-center items-center bg-s_background`}
    >
      <div className="flex flex-col justify-center items-center text-center gap-6">
        <h1 className="text-5xl font-bold  w-[90%] @lg:w-1/2 @lg:text-red-500 text-green-400 ">
          Make the websites in lightspeed using Stratik UI
        </h1>
        <span className="text-2xl font-medium w-[90%] @lg:w-3/4 text-s_accent">
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Developer Friendly.
        </span>
        <a
          className="w-32 h-10 rounded-md bg-primary hover:bg-primaryHover text-textComplementary text-center flex justify-center items-center "
          href="/components"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

const ButtonCode: string = StringCleaner(`function Hero_1() {
  return (
    <div
      className={\`w-full h-[calc(100vh-4rem)] flex flex-col justify-center items-center bg-s_background\`}
    >
      <div className="flex flex-col justify-center items-center text-center gap-6 border-s_border">
        <h1 className="text-5xl font-bold  w-[90%] @lg:w-1/2 @lg:text-red-500 text-green-400 ">
          Make the websites in lightspeed using Stratik UI
        </h1>
        <span className="text-2xl font-medium w-[90%] @lg:w-3/4 text-s_accent darkComponent:text-s_accent">
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Developer Friendly.
        </span>
        <a
          className="w-32 h-10 rounded-md bg-primary hover:bg-primaryHover text-textComplementary text-center flex justify-center items-center "
          href="/components"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}`);

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    title: "Technology Used",
    content: ["tailwind-css"],
  },
  {
    type: "code",
    title: "Code",
    content: ButtonCode,
  },
];

const HeroData_1: DataDescription = {
  name: "Default Hero Section",
  description: "This is a default hero section",
  implementation: Implementation,
  component: Hero_1(),
  version_included: "0.0.0",
  display: true,
};
export default HeroData_1;
