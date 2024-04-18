import { DataDescription, ImplementationNode } from "@/utils/constants";
import Image from "next/image";
import Image_1 from "@/assets/Images/Image_1.jpg";
import Image_2 from "@/assets/Images/Image_2.jpg";
import Image_3 from "@/assets/Images/Image_3.jpg";
import Image_4 from "@/assets/Images/Image_4.jpg";
import Image_5 from "@/assets/Images/Image_5.jpg";
import Image_6 from "@/assets/Images/Image_6.jpg";
import Image_7 from "@/assets/Images/Image_7.jpg";
import { Background, BackgroundString } from "@/packages/helper/Background";

function Hero() {
  return (
    <div className="w-full pt-40 @md:pt-0 @md:h-screen flex flex-col @md:flex-row gap-10 @md:gap-0 justify-center items-center  relative">
      <div className="w-full @md:w-[60%] @lg:1/2 px-10 flex flex-col justify-center items-center @lg:items-start text-center @lg:text-left gap-8">
        <h1 className="text-5xl font-bold text-s_textPrimary">
          Make the websites in lightspeed using Stratik UI
        </h1>
        <span className="text-2xl font-medium text-s_textSecondary">
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Developer Friendly.
        </span>
        <div className="flex gap-8">
          <button className="w-32 h-10 rounded-md bg-s_accent hover:bg-s_accentLight text-s_textComplementary font-semibold">
            Get Started
          </button>
          <button className="text-s_textPrimary">Learn More</button>
        </div>
      </div>
      {/* IMAGES */}
      <div className="w-full h-[40rem] @md:h-full justify-center @md:justify-start @md:items-center overflow-hidden @md:w-[40%] @lg:w-1/2 flex gap-8">
        <div className="mt-20 @md:mt-0 flex flex-col gap-8 relative">
          <div className="w-48 h-68 rounded-md">
            <Image
              src={Image_1}
              alt="hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-48 h-68 rounded-md">
            <Image
              src={Image_2}
              alt="hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 relative">
          <div className="w-48 h-68 rounded-md">
            <Image
              src={Image_3}
              alt="hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-48 h-68 rounded-md">
            <Image
              src={Image_4}
              alt="hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-48 h-68 rounded-md">
            <Image
              src={Image_5}
              alt="hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="mt-14 @md:mt-0 flex flex-col gap-8 relative">
          <div className="w-48 h-68 rounded-md">
            <Image
              src={Image_6}
              alt="hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-48 h-68 rounded-md">
            <Image
              src={Image_7}
              alt="hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <Background />
    </div>
  );
}

const Code: string = `function Hero() {
  return (
    <div className="w-full pt-40 @md:pt-0 @md:h-screen flex flex-col @md:flex-row gap-10 @md:gap-0 justify-center items-center  relative">
      <div className="w-full @md:w-[60%] @lg:1/2 px-10 flex flex-col justify-center items-center @lg:items-start text-center @lg:text-left gap-8">
        <h1 className="text-5xl font-bold text-s_textPrimary">
          Make the websites in lightspeed using Stratik UI
        </h1>
        <span className="text-2xl font-medium text-s_textSecondary">
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Developer Friendly.
        </span>
        <div className="flex gap-8">
          <button className="w-32 h-10 rounded-md bg-s_accent hover:bg-s_accentLight text-s_textComplementary font-semibold">
            Get Started
          </button>
          <button className="text-s_textPrimary">Learn More</button>
        </div>
      </div>
      {/* IMAGES */}
      <div className="w-full h-[40rem] @md:h-full justify-center @md:justify-start @md:items-center overflow-hidden @md:w-[40%] @lg:w-1/2 flex gap-8">
        <div className="mt-20 @md:mt-0 flex flex-col gap-8 relative">
          <div className="w-48 h-68 rounded-md">
            <Image
              src={Image_1}
              alt="hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-48 h-68 rounded-md">
            <Image
              src={Image_2}
              alt="hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 relative">
          <div className="w-48 h-68 rounded-md">
            <Image
              src={Image_3}
              alt="hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-48 h-68 rounded-md">
            <Image
              src={Image_4}
              alt="hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-48 h-68 rounded-md">
            <Image
              src={Image_5}
              alt="hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="mt-14 @md:mt-0 flex flex-col gap-8 relative">
          <div className="w-48 h-68 rounded-md">
            <Image
              src={Image_6}
              alt="hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-48 h-68 rounded-md">
            <Image
              src={Image_7}
              alt="hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <Background/>
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

const HeroData: DataDescription = {
  name: "Hero Section With Images",
  description:
    "This hero section can be used for websites that require images to display their credebility. It can also be used for landing pages.",
  implementation: Implementation,
  component: Hero(),
  version_included: "0.0.2",
  display: true,
};
export default HeroData;
