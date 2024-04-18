import { DataDescription, ImplementationNode } from "@/utils/constants";

import {
  Carousel,
  CarouselStringJsx,
  CarouselStringTsx,
} from "@/packages/components/hero_section/Hero_4_Helper";
import { Background, BackgroundString } from "@/packages/helper/Background";
import { LogoStringJsx, LogoStringTsx } from "@/packages/helper/Logo";
function Hero() {
  return (
    <div className="w-full min-h-screen overflow-hidden flex flex-col @md:flex-row gap-10 @md:gap-0 justify-center items-center  relative">
      <div className="w-full my-24 flex flex-col justify-center items-center text-center gap-8 z-10">
        <button className="text-s_textPrimary flex gap-2 border-2 border-s_accent rounded-full @lg:px-6 px-4 py-1 ">
          View all the latest components.
          <span className="text-s_accent hidden @lg:block">Read More</span>
        </button>
        <h1 className="text-5xl font-bold  w-[90%] @lg:w-1/2 text-s_textPrimary">
          Make the websites in lightspeed using Stratik UI
        </h1>
        <span className="text-2xl font-medium w-[90%] @lg:w-3/4 text-s_textSecondary">
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Developer Friendly.
        </span>
        <div className="flex gap-8">
          <button className="w-32 h-10 rounded-md bg-s_accent hover:bg-s_accentLight text-s_textComplementary">
            Get Started
          </button>
          <button className="text-s_textPrimary">Learn More</button>
        </div>
        <h2 className="text-s_textPrimary font-semibold text-2xl mt-8">
          Meet Our Partners
        </h2>

        <Carousel />
      </div>
      <Background />
    </div>
  );
}

const Code: string = `function Hero() {
  return (
    <div className="w-full min-h-screen overflow-hidden flex flex-col @md:flex-row gap-10 @md:gap-0 justify-center items-center  relative">
      <div className="w-full my-24 flex flex-col justify-center items-center text-center gap-8 z-10">
        <button className="text-s_textPrimary flex gap-2 border-2 border-s_accent rounded-full @lg:px-6 px-4 py-1 ">
          View all the latest components.
          <span className="text-s_accent hidden @lg:block">Read More</span>
        </button>
        <h1 className="text-5xl font-bold  w-[90%] @lg:w-1/2 text-s_textPrimary">
          Make the websites in lightspeed using Stratik UI
        </h1>
        <span className="text-2xl font-medium w-[90%] @lg:w-3/4 text-s_textSecondary">
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Developer Friendly.
        </span>
        <div className="flex gap-8">
          <button className="w-32 h-10 rounded-md bg-s_accent hover:bg-s_accentLight text-s_textComplementary">
            Get Started
          </button>
          <button className="text-s_textPrimary">Learn More</button>
        </div>
        <h1 className="text-s_textPrimary font-semibold text-2xl mt-8">
          Meet Our Partners
        </h1>

        <Carousel />
      </div>
      <Background />
    </div>
  );
}`;

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
        name: "Background",
        content: [
          {
            code: BackgroundString,
            language: "tsx",
          },
          {
            code: BackgroundString,
            language: "jsx",
          },
        ],
      },
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
  name: "Hero Section with Carousel",
  description: "This is a hero section with carousel",
  implementation: Implementation,
  component: Hero(),
  version_included: "0.0.2",
  display: true,
};
export default HeroData;
