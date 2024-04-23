import { DataDescription, ImplementationNode } from "@/utils/constants";

import {
  Carousel,
  CarouselStringJsx,
  CarouselStringTsx,
} from "@/packages/components/hero_section/Hero_4_Helper";
import { Background, BackgroundString } from "@/packages/helper/Background";
import { twMerge } from "tailwind-merge";
import { Logo, LogoStringJsx, LogoStringTsx } from "./Hero_5_Helper";
function Hero() {
  return (
    <div className="w-full min-h-screen overflow-hidden flex flex-col @md:flex-row gap-10 @md:gap-0 justify-center items-center bg-s_background  relative">
      <div className="w-full my-24 flex flex-col justify-center items-center text-center gap-8 z-10">
        <button className="text-s_textPrimary bg-s_accentLight flex gap-2 border-2 border-s_accent rounded-full @lg:px-6 px-4 py-1 ">
          New Layouts Weekly
        </button>
        <h1 className="text-5xl font-bold  w-[90%] @lg:w-1/2 text-s_textPrimary">
          The best library for Tailwind Components.
        </h1>
        <span className="text-lg font-medium w-[30rem] max-w-[90%] text-s_textSecondary">
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Developer Friendly.
        </span>
        <div className="flex gap-8">
          <button className="px-4 h-10 rounded-md bg-s_accent hover:bg-s_accentLight text-s_textComplementary font-semibold">
            Create Free Account
          </button>
          <button className="text-s_textPrimary">View Plans</button>
        </div>
      </div>
      <LogoBackground />
    </div>
  );
}

const LogoBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center gap-[65%] @lg:gap-[35%] items-center flex-col @lg:flex-row @lg:items-end text-s_textComplementary">
      <div className="grid grid-cols-4 @lg:grid-cols-3 gap-12 @lg:gap-6">
        <div className="@lg:col-span-3 mt-10">
          <Logo.airbnb className="w-12 h-12 @lg:w-24 @lg:h-24" />
        </div>
        <div className="@lg:col-span-3 @lg:col-start-2">
          <Logo.loom className="w-12 h-12 @lg:w-24 @lg:h-24" />
        </div>{" "}
        <div className="@lg:col-span-1">
          <Logo.spotify className="w-12 h-12 @lg:w-24 @lg:h-24" />
        </div>{" "}
        <div className="@lg:col-span-1 @lg:col-start-3 mt-10">
          <Logo.dribbble className="w-12 h-12 @lg:w-24 @lg:h-24" />
        </div>
      </div>
      <div className="grid grid-cols-4 @lg:grid-cols-3 gap-12 @lg:gap-6">
        <div className="@lg:col-span-1 @lg:col-start-3">
          <Logo.podcast className="w-12 h-12 @lg:w-24 @lg:h-24" />
        </div>
        <div className="@lg:col-span-3 @lg:col-start-2 mt-10 @lg:mt-0">
          <Logo.trello className="w-12 h-12 @lg:w-24 @lg:h-24" />
        </div>{" "}
        <div className="@lg:col-span-1 mt-10 @lg:mt-0">
          <Logo.uber className="w-12 h-12 @lg:w-24 @lg:h-24 rounded-md" />
        </div>{" "}
        <div className="@lg:col-span-1 @lg:col-start-3">
          <Logo.dailymotion className="w-12 h-12 @lg:w-24 @lg:h-24 rounded-md" />
        </div>
      </div>
    </div>
  );
};

const Code: string = `function Hero() {
  return (
    <div className="w-full min-h-screen overflow-hidden flex flex-col @md:flex-row gap-10 @md:gap-0 justify-center items-center bg-s_background  relative">
      <div className="w-full my-24 flex flex-col justify-center items-center text-center gap-8 z-10">
        <button className="text-s_textPrimary bg-s_accentLight flex gap-2 border-2 border-s_accent rounded-full @lg:px-6 px-4 py-1 ">
          New Layouts Weekly
        </button>
        <h1 className="text-5xl font-bold  w-[90%] @lg:w-1/2 text-s_textPrimary">
          The best library for Tailwind Components.
        </h1>
        <span className="text-lg font-medium w-[30rem] max-w-[90%] text-s_textSecondary">
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Developer Friendly.
        </span>
        <div className="flex gap-8">
          <button className="px-4 h-10 rounded-md bg-s_accent hover:bg-s_accentLight text-s_textComplementary font-semibold">
            Create Free Account
          </button>
          <button className="text-s_textPrimary">View Plans</button>
        </div>
      </div>
      <LogoBackground />
    </div>
  );
}`;

const LogogBackgroundString = `const LogoBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center gap-[65%] @lg:gap-[35%] items-center flex-col @lg:flex-row @lg:items-end text-s_textComplementary">
      <div className="grid grid-cols-4 @lg:grid-cols-3 gap-12 @lg:gap-6">
        <div className="@lg:col-span-3 mt-10">
          <Logo.airbnb className="w-12 h-12 @lg:w-24 @lg:h-24" />
        </div>
        <div className="@lg:col-span-3 @lg:col-start-2">
          <Logo.loom className="w-12 h-12 @lg:w-24 @lg:h-24" />
        </div>{" "}
        <div className="@lg:col-span-1">
          <Logo.spotify className="w-12 h-12 @lg:w-24 @lg:h-24" />
        </div>{" "}
        <div className="@lg:col-span-1 @lg:col-start-3 mt-10">
          <Logo.dribbble className="w-12 h-12 @lg:w-24 @lg:h-24" />
        </div>
      </div>
      <div className="grid grid-cols-4 @lg:grid-cols-3 gap-12 @lg:gap-6">
        <div className="@lg:col-span-1 @lg:col-start-3">
          <Logo.podcast className="w-12 h-12 @lg:w-24 @lg:h-24" />
        </div>
        <div className="@lg:col-span-3 @lg:col-start-2 mt-10 @lg:mt-0">
          <Logo.trello className="w-12 h-12 @lg:w-24 @lg:h-24" />
        </div>{" "}
        <div className="@lg:col-span-1 mt-10 @lg:mt-0">
          <Logo.uber className="w-12 h-12 @lg:w-24 @lg:h-24" />
        </div>{" "}
        <div className="@lg:col-span-1 @lg:col-start-3">
          <Logo.dailymotion className="w-12 h-12 @lg:w-24 @lg:h-24" />
        </div>
      </div>
    </div>
  );
};`;

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    content: ["tailwind-css"],
  },
  {
    type: "code",
    content: [
      {
        name: "Hero",
        content: [
          {
            code: Code,
            language: "tsx",
          },
          {
            code: Code,
            language: "jsx",
          },
        ],
      },
      {
        name: "LogoBackground",
        content: [
          {
            code: LogogBackgroundString,
            language: "tsx",
          },
          {
            code: LogogBackgroundString,
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

const HeroData: DataDescription = {
  name: "Hero Section brand association",
  description: "This is a hero section with brand assosiations.",
  implementation: Implementation,
  component: Hero(),
  version_included: "0.0.2",
  display: true,
};
export default HeroData;
