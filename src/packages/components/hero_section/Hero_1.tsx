import { Background, BackgroundString } from "@/packages/helper/Background";
import { DataDescription, ImplementationNode } from "@/utils/constants";

function Hero_1() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center  relative">
      <div className="flex flex-col justify-center items-center text-center gap-8">
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
      </div>
      <Background />
    </div>
  );
}

const Code: string = `function Hero() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center  relative">
      <div className="flex flex-col justify-center items-center text-center gap-8">
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
    ],
  },
];
const HeroData_1: DataDescription = {
  name: "Default Hero Section",
  description:
    "This is a default hero section that is simple and elegant for any purpose.",
  implementation: Implementation,
  component: Hero_1(),
  version_included: "0.0.2",
  display: true,
};
export default HeroData_1;
